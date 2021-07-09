import React, { Suspense } from "react";




import "./styles.css";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Barret from "../Barret";

export default function AnimationScene() {
    return (
        <Canvas>
            <OrbitControls />
            {/*<ambientLight intensity={1} />*/}
            <directionalLight intensity={3} />
            <Suspense fallback={null}>
                <Barret />
            </Suspense>
        </Canvas>
    );
}
