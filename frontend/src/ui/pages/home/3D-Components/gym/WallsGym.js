import React from "react";
import { DoubleSide } from "three";

export const WallsGym = ({ position, rotation, args, whiteMarbleTexture }) => {
  return (
    <>
      <mesh position={position} rotation={rotation} >
        <planeBufferGeometry args={args} />
        <meshStandardMaterial map={whiteMarbleTexture} side={DoubleSide} />
      </mesh>
    </>
  );
};
