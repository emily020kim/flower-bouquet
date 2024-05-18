/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Lassi Kaukonen (https://sketchfab.com/thesidekick)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/orchid-flower-75d19624c0d04b65975e011a04ae77a0
Title: Orchid flower
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import orchidScene from "../assets/3d/orchid_flower.glb";

const Orchid = ({ isRotating, setIsRotating, ...props }) => {
    const orchidRef = useRef();
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(orchidScene);

    useEffect(() => {
        console.log('Loaded GLTF:', { nodes, materials });
    }, [nodes, materials]);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0.5);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);

        const clientX = e.touches 
            ?  e.touches[0].clientX 
            : e.clientX;

        lastX.current = clientX;
    };

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    };

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (isRotating) {
            const clientX = e.touches 
                ?  e.touches[0].clientX 
                : e.clientX;

            const delta = (clientX - lastX.current) / viewport.width;

            if (orchidRef.current) {
                orchidRef.current.rotation.y += delta * 0.01 * Math.PI;
                rotationSpeed.current = delta * 0.01 * Math.PI;
            }

            lastX.current = clientX;
        }
    };

    const handleKeyDown = (e) => {
        if (orchidRef.current) {
            if (e.key === 'ArrowLeft') {
                if (!isRotating) setIsRotating(true);
                orchidRef.current.rotation.y += 0.01 * Math.PI;
                rotationSpeed.current = 0.0125;
            } else if (e.key === 'ArrowRight') {
                if (!isRotating) setIsRotating(true);
                orchidRef.current.rotation.y -= 0.01 * Math.PI;
                rotationSpeed.current = -0.0125;
            }
        }
    };

    const handleKeyUp = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false);
        }
    };

    useFrame(() => {
        if (orchidRef.current) {
            if (!isRotating) {
                rotationSpeed.current *= dampingFactor;

                if (Math.abs(rotationSpeed.current) < 0.001) {
                    rotationSpeed.current = 0;
                }

                orchidRef.current.rotation.y += rotationSpeed.current;
            } else {
                const rotation = orchidRef.current.rotation.y;
            }
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
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

    if (!nodes || !materials) {
        return null; // or a loading spinner
    }

    return (
        <a.group {...props} ref={orchidRef}>
            <group {...props} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={materials.Orchid_Highpoly}
                    />
                </group>
            </group>
        </a.group>
    );
};

export default Orchid;