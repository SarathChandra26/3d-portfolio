import { useGSAP } from "@gsap/react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useState } from "react";

const Loader = () => {
  const { progress } = useProgress();
  const [hidden, setHidden] = useState(false);

  useGSAP(() => {
    if (progress === 100) {
      gsap.to(".loader-screen", {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => setHidden(true),
      });
    }
  }, [progress]);

  if (hidden) return null;

  return (
    <div className="loader-screen bg-black-100 w-screen h-dvh fixed top-0 left-0 z-[9999]">
      <div className="flex-center w-full h-full">
        <img
          src={`${import.meta.env.BASE_URL}images/loader.gif`}
          alt="loader"
        />
      </div>

      <div className="text-white font-bold text-6xl absolute bottom-10 right-10">
        {Math.floor(progress)}%
      </div>
    </div>
  );
};

export default Loader;