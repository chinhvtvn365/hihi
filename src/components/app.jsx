import React from "react";
import { RecoilRoot } from "recoil";
import { App, Box, Page, SnackbarProvider, ZMPRouter } from "zmp-ui";
import { ConfigProvider } from "./config-provider";
import Layout from "./layout";
import { ScrollRestoration } from "./scroll-restoration";
import Tab from "./tab";
const MyApp = () => {
  return (
    <RecoilRoot>
       <ConfigProvider
        cssVariables={{
          "--zmp-primary-color": "#006af5",
          "--zmp-background-color": "#f4f5f6",
        }}
      >
      <App>
        <SnackbarProvider>
          <ZMPRouter>
          <ScrollRestoration />
            <Box flexDirection="column" className="h-screen overflow-auto"> 
            <Layout />
            <Tab />
            </Box>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
      </ConfigProvider>
    </RecoilRoot>
  );
};
export default MyApp;
