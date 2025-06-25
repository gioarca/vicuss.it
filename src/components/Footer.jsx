import React from "react";

function Footer() {
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
        {/* Social */}
        <div className="text-center">
          <p className="font-semibold text-lg mb-4">Seguici sui social</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/vicus_ita/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 hover:opacity-70"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg"
                alt="Instagram"
                className="w-10 h-10 rounded-full object-cover"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/vicus-ita/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 hover:opacity-70"
            >
              <img
                src="https://images.seeklogo.com/logo-png/38/1/linkedin-black-icon-logo-png_seeklogo-387472.png"
                alt="Linkedin"
                className="w-10 h-10 object-cover"
              />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61575149767791"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 hover:opacity-70"
            >
              <img
                src="https://www.citypng.com/public/uploads/preview/round-black-facebook-fb-logo-icon-sign-701751695134781upkxjlqwck.png"
                alt="Facebook"
                className="w-10 h-10 rounded-full object-cover"
              />
            </a>
          </div>
        </div>

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
