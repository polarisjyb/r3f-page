import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./model/cube.glb');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group
          name='Camera'
          position={[7.358891, 4.958309, 6.925791]}
          rotation={[1.242071, 0.329969, -0.759712]}
        />
        <group name='Cube001' />
        <group name='Cube002' position={[0, 1, 0]}>
          <mesh
            name='Cube002_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials['HoloFillDark.001']}
          />
          <mesh
            name='Cube002_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube002_2.geometry}
            material={materials['constant2.001']}
          />
        </group>
        <group name='Cube003' position={[-1, -1, 0]}>
          <mesh
            name='Cube009'
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials.HoloFillDark}
          />
          <mesh
            name='Cube009_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials.constant2}
          />
        </group>
        <group name='Cube004' position={[0, -1, 1]}>
          <mesh
            name='Cube010'
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials.HoloFillDark}
          />
          <mesh
            name='Cube010_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={materials.constant2}
          />
        </group>
        <group name='Cube005' position={[1, -1, 0]}>
          <mesh
            name='Cube011'
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={materials.HoloFillDark}
          />
          <mesh
            name='Cube011_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube011_1.geometry}
            material={materials.constant2}
          />
        </group>
        <group name='Cube006' position={[0, -1, -1]}>
          <mesh
            name='Cube012'
            castShadow
            receiveShadow
            geometry={nodes.Cube012.geometry}
            material={materials.constant2}
          />
          <mesh
            name='Cube012_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube012_1.geometry}
            material={materials.HoloFillDark}
          />
        </group>
        <group name='Cube007'>
          <mesh
            name='Cube013'
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials.constant2}
          />
          <mesh
            name='Cube013_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube013_1.geometry}
            material={materials.HoloFillDark}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('model/cube.glb');

export default Model;