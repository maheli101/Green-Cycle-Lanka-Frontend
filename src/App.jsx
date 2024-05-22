import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainLayout from "./Layout/MainLayout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pickup from "./pages/Pickup/Pickup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="Pickup" element={<Pickup />}/>

        
        </Route>
      </Routes>
    </Router>
  
  );
}

export default App;


