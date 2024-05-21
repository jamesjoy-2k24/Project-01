import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Players from "../pages/Players/Players";
import PlayerDetails from "../pages/Players/PlayerDetails";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/player-account/Dasboard";
import ProtectedRoute from "./ProtectedRoute";
const Routers = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/players" element={<Players />} />
      <Route path="/players/:id" element={<PlayerDetails />} />
      <Route
                path="/users/profile/me"
                element={
                    <ProtectedRoute allowedRoles={["sponsor"]}>
                        <MyAccount />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/players/profile/me"
                element={
                    <ProtectedRoute allowedRoles={["player"]}>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
        </Routes>
  );
};

export default Routers;
