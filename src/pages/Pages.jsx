import { useRef, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthContextProvider } from "../context/AuthContext";
import Home from "./Home.jsx";
import About from "./About";
import Work from "./Work";
import Thanks from "./Thanks";
import NavBar from "../components/NavBar";
import Goals from "./Goals";

function Pages() {
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Verifica che fbq esista
    if (window.fbq) {
      window.fbq("track", "PageView");
      console.log("Meta Pixel PageView fired on", location.pathname);
    }
  }, [location]);

  return (
    <AuthContextProvider>
      <>
        <NavBar contactRef={contactRef} />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/workinprogress" element={<Work />} />
            <Route path="/goals" element={<Goals />} />
          </Routes>
        </AnimatePresence>
      </>
    </AuthContextProvider>
  );
}

export default Pages;
