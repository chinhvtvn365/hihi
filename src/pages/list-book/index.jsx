import React from "react";
import { Header, Page } from "zmp-ui";
import bookIcon from "../../static/icons/book.png";
import book1Icon from "../../static/icons/book1.png";
import book2Icon from "../../static/icons/book2.png";
import book3Icon from "../../static/icons/book3.png";
import book4Icon from "../../static/icons/book4.png";
import book5Icon from "../../static/icons/book5.png";
import CardProductHorizontal from "./cardProductHorizontal";
const ListBook = () => {
  const storeProductResult = [
    {
      id: "coffee",
      name: "Caramel Latte",
      icon: "https://atpweb.vn/wp-content/uploads/2021/08/607f2d9174da0300181e2cc1.png",
      author: "Ernest Miller Hemingway",
    },
    {
      id: "matcha",
      name: "Mocha Frappuccino",
      icon: "https://atpweb.vn/wp-content/uploads/2021/08/Blog-YOERMysteries.jpg",
      author: "Ernest Miller Hemingway",
    },
    {
      id: "food",
      name: "Grilled Pork Banh Mi",
      icon:"https://atpweb.vn/wp-content/uploads/2021/08/30FALLCOOKBOOKS-COMBO-superJumbo.jpg",
      author: "Franz Kafka",
    },
    {
      id: "milktea",
      name: "Vanilla Latte",
      icon: "https://atpweb.vn/wp-content/uploads/2021/08/1534181633-1534181633_goodreads_misc.jpg",
      author: "Ernest Miller Hemingway",
    },
    {
      id: "drinks",
      name: "Truyện",
      icon:  "https://atpweb.vn/wp-content/uploads/2021/08/962e6d98-7b3d-4da3-9047-25ac66e1d290-horrorhed.jpg",
      author: "Ernest Miller Hemingway",
    },
    {
      id: "bread",
      name: "Caramel Macchiato",
      icon: "https://atpweb.vn/wp-content/uploads/2021/08/top-10-sach.jpg",
      author: "Franz Kafka",
    },
    {
      id: "juice",
      name: "Sách giả kim",
      icon:"https://atpweb.vn/wp-content/uploads/2021/08/collections.jpg",
      author: "Ernest Miller Hemingway",
    },
  ];
  return (
    <Page>
      <Header title="Nhà sách Quang Huy" />
      <div className="bg-white p-3">
        {storeProductResult.map((product) => (
          <div className=" mb-2 w-full" key={product.id}>
            <CardProductHorizontal
              pathImg={product.icon}
              nameProduct={product.name}
              salePrice={product.author}
              productId={product.id}
            />
          </div>
        ))}
      </div>
    </Page>
  );
};

export default ListBook;
