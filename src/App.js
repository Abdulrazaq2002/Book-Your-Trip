import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./JS/HomePage";
import NavBar from "./JS/Nav";
import About from "./JS/About";
import Developer from "./JS/Developer";
import Holidays from "./JS/HolidayPackage";

const App = () => {
  const [activeSection, setActiveSection] = useState("flight");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <Router>
      <NavBar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      <Routes>
        <Route path='/' element={<Home activeSection={activeSection} />} />
        <Route path='/about' element={<About />} />
        <Route path='/holiday' element={<Holidays />} />
      </Routes>
      <Developer />
    </Router>
  );
};

export default App;
