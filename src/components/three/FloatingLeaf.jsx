import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedural 3D Leaf Mesh
export default function FloatingLeaf({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, speed = 1 }) {
  const meshRef = useRef(null);

  // Custom leaf geometry shape
  const leafShape = React.useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.3, 0.4, 0.4, 0.9, 0, 1.4);
    shape.bezierCurveTo(-0.4, 0.9, -0.3, 0.4, 0, 0);
    return shape;
  }, []);

  const extrudeSettings = React.useMemo(
    () => ({
      depth: 0.05,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.03,
      bevelThickness: 0.02,
    }),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime() * speed;
    meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.25;
    meshRef.current.rotation.x = rotation[0] + Math.sin(t * 0.8) * 0.2;
    meshRef.current.rotation.y = rotation[1] + Math.cos(t * 0.5) * 0.4;
    meshRef.current.rotation.z = rotation[2] + Math.sin(t * 0.6) * 0.3;
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={[scale, scale, scale]}
      castShadow
      receiveShadow
    >
      <extrudeGeometry args={[leafShape, extrudeSettings]} />
      <meshStandardMaterial
        color="#28C719"
        roughness={0.25}
        metalness={0.1}
        emissive="#14800B"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}
