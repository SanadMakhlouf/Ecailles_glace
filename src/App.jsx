import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AddProduction from "./components/AddProduction";
import ViewProductions from "./components/ViewProductions";
import AddStock from "./components/AddStock";
import OrderPage from "./components/OrderPage";
import AddClient from "./components/AddClient";
import ListClients from "./components/ListClients";
import AccueilProduction from "./components/AccueilProduction";
import AccueilCommande from "./components/AccueilCommande";
import "./styles/App.css";

// Layout qui inclut la sidebar et le main-content
const LayoutWithSidebar = () => (
  <div className="app">
    <Sidebar />
    <main className="main-content">
      <Outlet />
    </main>
  </div>
);

const App = () => (
  <Router>
    <AuthProvider>
      <Routes>
        {/* Pages publiques */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Home protégé, sans sidebar */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Routes avec sidebar */}
        <Route
          element={
            <ProtectedRoute>
              <LayoutWithSidebar />
            </ProtectedRoute>
          }
        >
          {/* Production */}
          <Route path="production">
            <Route index element={<Navigate to="Accueil" replace />} />
            <Route path="Accueil" element={<AccueilProduction />} />
            <Route path="add-production" element={<AddProduction />} />
            <Route path="view-productions" element={<ViewProductions />} />
            <Route path="add-stock" element={<AddStock />} />
          </Route>

          {/* Commande */}
          <Route path="commande">
            <Route index element={<OrderPage />} />          {/* /commande affiche OrderPage */}
            <Route path="Accueil" element={<AccueilCommande />} />
            <Route path="clients" element={<AddClient />} />
            <Route path="clients/list" element={<ListClients />} />
          </Route>
        </Route>

        {/* Si on tombe sur une route inconnue, renvoyer à home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  </Router>
);

export default App;
