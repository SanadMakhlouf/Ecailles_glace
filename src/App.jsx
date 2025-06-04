import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AddProduction from "./components/AddProduction";
import ViewProductions from "./components/ViewProductions";
import AddStock from "./components/AddStock";
import OrderPage from "./components/OrderPage";
import AddClient from "./components/AddClient";
import ListClients from "./components/ListClients.jsx";
import AccueilProduction from "./components/AccueilProduction";
import "./styles/App.css";

// Wrapper pour utiliser useLocation avec Router
const AppWrapper = () => {
  const location = useLocation();

  // On n'affiche la sidebar que si on est dans une page production ou commande
  const showSidebar =
    location.pathname.startsWith("/production") ||
    location.pathname.startsWith("/commande");

  return (
    <div className="app">
      {showSidebar && <Sidebar />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Routes Production */}
          <Route path="/production" element={<AccueilProduction />} />
          <Route
            path="/production/add-production"
            element={<AddProduction />}
          />
          <Route
            path="/production/view-productions"
            element={<ViewProductions />}
          />
          <Route path="/production/add-stock" element={<AddStock />} />

          {/* Routes Commande */}
          <Route path="/commande" element={<OrderPage />} />
          <Route path="/commande/clients" element={<AddClient />} />
          <Route path="/commande/clients/list" element={<ListClients />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
