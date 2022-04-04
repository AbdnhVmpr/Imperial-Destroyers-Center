import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/:category" element={<Catalog />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
