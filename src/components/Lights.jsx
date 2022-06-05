import Bulb from "./Bulb";

const Lights = ({}) => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        // shadow-mapSize-height={2**10}
        // shadow-mapSize-width={2**10}
        // shadow-radius={10}
        intensity={0.5}
        position={[6, 3, 0]}
        // castShadow
      />
      <Bulb position={[-10, 7, 0]} />

      <Bulb position={[10, 7, 0]} />
    </>
  );
};

export default Lights;
