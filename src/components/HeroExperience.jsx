import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HeroBoy } from "./HeroBoy";
import Loader from "./Loader";

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 2, 4], fov: 35 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} />

        <HeroBoy scale={2.7} position={[0, -3.8, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;