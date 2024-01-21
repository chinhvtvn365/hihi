import React, { Suspense } from "react";
import { List, Page, Icon, Header, useNavigate, Box } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../../state";
import Welcome from "./welcome";
import Story from "./story";
import Post from "./post";
import { Divider } from "../../components/divider";
import { Categories } from "../book1/category";
import { ProductList } from "../book1/product-list";

const HomePage = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  return (
    <Page className="flex flex-col">
    {/* <Header title="Sách" showBackIcon={false} /> */}
    <Divider />
    <Suspense>
      <Categories />
    </Suspense>
    <Divider />
    <ProductList />
  </Page>
  );
};

export default HomePage;
