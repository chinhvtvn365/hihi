import React from 'react'
import { Box, Page } from 'zmp-ui'
import cameraIcon from "../../static/icons/cameraIcon.svg";
import igtvIcon from "../../static/icons/IGTV.svg";
import messangerIcon from "../../static/icons/messanger.svg";
import logo from "../../static/icons/logo.png";
const Welcome = () => {
  return (
   <Box >
     <div className="flex flex-1 flex-row items-center justify-between h-[50px] px-1 border-bottom-thin border-gray-400 border-solid">
     <div className="p-2">
        <img className="size-full" src={cameraIcon}/>
      </div>
      <div className="p-2 flex-1">
        <img className="mx-auto" src={logo}/>
      </div>
      <div className="p-2">
        <img className="size-full" src={igtvIcon}/>
      </div>
      <div className="p-2">
        <img className="size-full" src={messangerIcon}/>
      </div>
     </div>
   </Box>
  )
}

export default Welcome