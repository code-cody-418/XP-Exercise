import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { useKeyboardControls } from "./hooks/useKeyboardControls";
import * as THREE from "three";
import { CameraPointerLockControls } from "./CameraPointerLockControls";


export const MovingPlayer = () => {
  const { moveForward, moveBackward, moveRight, moveLeft } =
    useKeyboardControls();

  const { camera } = useThree();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [5, 5, 5],
    type: "Dynamic",
    args: [1],
  }));

  const position = useRef({ x: 0, y: 0, z: 0 });
  useEffect(() => {
    api.position.subscribe((v) => {
      console.log("v", v);
      position.current.x = v[0];
      position.current.y = v[1];
      position.current.z = v[2];
    });
  }, []);

  const movementSpeed = 5;

  useFrame(() => {
    camera.position.copy(position.current);

    const frontVector = new THREE.Vector3(0, 0, moveBackward - moveForward);

    const sideVector = new THREE.Vector3(moveLeft - moveRight, 0, 0);

    const direction = new THREE.Vector3();

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(movementSpeed)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, 0, direction.z);
  });

  return (
    <>
      <CameraPointerLockControls />
      
      <group ref={ref} />
    </>
  );
};
