import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Headers from "./Header";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Error from "./Error";

const App = () => {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
