import React from "react";

export default function Pompe({ value, onFinishClick }) {
  const handleFinishClick = () => {
    onFinishClick();
  };
  return (
    <div className="min-h-screen text-center flex flex-col items-center justify-center">
      <div className="flex justify-between items-start w-full max-w-4xl mx-auto">
        <div className="w-1/2 pr-8">
          <h1 className="text-3xl font-bold tracking-tight text-black-500 sm:text-4xl">
            Merci pour ces informations!
          </h1>
          <p className="mt-6 mb-6 text-lg leading-8 text-gray-600">
            Nous avons choisi cette {value.title} pour vous!
          </p>
          <button
            className="rounded-md bg-chocolate px-3.5 py-3 text-md font-semibold text-white shadow-sm hover:bg-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleFinishClick}
          >
            Terminer
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
          <div
            id="img"
            className={`flex-shrink-0 w-2/3 max-w-xs overflow-hidden rounded-lg shadow-lg border-4 border-dkbrown`}
          >
            <img
              className="object-cover w-full h-1/2 mb-2"
              src={value.image}
              alt="pompe"
            />
            <div className="px-8 py-4">
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
                {value.title}
              </h4>
              <div>
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {value.pacType}
                </span>
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {value.gasType}
                </span>
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  Garatie {value.warranty} ans
                </span>
              </div>

              <p className="mt-2 text-sm tracking-tight text-grey">
                <i>prix unitaire </i>
                <span className="mt-2 text-lg font-semibold tracking-tight text-black">
                  €{value.price}
                </span>
              </p>
              <span>
                <button
                  className="px-3 py-2 mb-6 font-semibold rounded text-amber bg-milky hover:text-white hover:bg-amber transition duration-300"
                  onClick={handleFinishClick}
                >
                  En savoir plus
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
