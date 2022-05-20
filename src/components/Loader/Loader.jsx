import "./Loader.css";

export const Loader = () => {
  return (
    <div
      className="loader-container flex  justify-center items-center self-center 
      after:h-32 after:w-32 after:border-t-sky-500 after:border-b-sky-500 
      after:border-8 after:border-gray-100
      after:rounded-full"
    ></div>
  );
};
