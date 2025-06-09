import { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthContextProvider } from "../context/AuthContext";
import Home from "./Home.jsx";
import About from "./About";
// import Contacts from "./Contacts";
import Work from "./Work";
import Thanks from "./Thanks";
// import News from "./News";
import NavBar from "../components/NavBar";
import Goals from "./Goals";
// import Support from "./Support";
// import ThanksBorgo from "./Borghi/ThanksBorgo.jsx";

function Pages() {
  const contactRef = useRef(null);
  const location = useLocation();

  return (
    <AuthContextProvider>
      <>
        <NavBar contactRef={contactRef} />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            {/** Rotte normali comuni a tutti gli utenti senza registrazione **/}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contacts" element={<Contacts />} /> */}
            <Route path="/thanks" element={<Thanks />} />
            {/* <Route path="/borghi/thanks" element={<ThanksBorgo />} /> */}
            {/* <Route path="/thankyouforyoursupport" element={<Support />} /> */}
            <Route path="/workinprogress" element={<Work />} />
            <Route path="/goals" element={<Goals />} />
            {/* <Route path="/news" element={<News />} /> */}
          </Routes>
        </AnimatePresence>
      </>
    </AuthContextProvider>
  );
}

export default Pages;
