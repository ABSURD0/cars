import { Suspense } from "react";
import BoundingBox from "./BoundingBox";
import Model from "./Model";

const Cars = ({}) => {
  return (
    <Suspense fallback={null}>
      <BoundingBox
        position={[4, 4, 0]}
        dims={[3, 2, 6]}
        offset={[0, -0.4, 0.8]}
      >
        <Model
          path="/tesla_model_3/scene.gltf"
          scale={new Array(3).fill(0.01)}
        />
      </BoundingBox>

      <BoundingBox
        position={[-4, 4, 0]}
        dims={[3, 2, 7]}
        offset={[0, -0.8, 0.2]}
      >
        <Model path="/tesla_model_s/scene.gltf" scale={new Array(3).fill(1)} />
      </BoundingBox>
    </Suspense>
  );
};

export default Cars;
