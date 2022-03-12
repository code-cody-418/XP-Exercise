import React from "react";
import { DoubleSide } from "three";

export const WallsGym = ({ name, position, rotation, args, whiteMarbleTexture }) => {
  return (
    <>
      <mesh name={name} position={position} rotation={rotation} >
        <planeBufferGeometry args={args} />
        <meshStandardMaterial map={whiteMarbleTexture} side={DoubleSide} />
      </mesh>
    </>
  );
};
