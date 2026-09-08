"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { easing } from "maath";

export default function HeroModel() {
  const pointsRef = useRef<THREE.Points>(null!);
  
  const particleCount = 1500;
  
  const [positions, speeds, phases, scales] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const spd = new Float32Array(particleCount);
    const phs = new Float32Array(particleCount);
    const scl = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5; // z
      
      spd[i] = 0.2 + Math.random() * 0.8;
      phs[i] = Math.random() * Math.PI * 2;
      scl[i] = Math.random();
    }
    
    return [pos, spd, phs, scl];
  }, [particleCount]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    const positionsAttr = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Float upwards
      positionsAttr[i3 + 1] += speeds[i] * delta * 0.4;
      
      // Gentle sway
      positionsAttr[i3] += Math.sin(time * speeds[i] + phases[i]) * delta * 0.05;
      
      // Wrap around
      if (positionsAttr[i3 + 1] > 12) {
        positionsAttr[i3 + 1] = -12;
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Parallax
    easing.damp3(pointsRef.current.position, [state.pointer.x * 1.5, state.pointer.y * 1.5, 0], 0.3, delta);
    pointsRef.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={scales}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.06} 
        color="#cca052" 
        transparent 
        opacity={0.8} 
        sizeAttenuation 
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
