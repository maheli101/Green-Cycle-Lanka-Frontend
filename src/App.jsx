import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Loginpage from "./pages/Loginpage/Loginpage";
import MainLayout from "./Layout/MainLayout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Supplier from "./pages/Supplierpage/Supplier";
import PickupStatus from "./pages/Supplierpage/PickupStatus";
import Selectitem from "./pages/Supplierpage/Selectitem";
import Paper from "./pages/Supplierpage/Paper";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="supplier" element={<Supplier />} />
          <Route path="pickup" element={<PickupStatus />} />
          <Route path="Plastic" element={<Selectitem />} />
          <Route path="Paper" element={<Selectitem />} />


       
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;

//test
