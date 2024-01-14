import React from "react";
import zmpSdk, { login, getUserInfo } from "zmp-sdk";
import { getAccessToken } from "zmp-sdk/apis";
import { Box } from "zmp-ui";

const Login = () => {
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

  return (
    <Box>
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="form bg-white h-[500px] w-[350px] flex flex-col items-center pt-10">
          <div className="header">
            <img
              className="h-[50px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
              alt=""
            />
          </div>
          <button onClick={getUser} className="mt-10 w-4/5 py-4 rounded-md border-none bg-blue-500 text-white outline-none transition-colors duration-500 ease-in-out hover:bg-blue-300">
            Log In
          </button>
        </div>
      </div>
    </Box>
  );
};

export default Login;
