import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Loginpage from "./pages/Loginpage/Loginpage";
import MainLayout from "./Layout/MainLayout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Supplier from "./pages/Supplierpage/Supplier";
import PickupStatus from "./pages/Supplierpage/PickupStatus";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="supplier" element={<Supplier />} />
          <Route path="PickupStatus" element={<PickupStatus />} />
       
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;

//test
