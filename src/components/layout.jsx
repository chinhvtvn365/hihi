import React from "react";
import { Route, Routes } from "react-router";
import { AnimationRoutes, Box } from "zmp-ui";
import HomePage from "../pages/homepage";
import About from "../pages/about";
import Form from "../pages/form";
import User from "../pages/user";
import Profile from "../pages/profile";
import CartPage from "../pages/cart";
import Book1 from "../pages/book1";
import Tab from "./tab";
import { ScrollRestoration } from "./scroll-restoration";
import DetailBook from "../pages/detail-book";
import Map from "../pages/map";
import ListBook from "../pages/list-book";
import MapForm from "../pages/mapForm";
const Layout = () => {
  return (
    <Box flex flexDirection="column" className="h-screen">
      <ScrollRestoration />
      <Box className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/book1" element={<Book1></Book1>}></Route>
          <Route
            path="/detail-book/:productId"
            element={<DetailBook></DetailBook>}
          ></Route>
            <Route
            path="/list-book/:listId"
            element={<ListBook></ListBook>}
          ></Route>
                      <Route
            path="/map-form"
            element={<MapForm></MapForm>}
          ></Route>
             <Route path="/map" element={<Map></Map>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/form" element={<Form></Form>}></Route>
          <Route path="/user" element={<User></User>}></Route>
        </Routes>
      </Box>
      <Tab />
    </Box>
  );
};

export default Layout;
