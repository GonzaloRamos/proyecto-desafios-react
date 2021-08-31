import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LoaderClothes = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./loaderClothes.json"), // ruta de archivo json
    });
  }, []);

  return (
    <div className="itemListContainer">
      <div ref={container}></div>
    </div>
  );
};

export default LoaderClothes;
