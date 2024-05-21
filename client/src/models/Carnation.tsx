/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: GardenBee (https://sketchfab.com/pocketpastel456)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/single-flower-carnation-pink-0ce93a5db10d493f8d439b110426165a
Title: Single flower / Carnation Pink
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import carnationScene from "../assets/3d/single_flower__carnation_pink.glb";

const Carnation = ({ isRotating, setIsRotating, ...props }) => {
    const carnationRef = useRef();
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(carnationScene);

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

            carnationRef.current.rotation.y += delta * 0.01 * Math.PI;

            lastX.current = clientX;

            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            if (!isRotating) setIsRotating(true);
            carnationRef.current.rotation.y += 0.01 * Math.PI;
            rotationSpeed.current = 0.0125;
        } else if (e.key === 'ArrowRight') {
            if (!isRotating) setIsRotating(true);
            carnationRef.current.rotation.y -= 0.01 * Math.PI;
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

            carnationRef.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = carnationRef.current.rotation.y;
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
        <a.group {...props} ref={carnationRef}>
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials['Material_9.001']}
                    position={[-1.2, 2.032, 0]}
                    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                    scale={35.05}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials['Material_9.003']}
                    position={[2.777, 21.01, 0.403]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials['Material_9.003']}
                    position={[-2.786, 17.116, 0.403]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials['Material.006']}
                    position={[-1.962, -34.106, 0]}
                    scale={[9.069, 14.256, 9.069]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials['petal-red03.001']}
                    position={[-6.566, 47.851, 0.021]}
                    rotation={[-2.982, 0.447, 2.759]}
                />
            </group>
        </a.group>
    )
}

export default Carnation