import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HeroBoy } from "./HeroBoy";
import Loader from "./Loader";

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 35 }}>
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[-5, 5, 5]} intensity={4} />
        <HeroBoy scale={2.5} position={[0, -3, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
