import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Loginpage from "./pages/Loginpage/Loginpage";
import MainLayout from "./Layout/MainLayout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Supplier from "./pages/Supplierpage/Supplier";
import YardHomePage from "./pages/Yard/YardHomePage";
import Pick from "./pages/Yard/Pick";
import Order from "./pages/Yard/Order";
import Updates from "./pages/Yard/Updates";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="supplier" element={<Supplier />} />
          <Route path="yard" element={<YardHomePage />} />
          <Route path="pick" element={<Pick />} />
          <Route path="order" element={<Order />} />
          <Route path="update" element={<Updates />} />
        </Route>
        <Route path="login" element={<Loginpage />} />
      </Routes>
    </Router>
  );
}

export default App;

//test
