import React, { useEffect } from "react";
import zmpSdk, { login, getUserInfo } from "zmp-sdk";
import {
  getAccessToken,
  requestSendNotification,
  openPermissionSetting,
} from "zmp-sdk/apis";
import { Box, Header, Icon, Page, Text } from "zmp-ui";
import { ListRenderer } from "../../components/list-render";
import { configView } from "../../utils/device";
import { Welcome } from "./welcome";

const Profile = () => {
  const test = async () => {
    try {
      const accessToken = await getAccessToken({});
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const { userInfo } = await getUserInfo({});
    } catch (error) {
      console.log(error);
    }
  };

  const callAPI = async () => {
    try {
      await openPermissionSetting({});
    } catch (error) {
      console.log(error);
    }
  };

  const sendUserNotification = async () => {
    try {
      const { userInfo } = await getUserInfo({});

      const notificationOptions = {
        title: "Thông Báo Mới",
        body: `Xin chào, ${userInfo.name}!`,
      };

      // Gửi thông báo
      await requestSendNotification();
    } catch (error) {
      console.log(error);
    }
  };
  const sendAPINotification = async () => {
    const url = "https://openapi.mini.zalo.me/notification/template";
    const headers = {
      "X-Api-Key": "Bearer zu79EQSgxZ7tXTyxhYxZDkY5tJsrBUm_xuBKCJGoQ9e9EwuhzZi",
      "X-User-Id": "2494067826468673860",
      "X-MiniApp-Id": "2284381959926842107",
      "Content-Type": "application/json",
    };
    const body = JSON.stringify({
      templateId: "00126f321321cce383",
      templateData: {
        buttonText: "Xem chi tiết đơn hàng",
        buttonUrl: "https://zalo.me/s/194839900003483517/",
        title: "ZaUI Coffee - Xác nhận đơn hàng",
        contentTitle: "Xác nhận đơn hàng",
        contentDescription:
          "Chúng tôi đã nhận yêu cầu đặt hàng từ bạn. Thông tin chi tiết đơn hàng",
      },
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body,
      });
      const data = await response.json();
    } catch (error) {
      console.error("Lỗi khi gửi thông báo:", error);
    }
  };

  return (
    <Page>
      <Header title="Cá nhân" showBackIcon={false} />
      <Box className="m-4">
        <ListRenderer
          title="Cá nhân"
          items={[
            {
              left: <Icon icon="zi-user" />,
              right: (
                <Box flex>
                  <Text.Header className="flex-1 items-center font-normal">
                    Thông tin tài khoản
                  </Text.Header>
                  <Icon icon="zi-chevron-right" />
                </Box>
              ),
            },
            {
              left: <Icon icon="zi-clock-2" />,
              right: (
                <Box flex>
                  <Text.Header className="flex-1 items-center font-normal">
                    Lịch sử tìm kiếm
                  </Text.Header>
                  <Icon icon="zi-chevron-right" />
                </Box>
              ),
            },
          ]}
          renderLeft={(item) => item.left}
          renderRight={(item) => item.right}
        />
      </Box>
    </Page>
  );
};

export default Profile;
