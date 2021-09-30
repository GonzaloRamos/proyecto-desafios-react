import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LoaderCircle = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./loader__circle.json"), // ruta de archivo json
    });
  }, []);

  return (
    <>
      <div ref={container}></div>
    </>
  );
};

export default LoaderCircle;
