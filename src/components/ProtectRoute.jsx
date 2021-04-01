import React from "react";
import { Route, Redirect } from "react-router-dom";

const Protect = ({ component, ...rest }) => {
  var RenderComponents = component;
  let token = JSON.parse(localStorage.getItem("auth"));
  return (
    <Route
      {...rest}
      render={(props) => {
        return token !== null ? (
          <RenderComponents {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        );
      }}
    />
  );
};
export default Protect;
