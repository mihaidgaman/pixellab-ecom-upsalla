import { HiArrowCircleUp } from "react-icons/hi";

export const Separator = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-center after:content-[''] after:h-px after:bg-gray-300 after:w-1/2 before:content-[''] before:h-px before:bg-gray-300 before:w-1/2">
      {children}
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center text-gray-600 transition-colors hover:text-amber-600"
      >
        <HiArrowCircleUp className="text-5xl"></HiArrowCircleUp>
      </button>
    </div>
  );
};
