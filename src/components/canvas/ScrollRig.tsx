"use client";

import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

export default function ScrollRig() {
  const scroll = useScroll();

  useFrame((state, delta) => {
    // scroll.offset goes from 0 to 1
    const offset = scroll.offset;
    
    // Animate camera position based on scroll to create a narrative journey
    state.camera.position.y = -offset * 10;
    state.camera.position.z = 5 + offset * 5;
    state.camera.lookAt(0, -offset * 10, 0);
  });

  return null;
}
