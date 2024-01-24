import React from "react";

const CurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return <span>{currentYear}</span>;
};

export const SecondaryFooter = () => {
  return (
    <footer>
      <div className="container mx-auto flex items-center justify-center  px-4 lg:px-0 flex-col gap-y-10 pt-8 pb-10">
        <p>
          &copy; <CurrentYear /> Created by Mihai Gaman.
        </p>
      </div>
    </footer>
  );
};
