import React from "react";
import spaceman from "../img/space_cat.json";
import Lottie from "react-lottie";

const Educ = () => {
  // lottie aninated svg
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spaceman,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={200} width={150} />
    </div>
  );
};

export default Educ;
