import React from "react";
import { Box, Text } from "zmp-ui";
import { useNavigate } from "react-router-dom";
export const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-2"  onClick={() => {
      navigate(`/detail-book/25`);
    }}>
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
