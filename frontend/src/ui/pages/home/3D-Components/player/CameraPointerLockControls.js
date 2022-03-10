// import { PointerLockControls } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import {PointerLockControls as PointerLockControlsExt} from "three/examples/jsm/controls/PointerLockControls"

extend({PointerLockControlsExt})

export const CameraPointerLockControls = () => {

    const { camera, gl } = useThree()

    const controls = useRef()

    // console.log('camera');

    useEffect( () => {
        document.addEventListener('click', () => {
         controls.current.lock()   
        })
    }, [])

  return (
    <>
      {/* <PointerLockControls /> */}

      <pointerLockControlsExt ref={controls} args={[camera, gl.domElement]} />
    </>
  );
};
