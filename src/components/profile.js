import React from "react";
import UserInfo from "./Userinfo";
import profilepicture from "./profilepicture";

function profile({ user, setUser }) {
  const handleNameChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, name: e.target.value }));
  };

  return (
    <div className="container mt-5">
      <h2>Profile</h2>
      <profilepicture /> {}
      <Userinfo name={user.name} />
      <div className="mt-3">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          value={user.name}
          onChange={handleNameChange}
        />
      </div>
    </div>
  );
}

export default profile;
