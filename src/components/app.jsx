import React from "react";
import { RecoilRoot } from "recoil";
import { App, Box, Page, SnackbarProvider, ZMPRouter } from "zmp-ui";
import Layout from "./layout";
import { ScrollRestoration } from "./scroll-restoration";
import Tab from "./tab";
const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
          <ScrollRestoration />
            <Box flexDirection="column" className="h-screen overflow-auto hide-scrollbar"> 
            <Layout />
            <Tab />
            </Box>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
