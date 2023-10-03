"use client";
import { useState } from "react";
import Link from "next/link";

export const GiftCard = ({ imageUrl, title, description, price, productUrl }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const openOverlay = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="max-w-[250px] flex flex-col rounded-lg bg-white font-ysra shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img className="rounded-t-lg min-w-[250px] min-h-[200px] max-w-[250px] max-h-[200px]" src={imageUrl} alt="" />
        <a href="#!">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-center">
        <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600">
          {description}
        </p>
      </div>
      <button
        type="button"
        className="rounded-b-lg text-xl text-white font-semibold tracking-wider relative overflow-hidden bg-[#859f7e] w-full h-10"
        onClick={openOverlay}
      >
        Presentear! R$ {price}
      </button>

      {showOverlay && (
        <div onClick={closeOverlay} className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 absolute top-0 left-0 right-0 bottom-0"></div>
          <div className="bg-white p-6 rounded-lg z-10">
            <p className="text-center text-xl text-gray-800 mb-4">
              Você será direcionado para o site do pagbank para finalizar o pagamento.
            </p>
            <div className="flex justify-center">
              <Link href={productUrl}>
                <button className="text-white bg-[#859f7e] px-4 py-2 rounded-lg mr-2">Ok! Vamos lá!</button>
              </Link>
              <button className="text-gray-600 bg-gray-300 px-4 py-2 rounded-lg" onClick={closeOverlay}>
                Ainda não decidi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
