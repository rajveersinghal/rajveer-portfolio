import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial } from '@react-three/drei';

export default function SkillOrb({ title, position, color }) {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.position.y += Math.sin(time + position[0]) * 0.005;
    });

    return (
        <group position={position}>
            <Float speed={5} rotationIntensity={2} floatIntensity={2}>
                <mesh ref={meshRef}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <MeshDistortMaterial
                        color={color}
                        speed={3}
                        distort={0.4}
                        radius={1}
                    />
                </mesh>
                <Text
                    position={[0, 0, 1.2]}
                    fontSize={0.4}
                    color="white"
                    font="/fonts/SpaceGrotesk-Bold.ttf"
                    anchorX="center"
                    anchorY="middle"
                >
                    {title}
                </Text>
            </Float>
        </group>
    );
}
