import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-auto bg-white border-t border-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        {/* Logo Vicus */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/favicon-96x96.png" // Sostiture con il path corretto del tuo logo
            alt="Vicus Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-semibold text-gray-800">Vicus</span>
        </a>

        {/* Link */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
          <a
            href="/goals"
            className="hover:text-red-600 transition-colors duration-200"
          >
            Obiettivi
          </a>
          <a
            href="/workinprogress"
            className="hover:text-red-600 transition-colors duration-200"
          >
            Blog
          </a>
          <a
            href="/#contact"
            className="hover:text-red-600 transition-colors duration-200"
          >
            Hai bisogno di aiuto?
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500">
          <p>© 2025 | Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
