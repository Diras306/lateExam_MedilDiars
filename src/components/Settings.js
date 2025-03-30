import React from "react";

function Settings({ user, setUser }) {
  const toggleDarkMode = () => {
    setUser((prevUser) => ({
      ...prevUser,
      Settings: { darkMode: !prevUser.Settings.darkMode },
    }));
  };

  return (
    <div className="container mt-5">
      <h2>Settings</h2>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={user.Settings.darkMode}
          onChange={toggleDarkMode}
        />
        <label className="form-check-label">Dark Mode</label>
      </div>
    </div>
  );
}

export default Settings;
