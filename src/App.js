import { useEffect, useState } from "react";
import "./App.css";
import { Canvas, useFrame } from "react-three-fiber";

import { Physics } from "@react-three/cannon";
import { Suspense } from "react";
import Orbit from "./components/Orbit";

import Background from "./components/Background";
import Floor from "./components/Floor";

import ColorPicker from "./components/ColorPicker";

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
        camera={{ position: [25, 25, 18] }}
      >
        <CameraControls />

        <Lights />
        <Orbit />
        {/* <axesHelper args={[10]} /> */}

        <Physics>
          <Cars />

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
