import { useEffect, useState } from "react";
import "./App.css";
import { Canvas, useFrame } from "react-three-fiber";

import { Physics } from "@react-three/cannon";
import { Suspense } from "react";
import Orbit from "./components/Orbit";
import Box from "./components/Box";
import Background from "./components/Background";
import Floor from "./components/Floor";
import Bulb from "./components/Bulb";
import ColorPicker from "./components/ColorPicker";
import Draggable from "./components/Draggable";
import Model from "./components/Model";
import BoundingBox from "./components/BoundingBox";
import Cars from "./components/Cars";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";
import Lights from "./components/Lights";

function App() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [windowDimensions]);

  const handleResize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  return (
    <div style={{ height: "100vh", width: "100vw", zIndex: 1 }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        shadows
        style={{ background: "grey" }}
        camera={{ position: [2500, 2500, 18] }}
      >
        <CameraControls />

        <Lights />
        <Orbit />
        {/* <axesHelper args={[10]} /> */}

        <Physics>
          <Cars />
          {/* <Suspense fallback={null}>
            <Draggable transformGroup>
              <BoundingBox
                visible
                position={[-5, 3, 0]}
                dims={[3, 2, 6]}
                offset={(0, -5, 0)}
              >
                <Model
                  path="/dragon_ball_hover_car/scene.gltf"
                  scale={new Array(3).fill(1)}
                  // position={[0, 0.5, 0]}
                />
              </BoundingBox>
            </Draggable>
            <Draggable transformGroup>
              <BoundingBox visible position={[0, 5, 0]} dims={[5, 11, 5]}>
                <Model
                  path="/flying_trabant_final_takeoff/scene.gltf"
                  scale={new Array(3).fill(0.01)}
                  // position={[5, 1, 0]}
                />
              </BoundingBox>
            </Draggable>
            <Draggable transformGroup>
              <BoundingBox visible position={[5, 8, 0]} dims={[3, 2, 6]}>
                <Model
                  path="/hover_car/scene.gltf"
                  scale={new Array(3).fill(0.3)}
                  rotate={[20, 20, 0]}
                  // position={[10, 1, 0]}
                />
              </BoundingBox>
            </Draggable> */}
          {/* </Suspense> */}
          {/* <Suspense fallback={null}>
              <Box position={[1, 2, 0]} />
              <Box position={[1, 2, 5]} />
              <Box position={[4, 2, -5]} />
            </Suspense> */}
          <Floor position={[0, -5, 0]} />
        </Physics>
        <Suspense fallback={null}>
          {" "}
          <Background />{" "}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
