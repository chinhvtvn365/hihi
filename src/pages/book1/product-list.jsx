import React, { FC, Suspense } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { Box } from "zmp-ui";

import { ProductItemSkeleton } from "../../components/display/skeletons";

import { productsState } from "../../state";
import { Section } from "../../components/display/section";
import { ProductItem } from "../../components/display/item";

export const ProductListContent = () => {
  const products = useRecoilValue(productsState);
  const navigate = useNavigate();
  return (
    <Section title="Sách mới">
      <Box className="grid grid-cols-2 gap-4">
        {products.map((product, i) => (
          <ProductItem product={product} key={i} />
        ))}
      </Box>
    </Section>
  );
};

export const ProductListFallback = () => {
  const products = [...new Array(12)];

  return (
    <Section title="Sách mới">
      <Box className="grid grid-cols-2 gap-4">
        {products.map((_, i) => (
          <ProductItemSkeleton  key={i} />
        ))}
      </Box>
    </Section>
  );
};

export const ProductList = () => {
  return (
    <Suspense fallback={<ProductListFallback />}>
      <ProductListContent />
    </Suspense>
  );
};
