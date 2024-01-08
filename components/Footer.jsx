import React, { useEffect } from "react";

export default function Footer({
  currentPage,
  totalPages,
  onNextClick,
  onPrevClick,
  updateProgress,
  regress,
  isEnabled,
  setIsEnabled,
}) {
  const handleSuivantClick = () => {
    onNextClick();
    updateProgress();
    setIsEnabled(false);
  };

  const handleRetourClick = () => {
    onPrevClick();
    regress();
  };
  useEffect(() => {
    if (!isEnabled) {
      document.querySelector(".btn-next").setAttribute("disabled", "");
    } else {
      document.querySelector(".btn-next").removeAttribute("disabled");
    }
  }, [isEnabled]);

  return (
    <footer className="fixed bottom-0 w-full bg-milky">
      <div className="flex justify-between items-center p-4 bg-milky">
        <button
          className="px-4 py-2 rounded text-black bg-white border border-dkbrown hover:bg-gray-100 transition duration-300"
          onClick={handleRetourClick}
        >
          Retour
        </button>
        <div className="flex items-center">
          <span className="mr-2 text-dkbrown">
            {currentPage}/{totalPages}
          </span>
        </div>
        <button
          className="btn-next px-4 py-2 rounded text-white bg-dkbrown hover:chocolate transition duration-300"
          onClick={handleSuivantClick}
        >
          Suivant
        </button>
      </div>
    </footer>
  );
}
