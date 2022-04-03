import React, { Suspense } from "react";
import "../../styles.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Goku01 from "../../../3D-Models/Goku01";
import Naruto from "../../../3D-Models/Naruto";
import Kakashi from "../../../3D-Models/Kakashi";
import Korra from "../../../3D-Models/Korra";
import { Gym } from "./3D-Components/gym/Gym";
import { Debug, Physics } from "@react-three/cannon";
import { MovingPlayer } from "./3D-Components/player/MovingPlayer";
import { Video } from "./3D-Components/video/Video";

export default function AnimationScene({
  name,
  kakashiAction,
  gokuAction,
  narutoAction,
  korraAction,
}) {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 15, 25], fov: 55 }}
        resize={0.5}
        onCreated={({ camera }) => camera.lookAt(0, 0, -35)}
      >
        {/* <OrbitControls /> */}
        {/*<ambientLight intensity={1} />*/}
        <directionalLight
          castShadow
          position={[0, 15, 25]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={100}
          shadow-camera-left={-50}
          shadow-camera-right={50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={1.5} />
        
        <Video name={"video"} />
        <Suspense fallback={null}>
          <Physics>
            {/* <Debug color="black" scale={1.1}> */}
              <Goku01 gokuAction={gokuAction} name={name} />
              <Naruto narutoAction={narutoAction} name={name} />
              <Kakashi kakashiAction={kakashiAction} name={name} />
              <Korra korraAction={korraAction} name={name} />
              {/* <MovingPlayer /> */}
              <Gym />
              
            {/* </Debug> */}
          </Physics>
        </Suspense>
        {/* <Stats /> */}
      </Canvas>
    </>
  );
}
