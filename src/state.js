import { atom, selector, selectorFamily } from "recoil";
import { getUserInfo } from "zmp-sdk";
import likeIcon from "./static/icons/Like.svg";
import bookIcon from "./static/icons/book.png";
import book1Icon from "./static/icons/book1.png";
import book2Icon from "./static/icons/book2.png";
import book3Icon from "./static/icons/book3.png";
import book4Icon from "./static/icons/book4.png";
import book5Icon from "./static/icons/book5.png";
import { wait } from "./utils/async";
export const userState = selector({
  key: "user",
  get: () =>
    getUserInfo({
      avatarType: "normal",
    }),
});

export const displayNameState = atom({
  key: "displayName",
  default: "",
});
export const categoriesState = selector({
  key: "categories",
  get: () => [
    { id: "coffee", name: "Sách viễn tưởng", icon: bookIcon },
    { id: "matcha", name: "Sách khoa học", icon: book1Icon },
    { id: "food", name: "Sách thế giới", icon: book2Icon },
    { id: "milktea", name: "Sách động vật", icon: book3Icon },
    { id: "drinks", name: "Truyện", icon: book4Icon },
    { id: "bread", name: "Báo", icon: book5Icon },
    { id: "juice", name: "Sách giả kim", icon: bookIcon },
  ],
});
export const selectedCategoryIdState = atom({
  key: "selectedCategoryId",
  default: "coffee",
});
const description = `There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes`;
export const productsState = selector({
  key: "products",
  get: async () => {
    await wait(2000);
    const variants = [
      {
        key: "size",
        label: "Kích cỡ",
        type: "single",
        default: "m",
        options: [
          {
            key: "s",
            label: "Nhỏ",
            priceChange: {
              type: "percent",
              percent: -0.2,
            },
          },
          {
            key: "m",
            label: "Vừa",
          },
          {
            key: "l",
            label: "To",
            priceChange: {
              type: "percent",
              percent: 0.2,
            },
          },
        ],
      },
      {
        key: "toping",
        label: "Topping",
        type: "multiple",
        default: ["t1", "t4"],
        options: [
          {
            key: "t1",
            label: "Trân châu",
            priceChange: {
              type: "fixed",
              amount: 5000,
            },
          },
          {
            key: "t2",
            label: "Bánh flan",
            priceChange: {
              type: "fixed",
              amount: 10000,
            },
          },
          {
            key: "t3",
            label: "Trang trí",
            priceChange: {
              type: "percent",
              percent: 0.15,
            },
          },
          {
            key: "t4",
            label: "Không lấy đá",
            priceChange: {
              type: "fixed",
              amount: -5000,
            },
          },
        ],
      },
    ];
    return [
      {
        id: 1,
        name: "Caramel Latte",
        price: 35000,
        image: "https://atpweb.vn/wp-content/uploads/2021/08/607f2d9174da0300181e2cc1.png",
        description,
        categoryId: ["coffee", "drinks"],
        variants,
      },
      {
        id: 2,
        name: "Mocha Frappuccino",
        price: 45000,
        image: "https://atpweb.vn/wp-content/uploads/2021/08/Blog-YOERMysteries.jpg",
        description,
        categoryId: ["coffee"],
        variants,
      },
      {
        id: 3,
        name: "Grilled Pork Banh Mi",
        price: 30000,
        image: "https://atpweb.vn/wp-content/uploads/2021/08/1534181633-1534181633_goodreads_misc.jpg",
        description,
        categoryId: ["food", "bread"],
        variants,
      },
      {
        id: 4,
        name: "Pizza",
        price: 28000,
        image: "https://atpweb.vn/wp-content/uploads/2021/08/962e6d98-7b3d-4da3-9047-25ac66e1d290-horrorhed.jpg",
        description,
        categoryId: ["food"],
        variants,
      },
      {
        id: 5,
        name: "Vanilla Latte",
        price: 35000,
        image: "https://atpweb.vn/wp-content/uploads/2021/08/top-10-sach.jpg",
        description,
        categoryId: ["coffee", "matcha"],
        variants,
      },
      {
        id: 6,
        name: "Caramel Macchiato",
        price: 38000,
        image: "https://atpweb.vn/wp-content/uploads/2021/08/biographies-memoirs-autobiographies-best-books-2018-cover-collage-2.jpg",
        description,
        categoryId: ["coffee", "milktea"],
        variants,
      },
      {
        id: 7,
        name: "Espresso",
        price: 32000,
        image: "https://atpweb.vn/wp-content/uploads/2021/08/collections.jpg",
        description,
        categoryId: ["coffee"],
        variants,
      },
      {
        id: 8,
        name: "Green Tea Latte",
        price: 25000,
        image: "https://atpweb.vn/wp-content/uploads/2021/08/30FALLCOOKBOOKS-COMBO-superJumbo.jpg",
        description,
        categoryId: ["matcha"],
        variants,
      },
      {
        id: 9,
        name: "Bộ 3 Blue Corner Coffee siêu HOT",
        image: "https://atpweb.vn/wp-content/uploads/2021/08/Top-Books_Essays.png",
        price: 25000,
        sale: {
          type: "percent",
          percent: 0.2,
        },
        description,
        categoryId: ["coffee", "milktea", "drinks"],
        variants,
      },
      {
        id: 10,
        name: "Combo Hi Tea Aroma",
        image: "https://atpweb.vn/wp-content/uploads/2021/08/best-history-books-of-all-time-history-adventures.jpg",
        price: 57000,
        sale: {
          type: "fixed",
          amount: 7000,
        },
        description,
        categoryId: ["coffee", "drinks"],
        variants,
      },
      {
        id: 11,
        name: "Milk Tea Combo",
        price: 55000,
        image: "https://atpweb.vn/wp-content/uploads/2021/08/best-history-books-of-all-time-history-adventures.jpg",
        description,
        categoryId: ["milktea"],
        variants,
        sale: {
          type: "percent",
          percent: 0.5,
        },
      },
    ];
  },
});