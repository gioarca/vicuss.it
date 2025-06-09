import { motion } from "framer-motion";

// Animazioni
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: "-100px" },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXRhbGlhfGVufDB8fDB8fHwy"
            alt="Panorama italiano con borgo storico"
            className="w-full h-full object-cover absolute inset-0 bg-opacity-60 bg-transparent"
            loading="eager"
            onError={(e) => {
              console.log("Errore caricamento immagine:", e.target.src);
              e.target.style.display = "none";
              e.target.parentElement.style.background =
                "linear-gradient(135deg, #7c2d12 0%, #991b1b 100%)";
            }}
          />
          <div />
        </motion.div>
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Benvenut*!
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Immergiti nella magia dei piccoli centri storici italiani, dove ogni
            pietra racconta una storia millenaria e ogni vicolo nasconde tesori
            autentici da scoprire.
          </p>
          <button>
            <a
              href="/#contact"
              className="inline-block bg-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Scopri di più su VICUS
            </a>
          </button>
        </motion.div>
      </section>

      {/* Cos'è VICUS */}
      <section className="py-20 px-4">
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
            variants={fadeInUp}
          >
            Cos'è VICUS?
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p className="text-xl text-gray-700" variants={fadeInUp}>
              Una piattaforma che collega giovani professionisti nel digitale,
              creativi, sviluppatori e digital marketers con una missione
              chiara:
            </motion.p>
            <motion.p
              className="text-3xl font-bold text-red-800"
              variants={fadeInUp}
            >
              riscoprire il SUD, viverlo, lavorarci.
            </motion.p>
          </div>
        </motion.div>

        {/* Immagine Evocativa */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1627023851505-2f44e73b30eb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Borgo medievale italiano immerso tra le colline verdi"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {/* Remote Workers */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Per remote workers e freelancers
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  Spazi di coworking attrezzati: dove produttività e relax si
                  incontrano.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  Connessioni veloci: per lavorare ovunque senza compromessi.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  Esperienze autentiche: dalla cucina locale ai tour culturali,
                  vivi il borgo come un abitante.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experiences */}
          <motion.div
            className="bg-red-50 rounded-2xl p-8 md:p-12"
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Per un weekend lungo, un mese o solo un'esperienza unica
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  Trova alloggi accessibili e immersi nella storia.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  Abbraccia uno stile di vita più slow, senza rinunciare al
                  comfort moderno.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  Scopri borghi selezionati per qualità della vita, bellezza e
                  servizi.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* USP Cards */}
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
            variants={fadeInUp}
          >
            Perché VICUS è il tuo match perfetto?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <motion.div
              className="p-6 bg-white rounded-xl shadow-md"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold mb-4">
                Una community di visionari
              </h3>
              <p>
                Professionisti e lavoratori da remoto che condividono il
                desiderio di un cambiamento reale.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-xl shadow-md"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold mb-4">Un pacchetto completo</h3>
              <p>
                Coworking, alloggi, esperienze e supporto in un'unica
                piattaforma.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-xl shadow-md"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold mb-4">
                Vita autentica e connessioni genuine
              </h3>
              <p>
                Scopri la cultura locale, partecipa ad eventi e incontra altre
                persone con interessi comuni (o diversi)! 😉
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action Finale */}
        <motion.div
          className="bg-gradient-to-r from-red-800 to-red-900 rounded-3xl p-8 md:p-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ti immagini qui?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Svegliati con la vista sulle colline, lavora in un coworking di
            design e concludi la giornata gustando i sapori autentici del borgo.
            Questo è VICUS: il tuo stile di vita ideale.
          </p>
          <a href="/#contact">
            <button className="bg-white text-red-800 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Cambia il tuo stile di vita
            </button>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
