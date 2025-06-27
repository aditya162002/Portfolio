import React, { useRef } from 'react'
import { useGLTF, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function ComputerRoom({ isRotating, setIsRotating, setCurrentStage, ...props }) {
  const computerRoom = useGLTF('/sci-fi_computer_room.glb')
  const computerRoomRef = useRef()

  useFrame((_, delta) => {
    if (isRotating) {
      computerRoomRef.current.rotation.y += 0.25 * delta
    }
  })

  return (
    <group 
      ref={computerRoomRef}
      {...props}
      dispose={null}
      onPointerEnter={() => setIsRotating(true)}
      onPointerLeave={() => setIsRotating(false)}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.987}>
        <mesh
          castShadow
          receiveShadow
          geometry={computerRoom.nodes.Object_2.geometry}
          material={computerRoom.materials.Desk_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={computerRoom.nodes.Object_3.geometry}
          material={computerRoom.materials.Monitor_Single}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={computerRoom.nodes.Object_4.geometry}
          material={computerRoom.materials.Keyboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={computerRoom.nodes.Object_5.geometry}
          material={computerRoom.materials.speaker_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={computerRoom.nodes.Object_6.geometry}
          material={computerRoom.materials.BG_Dark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={computerRoom.nodes.Object_7.geometry}
          material={computerRoom.materials.Carpet}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={computerRoom.nodes.Object_8.geometry}
          material={computerRoom.materials.Emission}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={computerRoom.nodes.Object_9.geometry}
          material={computerRoom.materials.Emission_Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={computerRoom.nodes.Object_10.geometry}
          material={computerRoom.materials.Foam_Acoustic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={computerRoom.nodes.Object_11.geometry}
          material={computerRoom.materials.Foam_Acoustic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={computerRoom.nodes.Object_12.geometry}
          material={computerRoom.materials.Trim_Sheet_Wall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={computerRoom.nodes.Object_13.geometry}
          material={computerRoom.materials.Monitor_Single}
        />
        
        {/* Text elements on the computer screen */}
        <Text
          position={[0, 0.2, 0.05]}
          fontSize={0.15}
          color="#000000"
          anchorX="center"
          anchorY="middle"
        >
          FULL STACK
        </Text>
        <Text
          position={[0, 0, 0.05]}
          fontSize={0.12}
          color="#333333"
          anchorX="center"
          anchorY="middle"
        >
          DEVELOPER
        </Text>
        <Text
          position={[0, -0.2, 0.05]}
          fontSize={0.08}
          color="#666666"
          anchorX="center"
          anchorY="middle"
        >
          REACT • NODE • AI
        </Text>
      </group>
    </group>
  )
}

useGLTF.preload('/sci-fi_computer_room.glb') 