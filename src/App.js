import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homes from "./components/Homes";
import profile from "./components/profile";
import Settings from "./components/Settings";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState({
    name: "Medil A. DIras II",
    settings: { darkMode: false },
  });

  return (
    <Router>
      {}
      <div className={user?.settings?.darkMode ? "dark-mode" : "light-mode"}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
            <Link className="nav-link" to="/Settings">
              Settings
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Homes />} />
          <Route
            path="/profile"
            element={<profile user={user} setUser={setUser} />}
          />
          <Route
            path="/Settings"
            element={<Settings user={user} setUser={setUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
