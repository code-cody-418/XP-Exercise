import React from "react";
import { FloorGym } from "./FloorGym";
import { WallsGym } from "./WallsGym";
import * as THREE from "three"
import whiteMarble from "../../../../../textures/White_Marble.jpg"
import { useTexture } from "@react-three/drei";

export const Gym = () => {

    const whiteMarbleTexture = useTexture(whiteMarble)

  return (
    <>
      <FloorGym
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        args={[300, 500]}
      />
      <WallsGym name={"back-wall"} position={[0, 50, -250]} rotation={[0, 0, 0]} args={[300, 100]} whiteMarbleTexture={whiteMarbleTexture} />
      <WallsGym name={"front-wall"} position={[0, 50, 250]} rotation={[0, 0, 0]} args={[300, 100]} whiteMarbleTexture={whiteMarbleTexture} />
      <WallsGym name={"right-wall"} position={[150, 50, 0]} rotation={[0, Math.PI / 2, 0]} args={[500, 100]} whiteMarbleTexture={whiteMarbleTexture} />
      <WallsGym name={"left-wall"} position={[-150, 50, 0]} rotation={[0, Math.PI / 2, 0]} args={[500, 100]} whiteMarbleTexture={whiteMarbleTexture} />
    </>
  );
};
