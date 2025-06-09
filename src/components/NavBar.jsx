import { useState, createRef } from "react";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import scrollToSection from "../hooks/utils/scrollToSection";

function NavBar({ contactRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = createRef();

  // Funzione per chiudere il menu mobile
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Funzione per gestire il click sui link di contatto
  const handleContactClick = (e) => {
    // Se siamo già nella homepage, usa scrollToSection
    if (window.location.pathname === "/") {
      e.preventDefault();
      if (contactRef && contactRef.current) {
        scrollToSection(contactRef);
      }
    }
    closeMenu(); // Chiude il menu in ogni caso
  };

  return (
    <nav className="w-full mb-24">
      {/* Navbar per utenti non autenticati */}
      <div className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo e Brand */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <img
                src="/favicon-96x96.png"
                alt="Logo"
                className="h-8 w-auto group-hover:scale-110 transition-transform duration-200"
              />
              <span className="text-xl font-semibold tracking-tight text-gray-800 group-hover:text-red-600 transition-colors duration-200">
                Vicus
              </span>
            </a>
          </div>

          {/* Menu hamburger solo mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-full p-2 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" aria-hidden="true" />
            )}
          </button>

          {/* Menu desktop sempre visibile */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <a
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
              href="/"
            >
              Home
            </a>
            <a
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
              href="/about"
            >
              Chi Siamo
            </a>
            <a
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
              href="/#how-it-works"
            >
              Come funziona?
            </a>
            <a
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
              href="/goals"
            >
              Obiettivi
            </a>
            <a
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
              href="/#reviews"
            >
              Recensioni
            </a>
            <a
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
              href="/#contact"
              onClick={handleContactClick}
            >
              Contatti
            </a>
          </div>

          {/* Menu mobile con transizione */}
          <Transition
            show={isOpen}
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
          >
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 lg:hidden">
              <div className="flex flex-col space-y-3">
                <a
                  href="/"
                  className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
                  onClick={closeMenu}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
                  onClick={closeMenu}
                >
                  Chi Siamo
                </a>
                <a
                  href="/#how-it-works"
                  className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
                  onClick={closeMenu}
                >
                  Come funziona?
                </a>
                <a
                  href="/goals"
                  className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
                  onClick={closeMenu}
                >
                  Obiettivi
                </a>
                <a
                  href="/#reviews"
                  className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
                  onClick={closeMenu}
                >
                  Recensioni
                </a>
                <a
                  href="/#contact"
                  className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
                  onClick={handleContactClick}
                >
                  Contatti
                </a>

                <div className="border-t border-gray-100 my-2 pt-2"></div>

                <div className="flex flex-col space-y-2">
                  <a
                    href="/#contact"
                    className="py-2 text-center bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
                    onClick={handleContactClick}
                  >
                    Disconnettiti per davvero!
                  </a>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
