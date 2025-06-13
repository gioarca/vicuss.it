import Head from "../src/components/Head.jsx";
import Footer from "../src/components/Footer";
import Pages from "../src/pages/Pages";
import MetaPixelTracker from "./utils/MetaPixelTracker.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Head />
      <MetaPixelTracker />
      {/* MetaPixelTracker è un componente che si occupa di tracciare le pagine visitate */}
      {/* Puoi anche inserire qui altri script o componenti che devono essere caricati all'avvio */}
      <Pages />
      <Footer />
    </>
  );
}

export default App;
