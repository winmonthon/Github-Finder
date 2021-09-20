import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/User";
import Alert from "../layout/Alert";

const Home = () => {
  return (
    <Fragment>
      <Alert />
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
