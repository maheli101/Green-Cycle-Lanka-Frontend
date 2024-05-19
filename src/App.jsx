import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Loginpage from "./pages/Loginpage/Loginpage";
import MainLayout from "./Layout/MainLayout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Supplier from "./pages/Supplierpage/Supplier";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="supplier" element={<Supplier />} />
        </Route>
        <Route path="login" element={<Loginpage />} />
      </Routes>
    </Router>
  );
}

export default App;

//test
