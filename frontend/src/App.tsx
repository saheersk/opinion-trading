import {  BrowserRouter as Router, Route, Routes, Navigate } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";


function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/signup" element={<Signup />} />
      <Route
          path="/"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
