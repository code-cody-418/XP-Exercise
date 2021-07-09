import React, { Suspense } from "react";




import "./animation.css";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Barret from "../Barret";

export default function AnimationScene() {
    return (
        <>
        <Canvas shadows camera={{ position: [1, 2, 3], fov: 60 }}>
            <OrbitControls />
            {/*<ambientLight intensity={1} />*/}
            <directionalLight
                castShadow
                position={[0, 10, 0]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight position={[-10, 0, -20]} intensity={0.5}/>
            <pointLight position={[0, 0, 0]} intensity={1.5}/>
            <Suspense fallback={null}>
                <Barret />
            </Suspense>

            <group>
                <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -3, 0]}
                receiveShadow>
                <planeBufferGeometry attach='geometry' args={[100, 100]}/>
                {/*<shadowMaterial attach='material' opacity={0.3} />*/}
                <meshStandardMaterial attach='material' color={"blue"} />
                </mesh>
            </group>

        </Canvas>
        </>
    );
}
