import React, { useRef, useState } from "react";
import { useAspect } from "@react-three/drei";

export const Video = ({name}) => {
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
      <mesh name={name} scale={size} position={[0, 15, -249]}>
        <planeBufferGeometry />
        <meshBasicMaterial>
          <videoTexture attach="map" args={[video]} />
          {/* <videoTexture attach="emissiveMap" args={[video]} /> */}
        </meshBasicMaterial>
      </mesh>
    </>
  );
};
