import React from "react";
import { Route, Redirect } from "react-router-dom";

const permission = false;

const AdminPage = () => {
  return (
    <>
      <h1>Admin Page</h1>
      <Route
        render={() => {
          return permission ? <h2>Panel admina</h2> : <Redirect to="/" />;
        }}
      />
    </>
  );
};

export default AdminPage;
