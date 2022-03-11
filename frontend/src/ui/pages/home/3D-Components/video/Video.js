import React, { useRef, useState } from "react";
import animeMontage from "../../../../../videos/Anime-Training-Montage-AMV.mp4";
import * as THREE from "three";

export const Video = () => {
    const video = document.getElementById("videoPlayer");

    console.log("video", video);

//   const [video] = useState(() => {
//     const vid = document.createElement("video");
//     vid.src = animeMontage;
//     vid.crossOrigin = "Annonymous";

//     return vid;
//   });

  return (
    <>
      <mesh>
        <planeGeometry />
        <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </>
  );
};
