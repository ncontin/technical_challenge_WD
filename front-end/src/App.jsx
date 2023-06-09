import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PhoneList from "./components/PhoneList";
import { Routes, Route } from "react-router-dom";
import PhoneDetails from "./components/PhoneDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PhoneList />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
