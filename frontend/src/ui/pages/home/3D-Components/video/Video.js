import React, { useRef, useState } from "react";
import animeMontage from "../../../../../videos/Anime-Training-Montage-AMV.mp4";
import * as THREE from "three";
import { useAspect } from "@react-three/drei";

export const Video = () => {
  const [video] = useState(() => {
    const vid = document.querySelector("video");
    return vid;
  });

  const size = useAspect(1800, 1000);
  // const [video] = useState(() => {
  //   const vid = document.createElement('video')
  //   vid.src = animeMontage;
  //   vid.crossOrigin = "Anonymous";
  //   vid.loop = true
  //   return vid;
  // });

  return (
    <>
      <mesh scale={size} position={[0, 15, -80]}>
        <planeBufferGeometry />
        <meshBasicMaterial>
          <videoTexture attach="map" args={[video]} />
          {/* <videoTexture attach="emissiveMap" args={[video]} /> */}
        </meshBasicMaterial>
      </mesh>
    </>
  );
};
