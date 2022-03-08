import { useTexture } from "@react-three/drei";
import React from "react";
import { LinearMipmapLinearFilter, NearestFilter, RepeatWrapping } from "three";
import concrete from "../../../../../textures/concrete_floor_worn_001_diff_1k.jpg"

export const FloorGym = ({position, rotation, args}) => {
  
  const concreteTexture = useTexture(concrete) 

  concreteTexture.magFilter = NearestFilter
  concreteTexture.minFilter = LinearMipmapLinearFilter
  concreteTexture.wrapS = RepeatWrapping
  concreteTexture.wrapT = RepeatWrapping
  concreteTexture.repeat.set(10, 10)
  
    return (
    <>
      <mesh rotation={rotation} position={position} receiveShadow>
        <planeBufferGeometry args={args} />
        {/*<shadowMaterial attach='material' opacity={0.3} />*/}
        <meshStandardMaterial map={concreteTexture} />
      </mesh>
    </>
  );
};
