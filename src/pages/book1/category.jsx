import React from "react";
import { Box, Text } from "zmp-ui";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { useNavigate } from "react-router";
import { categoriesState, selectedCategoryIdState } from "../../state";

export const Categories = ({ title }) => {
  const categories = useRecoilValue(categoriesState);

  const navigate = useNavigate();
  const setSelectedCategoryId = useSetRecoilState(selectedCategoryIdState);

  const gotoCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
    navigate("/list-book/25");
  };

  return (
    <Box className="bg-white p-4 space-y-4">
      <Text.Title>{title}</Text.Title>
      <Box className="grid grid-cols-4 gap-4">
        {categories.map((category, i) => (
          <div
            key={i}
            onClick={() => gotoCategory(category.id)}
            className="flex flex-col space-y-2 items-center"
          >
            <img className="w-12 h-12" src={category.icon} />
            <Text size="xxSmall" className="text-gray text-center">
              {category.name}
            </Text>
          </div>
        ))}
      </Box>
    </Box>
  );
};
