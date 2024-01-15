import React from "react";
import { Box, Button, Header, Page, Text } from "zmp-ui";
import { CartItems } from "./cart-item";
import { Delivery } from "./delivery";

const CartPage = () => {
  return (
    <Page className="flex flex-col">
      <Header title="Giỏ hàng" showBackIcon={false} />
      <CartItems />
      <Delivery />
      <Text className="text-gray px-4" size="xxSmall">
        Bằng việc tiến hành thanh toán, bạn đồng ý với điều kiện và điều khoản
        sử dụng của Zalo Mini App
      </Text>
      <Box flex className="sticky bottom-0 bg-background p-4 space-x-4">
        <Box
          flex
          flexDirection="column"
          justifyContent="space-between"
          className="min-w-[120px] flex-none"
        >
          <Text className="text-gray" size="xSmall">
            0 sản phẩm
          </Text>
          <Text.Title size="large">0</Text.Title>
        </Box>
        <Button type="highlight" disabled={true} fullWidth>
          Đặt hàng
        </Button>
      </Box>
    </Page>
  );
};

export default CartPage;
