"use client";

import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";

export default function AdaptiveQuality() {
  return (
    <>
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </>
  );
}
