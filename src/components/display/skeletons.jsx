import React, { FC, HTMLProps, PropsWithChildren } from "react";
import { Box, Text } from "zmp-ui";


export const TextSkeleton = ({
  className,
  ...props
}) => {
  return (
    <Text
      {...props}
      className={`bg-skeleton text-transparent w-fit h-fit animate-pulse ${
        className ?? ""
      }`}
    />
  );
};

export const ImageSkeleton = ({
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`bg-skeleton animate-pulse ${className ?? ""}`}
    />
  );
};

export const ProductItemSkeleton = () => {
  return (
    <div className="space-y-2">
      <ImageSkeleton className="w-full aspect-square rounded-lg" />
      <TextSkeleton>1234567890</TextSkeleton>
      <TextSkeleton size="xxSmall">20,000đ</TextSkeleton>
    </div>
  );
};

export const ProductSlideSkeleton = () => {
  return (
    <div className="space-y-3">
      <ImageSkeleton className="w-full aspect-video rounded-lg" />
      <Box className="space-y-1">
        <TextSkeleton size="small">1234567890</TextSkeleton>
        <TextSkeleton size="xxSmall">25,000đ</TextSkeleton>
        <TextSkeleton size="large">20,000đ</TextSkeleton>
      </Box>
    </div>
  );
};

export const ProductSearchResultSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <ImageSkeleton className="w-[88px] h-[88px] rounded-lg" />
      <Box className="space-y-2">
        <TextSkeleton>1234567890</TextSkeleton>
        <TextSkeleton size="xSmall">25,000đ</TextSkeleton>
      </Box>
    </div>
  );
};
