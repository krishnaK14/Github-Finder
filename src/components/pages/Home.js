import React, { Fragment } from "react";
import Users from "../users/Users";
import Search from "../users/Search";

export const Home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default Home;
