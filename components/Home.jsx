import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-milky h-screen">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-dkbrown sm:text-6xl">
            Composez votre Kit pompe à chaleur
          </h1>
          <p className="mt-6 mb-6 text-lg leading-8 text-brown">
            Vous souhaitez installerune PAC chez vous? Composez le Kit PAC idéal
            pour votre maison grâce à notre configurateur en ligne et gratuit.
          </p>
          <Link
            className="rounded-md bg-chocolate px-3.5 py-3 text-md font-semibold text-milky shadow-sm hover:bg-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="/formulaire"
          >
            Commencer
          </Link>
        </div>
      </div>
    </div>
  );
}
