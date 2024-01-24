import React, { Suspense, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Page, useNavigate } from "zmp-ui";
import { Divider } from "../../components/divider";
import { userState } from "../../state";
import { Categories } from "../book1/category";
import { ProductList } from "../book1/product-list";

const HomePage = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const [dataHung, setDataHung] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_HUNG_URL}/api/app/book-type`, { method: 'GET' })
      .then(response => {
        console.log(response);
        response.json()
      })
      .then(data =>{
        console.log(data);
        setData(data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <Page className="flex flex-col">
    {/* <Header title="Sách" showBackIcon={false} /> */}
    <Divider />
    <Suspense>
      <Categories title="Nhà Sách Quang Huy"/>
    </Suspense>
    <Divider />
    <Suspense>
      <Categories title="Nhà Sách Ngọc Hưng"/>
    </Suspense>
    <Divider />
    <ProductList />
  </Page>
  );
};

export default HomePage;
