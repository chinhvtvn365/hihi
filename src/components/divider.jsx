import React, { FC } from "react";
import { Box } from "zmp-ui";


export const Divider = ({
  size = 8,
  ...props
}) => {
  return (
    <Box
      style={{
        minHeight: size,
        backgroundColor: "var(--zmp-background-color)",
      }}
      {...props}
    />
  );
};
