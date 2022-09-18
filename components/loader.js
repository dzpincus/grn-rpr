import Lottie from "react-lottie";
import infinityData from "../public/infinity.json";

export default function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: infinityData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={50} width={50} />
    </>
  );
}
