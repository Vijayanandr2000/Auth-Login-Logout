import React from "react";

const Homepage = () => {
  return (
    <div className="container text-center">
      <div className="box">
        <div className="container">
          <h1 className="display-4 m-5">Sign-In Page</h1>
          <div className="container  text-center mt-5">
            <button
              className="btn btn-primary"
              onClick={() => (window.location.href = "/login")}
            >
              LOGIN
            </button>
          </div>
          <div className="container mt-5">
            <button
              className="btn btn-success"
              onClick={() => (window.location.href = "/register")}
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
