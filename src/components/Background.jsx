import { useLoader, useThree } from "react-three-fiber";
import * as THREE from "three";
import { useMemo } from "react";

import { TextureLoader, WebGLCubeRenderTarget } from "three";

const Background = (props) => {
  const texture = useLoader(
    TextureLoader,
    process.env.PUBLIC_URL + "/autoshop.jpg"
  );

  const { gl } = useThree();

  const formatted = useMemo(
    () =>
      new WebGLCubeRenderTarget(
        texture.image.height
      ).fromEquirectangularTexture(gl, texture),
    [gl, texture]
  );

  return <primitive attach="background" object={formatted.texture} />;
};

export default Background;
