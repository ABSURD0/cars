import { useRef } from "react";

import { useLoader, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { TextureLoader } from "three";

const Box = (props) => {
  const [ref, api] = useBox(() => ({ mass: 1, ...props }));

  const texture = useLoader(TextureLoader, "/wood.jpg");

  const handlePointerDown = (e) => {
    e.object.active = true;
    if (window.activeMesh) {
      scaleDown(window.activeMesh);
      window.activeMesh.active = false;
    }
    window.activeMesh = e.object;
  };

  const handlePointerEnter = (e) => {
    e.object.scale.x = 2;
    e.object.scale.y = 2;
    e.object.scale.z = 2;
  };
  const handlePointerLeave = (e) => {
    if (!e.object.active) {
      scaleDown(e.object);
    }
  };

  const scaleDown = (object) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  };

  return (
    <mesh
      ref={ref}
      api={api}
      {...props}
      castShadow
      receiveShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial map={texture} opacity={1} transparent />
    </mesh>
  );
};

export default Box;
