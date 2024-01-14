import React, { useEffect, useState } from "react";
import { Box, Header, Text } from "zmp-ui";
import zmpSdk, { login, getUserInfo } from "zmp-sdk";

export const Welcome = () => {
  const [user, setUser] = useState()
  const getUser = async () => {
    try {
      const { userInfo } = await getUserInfo({});
      setUser(userInfo)
      console.log(userInfo);
    } catch (error) {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  };
  useEffect(() => {
    getUser()
  }, [])
  return (
    <Header
      className="app-header no-border pl-4 flex-none pb-[6px]"
      showBackIcon={false}
      title={
        (
          <Box flex alignItems="center" className="space-x-2">
            <img
              className="w-8 h-8 rounded-lg border-inset"
              src={user?.avatar}
            />
            <Box>
              <Text.Title size="small">Demo</Text.Title>
              {user?.name  ? (
                <Text size="xxSmall" className="text-gray">
                  Welcome, {user?.name}!
                </Text>
              ) : (
                <Text>...</Text>
              )}
            </Box>
          </Box>
        )
      }
    />
  );
};
