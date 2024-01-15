import React from "react";
import { Box, Text } from "zmp-ui";

export const ProductItem = ({ product }) => {
  return (
    <div className="space-y-2">
      <Box className="w-full aspect-square relative">
        <img
          loading="lazy"
          src={product?.image}
          className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
        />
      </Box>
      <Text>{product?.name}</Text>
      <Text size="xxSmall" className="text-gray pb-2"></Text>
    </div>
  );
};
