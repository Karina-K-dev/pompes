import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Consommation from "./Consommation";
import Batiment from "./Batiment";
import Temperature from "./Temperature";
import Chauffage from "./Chauffage";
import Pompe from "./Pompe";
import Final from "./Final";

const products = [
  {
    title: "Pompe à chaleur 1",
    powerRange: {
      min: 1000,
      max: 4999,
    },
    price: 3456,
    image: "pompe1.webp",
    pacType: "Air/Eau",
    gasType: "R330",
    warranty: 2,
    isPacSystemModule: true,
  },
  {
    title: "Pompe à chaleur 2",
    powerRange: {
      min: 5000,
      max: 10000,
    },
    price: 5678,
    image: "pompe2.webp",
    pacType: "Air/Air",
    gasType: "R430",
    warranty: 3,
    isPacSystemModule: true,
  },
  {
    title: "Pompe à chaleur 3",
    powerRange: {
      min: 10000,
      max: 15000,
    },
    price: 7890,
    image: "pompe3.webp",
    pacType: "Air/Eau",
    gasType: "R380",
    warranty: 4,
    isPacSystemModule: true,
  },
  {
    title: "Pompe à chaleur 4",
    powerRange: {
      min: 15000,
      max: 30000,
    },
    price: 1234,
    image: "pompe4.jpg",
    pacType: "Air/Air",
    gasType: "R380",
    warranty: 5,
    isPacSystemModule: true,
  },
];
export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [batimentValue, setBatimentValue] = useState(0);
  const [temperatureValue, setTemperatureValue] = useState(0);
  const [chauffageValue, setChauffageValue] = useState(0);
  const [consommationValue, setConsommationValue] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);

  const enableUserClick = () => {
    setIsEnabled(true);
  };

  const updateProgress = () => {
    setProgress(progress + 25);
  };
  const regress = () => {
    setProgress(progress - 25);
  };
  const totalPages = 6;

  const handleNextClick = () => {
    if (currentStep < totalPages) {
      setCurrentStep(currentStep + 1);
    }
  };
  const showFinal = () => {
    setCurrentStep(6);
  };
  const handlePrevClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const chosenPompe = consommationValue
    ? products.find(
        (product) =>
          product.powerRange.min < consommationValue &&
          product.powerRange.max > consommationValue
      )
    : {};

  return (
    <div className="bg-milky h-screen">
      {currentStep !== 6 && <Header progress={progress} />}

      {currentStep === 1 && (
        <Batiment
          value={batimentValue}
          onChange={setBatimentValue}
          enableUserClick={enableUserClick}
          isEnabled={isEnabled}
        />
      )}
      {currentStep === 2 && (
        <Temperature
          value={temperatureValue}
          onChange={setTemperatureValue}
          enableUserClick={enableUserClick}
        />
      )}
      {currentStep === 3 && (
        <Chauffage
          value={chauffageValue}
          onChange={setChauffageValue}
          enableUserClick={enableUserClick}
        />
      )}
      {currentStep === 4 && (
        <Consommation
          value={consommationValue}
          onChange={setConsommationValue}
          enableUserClick={enableUserClick}
        />
      )}
      {currentStep === 5 && (
        <Pompe value={chosenPompe} onFinishClick={showFinal} />
      )}
      {currentStep === 6 && (
        <Final
          value={{
            batimentValue,
            temperatureValue,
            chauffageValue,
            consommationValue,
            chosenPompe,
          }}
        />
      )}
      {currentStep !== 6 && (
        <Footer
          currentPage={currentStep}
          totalPages={totalPages - 1}
          onNextClick={handleNextClick}
          onPrevClick={handlePrevClick}
          updateProgress={updateProgress}
          regress={regress}
          isEnabled={isEnabled}
          setIsEnabled={setIsEnabled}
        />
      )}
    </div>
  );
}
