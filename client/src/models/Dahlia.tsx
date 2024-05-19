/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Marche (https://sketchfab.com/l_marche_l)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/dahlias-f4952ddd84c945dea5ddd522eabdbec6
Title: Dahlias
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import dahliaScene from "../assets/3d/dahlias.glb";

const Dahlia = ({ isRotating, setIsRotating, ...props }) => {
    const dahliaRef = useRef();
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(dahliaScene);

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

            dahliaRef.current.rotation.y += delta * 0.01 * Math.PI;

            lastX.current = clientX;

            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            if (!isRotating) setIsRotating(true);
            dahliaRef.current.rotation.y += 0.01 * Math.PI;
            rotationSpeed.current = 0.0125;
        } else if (e.key === 'ArrowRight') {
            if (!isRotating) setIsRotating(true);
            dahliaRef.current.rotation.y -= 0.01 * Math.PI;
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

            dahliaRef.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = dahliaRef.current.rotation.y;
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
        <a.group {...props} ref={dahliaRef}>
            <group {...props} dispose={null}>
                <group scale={0.01}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane25_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pSphere1_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane44_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane45_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane46_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane48_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane50_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane51_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane24_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface45_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface46_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface47_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface48_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface49_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface50_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface51_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface52_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface53_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface54_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface55_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface56_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface57_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface58_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface59_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface60_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface61_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface62_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface63_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface64_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface65_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface66_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface1_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface2_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface3_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface4_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface5_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface6_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface7_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface8_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface9_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface10_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface11_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface12_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface13_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface14_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface15_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface16_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface17_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface18_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface19_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface20_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface21_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface22_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface23_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface24_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface25_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface26_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface27_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface28_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface29_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface30_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface31_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface32_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface33_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface34_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface35_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface37_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface38_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface39_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface40_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface41_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface42_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface43_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface44_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane52_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane53_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane54_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane55_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane56_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane57_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane58_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane59_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane60_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_pPlane61_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DahliaFinal__1_polySurface36_lambert2_0.geometry}
                    material={materials.lambert2}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane56_lambert2_0.geometry}
                    material={materials.lambert2}
                    position={[-1.928, 323.665, 1167.679]}
                    rotation={[0, 0, -0.233]}
                    scale={0.685}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane53_lambert2_0.geometry}
                    material={materials.lambert2}
                    position={[-124.216, 4.52, 54.881]}
                    rotation={[0, 0, 0.247]}
                    />
                </group>
            </group>
        </a.group>
    )
}

export default Dahlia