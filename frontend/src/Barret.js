/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useEffect, useRef} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {DoubleSide} from "three";

export default function Barret(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/barret.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    console.log('actions', actions);
    actions.tPose.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.mixamorig9Hips} />
        <skinnedMesh
            castShadow
            geometry={nodes.Mesh.geometry}
            material={materials.Ch06_body}
            skeleton={nodes.Mesh.skeleton}
            material-opacity={1}
            material-transparent={true}
            material-side={DoubleSide}
            material-metalness={0}
            material-roughness={0}
        />
        <skinnedMesh
          castShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.Ch06_eyelashes}
          skeleton={nodes.Mesh_1.skeleton}
          material-opacity={1}
          material-side={DoubleSide}
        />
        <skinnedMesh
          castShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.Ch06_body1}
          skeleton={nodes.Mesh_2.skeleton}
          material-opacity={1}
          material-side={DoubleSide}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/barret.glb')
