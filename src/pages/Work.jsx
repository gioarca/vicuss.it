import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";

function Work() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <img
            src="https://assets.incisoriasacchetti.it/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/n/o/nonna-903.jpg"
            alt="Nonna incisione"
            className="mx-auto h-48 w-auto rounded-lg shadow-lg mb-6 md:h-64"
          />
        </div>

        <div className="space-y-6">
          <blockquote className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
            "Pe fa e cose bone, ci vo' 'a pazienza e 'o tiempo." cit. Nonna
          </blockquote>

          <p className="text-lg text-gray-600 italic">
            Un omaggio alle tradizioni che ci hanno formato
          </p>
        </div>

        <div className="mt-12 space-y-4">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-full text-red-800 font-semibold hover:from-red-100 hover:to-red-200 hover:border-red-300 transition-all duration-300 cursor-default">
            <span className="mr-2">🔨</span>
            Questa pagina è in lavorazione
          </div>

          <p className="text-gray-600 max-w-lg mx-auto">
            Stiamo preparando un piccolo pezzo d'artigianato proprio come una
            nonna sa fare.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Vuoi essere il primo a scoprire i nostri lavori?
            </h3>
            <p className="text-gray-600 mb-4">
              Lascia il tuo contatto e ti avviseremo appena la galleria sarà
              pronta. Riceverai anche offerte esclusive sui nostri servizi di
              incisione.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center px-6 py-3 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span className="mr-2">📞</span>
              Lascia il tuo contatto
            </a>
          </div>

          <div className="text-sm text-gray-500 space-y-1 mb-5">
            <p>🎯 Preview esclusiva</p>
            <p>💎 Sconti riservati ai primi clienti</p>
            <p>🔔 Notifiche per servizi personalizzati</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
