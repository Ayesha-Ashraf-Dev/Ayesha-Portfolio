"use client";

import { AngleUpIcon } from "@/app/components/ui/Icons";

interface ScrollToTopProps {
  show: boolean;
}

export default function ScrollToTop({ show }: ScrollToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-end relative sm:me-10 z-10 transition-all">
      <button
        className={`fixed bottom-10 me-5 w-10 h-10 sm:w-12.5 sm:h-12.5 lg:w-15 lg:h-15 flex justify-center items-center rounded-full transition delay-150 duration-500 ease-in-out hover:scale-120 hover:cursor-pointer bg-picto-primary hover:bg-picto-primary-dark text-white ${
          show ? "scale-100" : "scale-0"
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <AngleUpIcon />
      </button>
    </div>
  );
}