import React, { useState } from "react";


export const Video = ({name}) => {
  const [video] = useState(() => {
    const vid = document.querySelector("video");
    return vid;
  });

  // const size = useAspect(1800, 1000);
  // const [video] = useState(() => {
  //   const vid = document.createElement('video')
  //   vid.src = animeMontage;
  //   vid.crossOrigin = "Anonymous";
  //   vid.loop = true
  //   return vid;
  // });

  return (
    <>
      <mesh name={name} scale={[300, 100, 0]} position={[0, 50, -249]}>
        <planeBufferGeometry />
        <meshBasicMaterial>
          <videoTexture attach="map" args={[video]} />
          {/* <videoTexture attach="emissiveMap" args={[video]} /> */}
        </meshBasicMaterial>
      </mesh>
    </>
  );
};
