import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainLayout from "./Layout/MainLayout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

//test
