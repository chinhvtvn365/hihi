import React from "react";
import zmpSdk, { login, getUserInfo } from "zmp-sdk";
import { getAccessToken, requestSendNotification, openPermissionSetting } from "zmp-sdk/apis";
import { Box, Page } from "zmp-ui";
import { Welcome } from "./welcome";


const Profile = () => {
  const test = async () => {
    try {
      const accessToken = await getAccessToken({});
      console.log(accessToken)
    } catch (error) {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const { userInfo } = await getUserInfo({});
      console.log(userInfo);
    } catch (error) {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  };

  const callAPI = async () => {
    try {
      await openPermissionSetting({});
    } catch (error) {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  };

  const sendUserNotification = async () => {
    try {
      const { userInfo } = await getUserInfo({});

      // Tùy chỉnh thông báo ở đây (ví dụ: tiêu đề, nội dung, v.v.)
      const notificationOptions = {
        title: "Thông Báo Mới",
        body: `Xin chào, ${userInfo.name}!`,
        // Các tùy chọn khác theo yêu cầu
      };

      // Gửi thông báo
      await requestSendNotification();
    } catch (error) {
      console.log(error);
    }
  };
  const sendAPINotification = async () => {
    const url = 'https://openapi.mini.zalo.me/notification/template';
    const headers = {
      'X-Api-Key': 'Bearer WlCxG_oTkJU2zoH4yvUyCfJ-9qJebBynb_mdG3SuILYiHlgReJ8',
      'X-User-Id': '8355411204102921681',
      'X-MiniApp-Id': '417268937671641097',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      "templateId": "00126f321321cce383",
      "templateData": {
        "buttonText": "Xem chi tiết đơn hàng",
        "buttonUrl": "https://zalo.me/s/194839900003483517/",
        "title": "ZaUI Coffee - Xác nhận đơn hàng",
        "contentTitle": "Xác nhận đơn hàng",
        "contentDescription": "Chúng tôi đã nhận yêu cầu đặt hàng từ bạn. Thông tin chi tiết đơn hàng"
      }
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
      });
      const data = await response.json();
      console.log(data);
      // Xử lý dữ liệu phản hồi ở đây
    } catch (error) {
      console.error('Lỗi khi gửi thông báo:', error);
      // Xử lý lỗi ở đây
    }
  };

  return (
    <Page className="flex flex-col justify-between">
      <Welcome />
      <Box>
        <div className="container mx-auto flex justify-center items-center">
          <div className="form bg-white h-[500px] w-full flex flex-col items-center pt-10">
            <div className="header">
              <img
                className="h-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                alt=""
              />
            </div>
            <button onClick={callAPI} className="mt-10 w-4/5 py-4 rounded-md border-none bg-blue-500 text-white outline-none transition-colors duration-500 ease-in-out hover:bg-blue-300">
              Mở thông báo
            </button>
            <button onClick={sendUserNotification} className="mt-10 w-4/5 py-4 rounded-md border-none bg-blue-500 text-white outline-none transition-colors duration-500 ease-in-out hover:bg-blue-300">
              Gửi thông báo 1
            </button>
            <button onClick={sendAPINotification} className="mt-10 w-4/5 py-4 rounded-md border-none bg-blue-500 text-white outline-none transition-colors duration-500 ease-in-out hover:bg-blue-300">
              Gửi thông báo 2
            </button>
          </div>
        </div>
      </Box>
    </Page>
  );
};

export default Profile;
