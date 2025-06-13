import { useEffect } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

function Thanks() {
  useEffect(() => {
    // 🎉 1. Esplosione di confetti all'arrivo sulla pagina
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    // 📘 2. Tracciamento Meta Pixel "Lead"
    const trackMetaPixel = () => {
      if (typeof fbq === "function") {
        fbq("track", "Lead", {
          content_name: "Contact Form Submission",
          content_category: "Lead Generation",
          value: 10.0,
          currency: "EUR",
        });
        console.log("🔥 Evento Meta Pixel 'Lead' tracciato");
      } else {
        console.warn("⚠️ fbq non disponibile. Riprovo tra 500ms...");
        setTimeout(trackMetaPixel, 500);
      }
    };

    trackMetaPixel();

    // 🟢 3. Tracciamento tramite Google Tag Manager (dataLayer)

    // 🐞 4. Log finale per debug
    console.log("✅ Tutti i tentativi di tracking lead sono stati eseguiti");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-lg mx-auto space-y-6">
        {/* Icona SVG animata */}
        <div className="w-20 h-20 mx-auto mb-2">
          <svg
            viewBox="0 0 24 24"
            className="stroke-green-500"
            fill="none"
            strokeWidth={2.5}
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="path"
            />
          </svg>
        </div>

        {/* Titolo */}
        <h1 className="text-3xl font-extrabold text-gray-800">
          Grazie per averci contattato!
        </h1>

        {/* Messaggio */}
        <div className="text-gray-600">
          <p>Il tuo messaggio è stato ricevuto correttamente.</p>
          <p>Ti risponderemo il prima possibile.</p>
        </div>

        {/* Link di ritorno */}
        <p className="text-sm text-gray-500">
          Torna alla home cliccando{" "}
          <Link to="/" className="text-red-500 font-medium hover:underline">
            qui
          </Link>{" "}
          o sul{" "}
          <Link to="/" className="text-red-500 font-medium hover:underline">
            logo in alto a sinistra
          </Link>
          .
        </p>
      </div>

      {/* SVG draw animation */}
      <style>
        {`
          .path {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: draw 0.7s ease-out forwards;
          }

          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Thanks;
