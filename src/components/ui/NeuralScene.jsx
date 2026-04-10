import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function NeuralScene() {
    const pointsRef = useRef();
    const linesRef = useRef();
    const count = 350;
    const maxConnectDist = 2.5;

    const { positions, colors } = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const cols = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = 3.5 + (Math.random() - 0.5) * 3;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);

            // Mix between cyan and purple
            const t = Math.random();
            cols[i * 3] = t * 0.0 + (1 - t) * 0.66;   // R
            cols[i * 3 + 1] = t * 0.83 + (1 - t) * 0.33; // G
            cols[i * 3 + 2] = t * 1.0 + (1 - t) * 0.97;  // B
        }
        return { positions: pos, colors: cols };
    }, []);

    // Build connection line positions
    const linePositions = useMemo(() => {
        const pts = [];
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (dist < maxConnectDist) {
                    pts.push(
                        positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                        positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                    );
                }
            }
        }
        return new Float32Array(pts);
    }, [positions]);

    const basePos = useMemo(() => positions.slice(), [positions]);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        if (!pointsRef.current) return;

        // Slow organic drift
        const arr = pointsRef.current.geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
            const ix = i * 3, iy = ix + 1, iz = ix + 2;
            const bx = basePos[ix], by = basePos[iy], bz = basePos[iz];
            const wave = Math.sin(bx * 0.4 + t * 0.6) * Math.cos(by * 0.4 + t * 0.4) * 0.15;
            arr[ix] = bx + wave;
            arr[iy] = by + Math.sin(bz * 0.4 + t * 0.5) * 0.15;
            arr[iz] = bz + Math.cos(bx * 0.4 + t * 0.7) * 0.12;
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        // Group rotation
        if (pointsRef.current.parent) {
            pointsRef.current.parent.rotation.y = t * 0.05;
        }
    });

    return (
        <group>
            {/* Points */}
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
                    <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
                </bufferGeometry>
                <pointsMaterial
                    size={0.05}
                    vertexColors
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </points>

            {/* Connection lines */}
            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
                </bufferGeometry>
                <lineBasicMaterial
                    color="#00d4ff"
                    transparent
                    opacity={0.04}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </lineSegments>
        </group>
    );
}
