import React from "react";
import { Box, Icon } from "zmp-ui";
import { useNavigate } from "react-router-dom";

const CardProductHorizontal = ({
  productId,
  pathImg,
  nameProduct,
  salePrice,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full flex flex-row items-center border border-[#E4E8EC] rounded-lg overflow-hidden h-24"
      role="button"
    >
      <div
        className="w-24 flex-none"
        onClick={() => {
          navigate(`/detail-book/25`);
        }}
      >
        <img src={pathImg} alt="image product" ratio={1} />
      </div>
      <div
        className=" p-3 pr-0 flex-1"
        onClick={() => {
          navigate(`/detail-book/25`);
        }}
      >
        <div className="line-clamp-2 text-sm break-words">{nameProduct}</div>
        <span className=" pt-2 font-semibold text-sm text-primary">
          {salePrice}
        </span>
      </div>
      <>
        <Box
          mx={2}
          flex
          justifyContent="center"
          alignItems="center"
          className="flex-none"
        ></Box>
      </>
    </div>
  );
};

export default CardProductHorizontal;
