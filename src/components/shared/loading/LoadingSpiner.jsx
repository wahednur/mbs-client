import { ScaleLoader } from "react-spinners";

const LoadingSpiner = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ScaleLoader color="#2563eb" />
    </div>
  );
};

export default LoadingSpiner;
