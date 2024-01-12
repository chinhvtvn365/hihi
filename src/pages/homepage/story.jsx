import React from "react";
import { Box, Text } from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import iuImg from "../../static/image/iu.jpg";
import winterImg from "../../static/image/winter.jpg";
import exoImg from "../../static/image/EXO_Exodus_logo.png";
import "swiper/css";
import "swiper/css/bundle";

const Story = () => {
  const data = [
    {
      name: "Winter",
      src: winterImg,
    },
    {
      name: "IU",
      src: iuImg,
    },
    {
      name: "EXO",
      src: exoImg,
    },
    {
      name: "Winter",
      src: winterImg,
    },
    {
      name: "IU",
      src: iuImg,
    },
    {
      name: "Winter",
      src: winterImg,
    },
    {
      name: "IU",
      src: iuImg,
    },
  ];
  return (
    <div className="p-2 flex items-center border-bottom-thin border-gray-400 border-solid">
      <Swiper slidesPerView={4.5} spaceBetween={0}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Box className="h-[100px]">
           <div className="gradient-border">
           <img
                src={item.src}
                class="h-[70px] w-[70px] object-cover rounded-full border-2 border-white bg-white"
              />
           </div>
           <Text size="xxSmall" className="text-gray text-center">
            {item.name}
          </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Story;