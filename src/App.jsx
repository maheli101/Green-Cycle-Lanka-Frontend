import Dashboard from "./pages/Dashboard/Dashboard";
import Loginpage from "./pages/Loginpage/Loginpage";
import MainLayout from "./Layout/MainLayout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Supplier from "./pages/Supplierpage/Supplier";

import Register from "./pages/Register/Register";
import Vehicleregister from "./pages/Vehicleregister/Vehicleregister";
import User from "./pages/userProfile/userprofile";

import BuyerSelectionPage from "./pages/Buyer/BuyerSelectionPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="supplier" element={<Supplier />} />

          <Route path="user" element={<User />} />

          <Route path="buyer" element={<BuyerSelectionPage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
        </Route>
        <Route path="login" element={<Loginpage />} />
        <Route path="register" element={<Register />} />
        <Route path="vehicle" element={<Vehicleregister />} />
      </Routes>
    </Router>
  );
}

export default App;
