/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useEffect, useRef, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Korra(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/korra.glb')
  const { actions } = useAnimations(animations, group)

  const [materialPropertyOne, setMaterialPropertyOne] = useState(1)

  useEffect(() => {
    console.log('useeffect on korra material property', materialPropertyOne)
    setMaterialPropertyOne(1)
  }, [props.name])
  console.log('korra action:', actions)

  //This enables the 3d-model to appear and disappear from canvas
  const [visible, setVisible] = useState(false)

  useEffect( () => {
    if (props.name === 'korra')
      return setVisible(true)
    else
      return setVisible(false)
  }, [props.name])


  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.05} visible={visible}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001.geometry}
          material={nodes.Korra001.material}
          skeleton={nodes.Korra001.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_1.geometry}
          material={nodes.Korra001_1.material}
          skeleton={nodes.Korra001_1.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_2.geometry}
          material={nodes.Korra001_2.material}
          skeleton={nodes.Korra001_2.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_3.geometry}
          material={nodes.Korra001_3.material}
          skeleton={nodes.Korra001_3.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_4.geometry}
          material={nodes.Korra001_4.material}
          skeleton={nodes.Korra001_4.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_5.geometry}
          material={nodes.Korra001_5.material}
          skeleton={nodes.Korra001_5.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_6.geometry}
          material={nodes.Korra001_6.material}
          skeleton={nodes.Korra001_6.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_7.geometry}
          material={nodes.Korra001_7.material}
          skeleton={nodes.Korra001_7.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_8.geometry}
          material={nodes.Korra001_8.material}
          skeleton={nodes.Korra001_8.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_9.geometry}
          material={nodes.Korra001_9.material}
          skeleton={nodes.Korra001_9.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_10.geometry}
          material={nodes.Korra001_10.material}
          skeleton={nodes.Korra001_10.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_11.geometry}
          material={nodes.Korra001_11.material}
          skeleton={nodes.Korra001_11.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_12.geometry}
          material={nodes.Korra001_12.material}
          skeleton={nodes.Korra001_12.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_13.geometry}
          material={nodes.Korra001_13.material}
          skeleton={nodes.Korra001_13.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_14.geometry}
          material={nodes.Korra001_14.material}
          skeleton={nodes.Korra001_14.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_15.geometry}
          material={nodes.Korra001_15.material}
          skeleton={nodes.Korra001_15.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_16.geometry}
          material={nodes.Korra001_16.material}
          skeleton={nodes.Korra001_16.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_17.geometry}
          material={nodes.Korra001_17.material}
          skeleton={nodes.Korra001_17.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_18.geometry}
          material={nodes.Korra001_18.material}
          skeleton={nodes.Korra001_18.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_19.geometry}
          material={nodes.Korra001_19.material}
          skeleton={nodes.Korra001_19.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_20.geometry}
          material={nodes.Korra001_20.material}
          skeleton={nodes.Korra001_20.skeleton}
        />
        <skinnedMesh
            castShadow
            material-opacity={materialPropertyOne}
          geometry={nodes.Korra001_21.geometry}
          material={nodes.Korra001_21.material}
          skeleton={nodes.Korra001_21.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/korra.glb')
