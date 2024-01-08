import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Final({ value }) {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-dkbrown sm:text-6xl">
            Votre kit pompe à chaleur est prêt!
          </h1>
          <p className="mt-6 mb-6 text-lg leading-8 text-brown">
            Vous aves une <b>{value.stepValue1}</b> que vous chauffez à
            temperature <b>{value.stepValue2} </b>à chauffage{" "}
            <b>{value.stepValue3}</b>. Vous consommez <b>{value.stepValue4}</b>{" "}
            kwh. Nous avons selectionné pour vous la{" "}
            <b>{value.chosenPompe.title}</b>.
          </p>
          <Link
            className="rounded-md bg-chocolate px-3.5 py-3 text-md font-semibold text-white shadow-sm hover:bg-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="/"
          >
            <FontAwesomeIcon
              icon={faArrowRotateRight}
              className="mr-1 text-sm text-white-600 dark:text-white-800 hover:text-white-900 dark:hover:text-white-100"
            />
            Recommencer
          </Link>
        </div>
      </div>
    </div>
  );
}
