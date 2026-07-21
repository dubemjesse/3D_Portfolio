
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 100 }) => {
  const particlesRef = useRef();
  const positions = useRef(new Float32Array(count * 3));

  // Initialize random positions for particles
  for (let i = 0; i < count; i++) {
    positions.current[i * 3] = (Math.random() - 0.5) * 40; // x
    positions.current[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
    positions.current[i * 3 + 2] = (Math.random() - 0.5) * 40; // z
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={particlesRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions.current}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#62e0ff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </group>
  );
};

export default Particles;
