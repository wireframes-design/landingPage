/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef } from "react";
import { useSpring } from "react-spring";

// const GLOBE_CONFIG: COBEOptions = {
//   width: 10,
//   height: 10,
//   onRender: () => {},
//   devicePixelRatio: 0,
//   phi: 0,
//   theta: 0.3,
//   dark: 0,
//   diffuse: 0.4,
//   mapSamples: 16000,
//   mapBrightness: 1.2,
//   baseColor: [1, 1, 1],
//   markerColor: [251 / 255, 100 / 255, 21 / 255],
//   glowColor: [1, 1, 1],
//   markers: [
//     { location: [14.5995, 120.9842], size: 0.03 },
//     { location: [19.076, 72.8777], size: 0.1 },
//     { location: [23.8103, 90.4125], size: 0.05 },
//     { location: [30.0444, 31.2357], size: 0.07 },
//     { location: [39.9042, 116.4074], size: 0.08 },
//     { location: [-23.5505, -46.6333], size: 0.1 },
//     { location: [19.4326, -99.1332], size: 0.1 },
//     { location: [40.7128, -74.006], size: 0.1 },
//     { location: [34.6937, 135.5022], size: 0.05 },
//     { location: [41.0082, 28.9784], size: 0.06 },
//   ],
// };

const GLOBE_CONFIG: COBEOptions = {
  devicePixelRatio: 2,
  width: 600 * 2,
  height: 600 * 2,
  phi: 0,
  theta: 0,
  dark: 0.9,
  diffuse: 1.2,
  onRender: () => {},
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.03529, 0.73725, 0.82745],//rip color
  markerColor: [0.80000, 0.95294, 1.00000],
  glowColor: [0.00000, 0.58824, 0.53333],
  markers: [
    // longitude latitude
    { location: [37.7595, -122.4367], size: 0.03 },
    { location: [40.7128, -74.006], size: 0.1 },
  ],
};
export default function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value;
    canvasRef.current!.style.cursor = value ? "grabbing" : "grab";
  };

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      api.start({ r: delta / 200 });
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r.get();
      state.width = width * 2;
      state.height = width * 2;
    },
    [pointerInteracting, phi, r]
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: 600 * 2,
      height: 600 * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
