import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NetworkNodes({ count = 46 }) {
  const groupRef = useRef();
  const pointsRef = useRef();

  const { positions, lines } = useMemo(() => {
    const pts = [];
    for (let i = 0; i < count; i++) {
      const r = 3.4 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pts.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.7,
          r * Math.cos(phi)
        )
      );
    }
    const positions = new Float32Array(pts.length * 3);
    pts.forEach((p, i) => {
      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;
    });

    // connect nearby nodes
    const linePositions = [];
    for (let i = 0; i < pts.length; i++) {
      let neighbors = 0;
      for (let j = i + 1; j < pts.length; j++) {
        if (neighbors >= 2) break;
        if (pts[i].distanceTo(pts[j]) < 2.1) {
          linePositions.push(
            pts[i].x, pts[i].y, pts[i].z,
            pts[j].x, pts[j].y, pts[j].z
          );
          neighbors++;
        }
      }
    }

    return { positions, lines: new Float32Array(linePositions) };
  }, [count]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.06;
    groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.08;

    const px = state.pointer.x;
    const py = state.pointer.y;
    groupRef.current.rotation.y += px * 0.25;
    groupRef.current.rotation.x += -py * 0.15;
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#3f6fd6" transparent opacity={0.35} />
      </lineSegments>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.09}
          color="#22d3ee"
          transparent
          opacity={0.95}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

function DriftingParticles({ count = 200 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#6d7dab" transparent opacity={0.5} />
    </points>
  );
}

export default function HeroScene({ reducedMotion }) {
  if (reducedMotion) {
    return null;
  }
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <NetworkNodes />
      <DriftingParticles />
    </Canvas>
  );
}
