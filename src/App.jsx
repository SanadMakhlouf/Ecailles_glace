import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AddProduction from "./components/AddProduction";
import ViewProductions from "./components/ViewProductions";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/add-production" element={<AddProduction />} />
            <Route path="/view-productions" element={<ViewProductions />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
