import { useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import React from "react";
import { LinearMipmapLinearFilter, NearestFilter, RepeatWrapping } from "three";
import concrete from "../../../../../textures/concrete_floor_worn_001_diff_1k.jpg";

export const FloorGym = ({ position, rotation, args }) => {
  const concreteTexture = useTexture(concrete);

  concreteTexture.magFilter = NearestFilter;
  concreteTexture.minFilter = LinearMipmapLinearFilter;
  concreteTexture.wrapS = RepeatWrapping;
  concreteTexture.wrapT = RepeatWrapping;
  concreteTexture.repeat.set(10, 10);

  const [ref] = useBox(() => ({
    rotation: [Math.PI / 2, Math.PI, Math.PI],
    args: [300, 500, 0.1],
    type: "Static"
  }));

  return (
    <>
      <mesh ref={ref} rotation={rotation} position={position} receiveShadow>
        <planeBufferGeometry args={args} />
        <meshStandardMaterial map={concreteTexture} />
      </mesh>
    </>
  );
};
