import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AddProduction from "./components/AddProduction";
import ViewProductions from "./components/ViewProductions";
import AddStock from "./components/AddStock";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            {/* Redirection de la racine vers /add-production */}
            <Route
              path="/ajouter-stock"
              element={<Navigate to="/AddStcok" replace />}
            />
            <Route path="/add-production" element={<AddProduction />} />
            <Route path="/view-productions" element={<ViewProductions />} />
            <Route path="/add-stock" element={<AddStock />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
