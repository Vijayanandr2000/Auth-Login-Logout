import React, { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/home", {
      headers: {
        auth: `${JSON.parse(localStorage.getItem("auth"))}`,
      },
    })
      .then((res) => res.json())
      .then((ele) => setData(ele))
      .catch((e) => alert(e.message));
  }, []);
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location = "/login";
  };
  return (
    <div>
      <h5>{JSON.stringify(data)}</h5>
      <button className="btn btn-danger mt-5" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
export default User;
