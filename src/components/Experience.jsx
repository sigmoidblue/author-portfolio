import { Environment, Float, OrbitControls } from "@react-three/drei";

export const Experience = ({ BookComponent }) => {
  return (
    <>
      <Float
        // rotation-x={-Math.PI / 4}
        floatIntensity={0.2}
        speed={2}
        rotationIntensity={1}
      >
        <BookComponent />
      </Float>
      <OrbitControls
        // minZoom={10}
        // maxZoom={20}
        enableZoom={false}
      />
      <Environment preset="studio"></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
