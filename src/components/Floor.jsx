import * as THREE from "three";
import { useBox } from "@react-three/cannon";

const Floor = (props) => {
  const [ref, api] = useBox(() => ({ args: [20, 2, 10], ...props }));
  return (
    <mesh ref={ref} {...props} receiveShadow>
      <boxBufferGeometry args={[100, 2, 100]} />
      <meshPhysicalMaterial transparent color={"lightgrey"} opacity={0.4} />
    </mesh>
  );
};

export default Floor;
