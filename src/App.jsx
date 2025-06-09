import { BrowserRouter as Router } from "react-router-dom";
import Head from "../src/components/Head.jsx";
import Footer from "../src/components/Footer";
import Pages from "../src/pages/Pages";
import "./App.css";

function App() {
  return (
    <>
      <Head />
      <Router>
        <Pages />
      </Router>
      <Footer />
    </>
  );
}

export default App;
