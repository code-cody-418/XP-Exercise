import React, {Suspense} from "react";
import "./styles.css";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Environment} from "@react-three/drei";

import Goku01 from "../Goku01";
import Naruto from "../Naruto";
import Kakashi from "../Kakashi";
import Korra from "../Korra";



export default function AnimationScene({ name, kakashiAction, gokuAction, narutoAction, korraAction }) {
    return (
        <>
            {/*<div className='border border-5 border-dark rounded animeSize'>*/}

        <Canvas  shadows
                 camera={{ position: [0, 15, 25], fov: 55 }}
                 resize={0.5}
                 onCreated={({ camera }) => camera.lookAt(0, 0, -35)}
            >

            {/*<OrbitControls />*/}
            {/*<ambientLight intensity={1} />*/}
            <directionalLight
                castShadow
                position={[0, 15, 25]}
                intensity={1}
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
                <Environment files={'black-hdri.hdr'} background={true}/>
                <group>
                    <Goku01 gokuAction={gokuAction} name={name} />
                    <Naruto narutoAction={narutoAction} name={name} />
                    <Kakashi kakashiAction={kakashiAction} name={name} />
                    <Korra korraAction={korraAction} name={name} />

                        <mesh
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, 0, 0]}
                        receiveShadow>
                        <planeBufferGeometry attach='geometry' args={[20, 90]}/>
                        {/*<shadowMaterial attach='material' opacity={0.3} />*/}
                        <meshStandardMaterial attach='material' color={"blue"} />
                    </mesh>
                </group>
            </Suspense>

        </Canvas>
            {/*</div>*/}
        </>
    );
}
