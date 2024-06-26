/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Gajk.Mv (https://sketchfab.com/Gajk.Mv)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/flowers-with-the-vase-0f58352d377840cdbeef0bd71b24aff6
Title: flowers with the vase
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import flowerScene from "../assets/3d/flowers_with_the_vase.glb";

const Flowers = ({ isRotating, setIsRotating, ...props }) => {
    const flowerRef = useRef();
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(flowerScene);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0.5);
    const dampingFactor = 0.95;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);

        const clientX = e.touches 
            ?  e.touches[0].clientX 
            : e.clientX;

        lastX.current = clientX;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (isRotating) {
            const clientX = e.touches 
            ?  e.touches[0].clientX 
            : e.clientX;

            const delta = (clientX - lastX.current) / viewport.width;

            flowerRef.current.rotation.y += delta * 0.01 * Math.PI;

            lastX.current = clientX;

            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            if (!isRotating) setIsRotating(true);
            flowerRef.current.rotation.y += 0.01 * Math.PI;
            rotationSpeed.current = 0.0125;
        } else if (e.key === 'ArrowRight') {
            if (!isRotating) setIsRotating(true);
            flowerRef.current.rotation.y -= 0.01 * Math.PI;
            rotationSpeed.current = -0.0125;
        }
    };

    const handleKeyUp = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false);
        }
    };

    useFrame(() => {
        if (!isRotating) {
            rotationSpeed.current *= dampingFactor;

            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }

            flowerRef.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = flowerRef.current.rotation.y;
        }
    });

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointerup', handlePointerUp);
        canvas.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointerup', handlePointerUp);
            canvas.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

    return (
        <a.group {...props} ref={flowerRef}>
            <group>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={0.013}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[-0.001, 2.641, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['GrowFX01_Material_#60_0'].geometry}
                            material={materials.Material_60}
                            />
                            <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['GrowFX01_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                            />
                            <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['GrowFX01_02_-_Default_0'].geometry}
                            material={materials['02_-_Default']}
                            />
                        </group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['Plane01_Material_#34_0'].geometry}
                            material={materials.Material_34}
                            position={[-0.001, 0.001, 0]}
                            rotation={[-Math.PI / 2, 0, 0]}
                        />
                    </group>
                </group>
            </group>
        </a.group>
    )
}

export default Flowers