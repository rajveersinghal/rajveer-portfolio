import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

export default function NeuralGlobe() {
    const outerRef = useRef();
    const innerRef = useRef();

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        if (outerRef.current) {
            outerRef.current.rotation.x = t * 0.12;
            outerRef.current.rotation.y = t * 0.18;
        }
        if (innerRef.current) {
            innerRef.current.rotation.x = -t * 0.08;
            innerRef.current.rotation.z = t * 0.1;
        }
    });

    return (
        <group>
            {/* Pulsing glow core */}
            <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
                <mesh scale={0.6}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial
                        color="#00d4ff"
                        emissive="#00d4ff"
                        emissiveIntensity={1.5}
                        transparent
                        opacity={0.15}
                    />
                </mesh>
            </Float>

            {/* Wireframe outer shell - cyan */}
            <mesh ref={outerRef} scale={1.8}>
                <icosahedronGeometry args={[1, 3]} />
                <meshStandardMaterial
                    color="#00d4ff"
                    emissive="#00d4ff"
                    emissiveIntensity={0.3}
                    wireframe
                    transparent
                    opacity={0.25}
                />
            </mesh>

            {/* Wireframe inner shell - purple */}
            <mesh ref={innerRef} scale={1.3}>
                <icosahedronGeometry args={[1, 2]} />
                <meshStandardMaterial
                    color="#a855f7"
                    emissive="#a855f7"
                    emissiveIntensity={0.4}
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>

            {/* Distorted blob center */}
            <mesh scale={0.9}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color="#0a1a3a"
                    emissive="#00d4ff"
                    emissiveIntensity={0.05}
                    distort={0.25}
                    speed={2}
                    transparent
                    opacity={0.9}
                    roughness={0.1}
                    metalness={0.8}
                />
            </mesh>
        </group>
    );
}
