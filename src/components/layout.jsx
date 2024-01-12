import React from "react";
import { Route } from "react-router-dom";
import { AnimationRoutes } from "zmp-ui";
import HomePage from "../pages/homepage";
import About from "../pages/about";
import Form from "../pages/form";
import User from "../pages/user";
const Layout = () => {
  return (
    <AnimationRoutes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/form" element={<Form></Form>}></Route>
      <Route path="/user" element={<User></User>}></Route>
    </AnimationRoutes>
  );
};

export default Layout;
