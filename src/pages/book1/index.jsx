import React, { Suspense } from "react";
import { Header, Page } from "zmp-ui";
import { Divider } from "../../components/divider";
import { Categories } from "./category";
import { ProductList } from "./product-list";
const Book1 = () => {
  return (
    <Page className="flex flex-col">
      <Header title="Sách" showBackIcon={false} />
      <Divider />
      <Suspense>
        <Categories />
      </Suspense>
      <Divider />
      <ProductList />
    </Page>
  );
};

export default Book1;
