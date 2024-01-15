import React from "react";
import { Box, Text } from "zmp-ui";
import winterImg from "../../static/image/winter.jpg";
import aespaImg from "../../static/image/aespa.jpg";
import rectangle from "../../static/image/Rectangle.png";
import checkIcon from "../../static/icons/OfficialIcon.svg";
import moreIcon from "../../static/icons/MoreIcon.svg";
import saveIcon from "../../static/icons/save.svg";
import shapeIcon from "../../static/icons/Shape.svg";
import likeIcon from "../../static/icons/Like.svg";
import commentIcon from "../../static/icons/Comment.svg";
import paginationIcon from "../../static/icons/Pagination.svg";
const Post = () => {
  return (
    <Box>
      <div className="flex flex-1 justify-between p-3 items-center">
        <div className="flex flex-row gap-2">
          <img
            src={aespaImg}
            className="h-[50px] w-[50px] object-cover rounded-full"
          />
          <Box flex flexDirection="column" className="justify-center gap-1">
            <div className="flex flex-row gap-1 items-center">
              <Text.Title size="small">winter</Text.Title>
              <img className="h-[15px] w-[15px]" src={checkIcon} />
            </div>
            <Text size="xxSmall" className="text-gray">
              Seoul, Korea
            </Text>
          </Box>
        </div>

        <div>
          <img className="h-[15px] w-[15px]" src={moreIcon} />
        </div>
      </div>
      <div>
        <img
          className="h-auto max-h-[400px] object-cover w-full"
          src={rectangle}
        />
      </div>
      <Box className="relative">
        <div className="flex flex-1 flex-row justify-between">
          <div className="p-3">
            <img src={likeIcon} className="h-[24px] w-[24px]" />
          </div>
          <div className="p-3">
            <img src={commentIcon} className="h-[24px] w-[24px]" />
          </div>
          <div className="p-3">
            <img src={shapeIcon} className="h-[24px] w-[24px]" />
          </div>

          <div className="p-3 flex-1"></div>

          <div className="p-3">
            <img src={saveIcon} className="h-[24px] w-[24px]" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3">
          <img src={paginationIcon} className="h-[24px] w-[24px]" />
        </div>
      </Box>
    </Box>
  );
};

export default Post;
