import { configAppView } from "zmp-sdk";


export const configView = async () => {
  try {
    console.log("haha");
    await configAppView({
      headerColor: "#1843EF",
      headerTextColor: "white",
      hideAndroidBottomNavigationBar: true,
      hideIOSSafeAreaBottom: true,
      actionBar: {
        title: "Mini app",
        leftButton: "back",
      },
    });
    // xử lý khi gọi api thành công
  } catch (error) {
    // xử lý khi gọi api thất bại
  }
};