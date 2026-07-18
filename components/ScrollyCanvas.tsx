"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

import Overlay from "./Overlay";
import Socials from "./Socials";

interface ScrollyCanvasProps {
  /** Called with a 0–100 value as each frame image loads. */
  onProgress?: (percent: number) => void;
  /** Called once the very first frame has been painted to the canvas. */
  onFirstFrameReady?: () => void;
}

export default function ScrollyCanvas({ onProgress, onFirstFrameReady }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Two-gate readiness: the loading screen stays up until BOTH conditions are
  // satisfied simultaneously:
  //   gate A — first frame has been drawn onto the canvas
  //   gate B — the full image array has been committed to React state, meaning
  //            useMotionValueEvent is subscribed and scroll animation is live
  // We use refs (not state) for the gates so checking them never causes a render.
  const firstFrameDrawn = useRef(false);
  const allImagesReady = useRef(false);
  const readySignalled = useRef(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 119]);

  // Called internally whenever either gate flips — fires onFirstFrameReady
  // exactly once when both gates are satisfied.
  const checkReady = useRef(() => {
    if (!readySignalled.current && firstFrameDrawn.current && allImagesReady.current) {
      readySignalled.current = true;
      // A second rAF ensures the browser has composited the newly-set images
      // state AND the canvas draw before we dismiss the loader.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          onFirstFrameReady?.();
        });
      });
    }
  });

  // Preload images
  useEffect(() => {
    const TOTAL = 120;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < TOTAL; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.png`;

      img.onload = () => {
        loadedCount++;
        onProgress?.((loadedCount / TOTAL) * 100);

        // Gate A: draw frame 0 as soon as it arrives, regardless of load order.
        if (!firstFrameDrawn.current && loadedImages[0]?.complete) {
          firstFrameDrawn.current = true;
          drawFrame(loadedImages[0]);
          checkReady.current();
        }

        // Gate B: all frames loaded → commit to React state so the
        // useMotionValueEvent subscription becomes live.
        if (loadedCount === TOTAL) {
          allImagesReady.current = true;
          setImages(loadedImages);
          // Ensure frame 0 is shown even if gate A fired before setImages.
          drawFrame(loadedImages[0]);
          checkReady.current();
        }
      };

      img.onerror = () => {
        loadedCount++;
        onProgress?.((loadedCount / TOTAL) * 100);
        // Still need to reach TOTAL even on error so gate B can fire.
        if (loadedCount === TOTAL) {
          allImagesReady.current = true;
          setImages(loadedImages);
          checkReady.current();
        }
      };

      loadedImages.push(img);
    }
  }, []);

  const drawFrame = (img: HTMLImageElement) => {
    if (!canvasRef.current || !img) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to window size to ensure high resolution
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    // Object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      // Image is wider than canvas
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    } else {
      // Image is taller than canvas
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const idx = Math.floor(latest);
    if (images[idx]) {
      drawFrame(images[idx]);
    }
  });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (images.length > 0) {
        drawFrame(images[Math.floor(frameIndex.get())]);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        <Overlay scrollYProgress={scrollYProgress} />
        <Socials />
      </div>
    </div>
  );
}
