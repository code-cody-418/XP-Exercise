import React, { Suspense } from "react";

import Dance from "../Dance.js";


import "./styles.css";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

export default function AnimationScene() {
    return (
        <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.6} />
            <directionalLight intensity={0.5} />
            <Suspense fallback={null}>
                <Dance />
            </Suspense>
        </Canvas>
    );
}
