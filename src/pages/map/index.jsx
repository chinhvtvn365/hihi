import React from 'react'
import { Header, List, Page, Tabs, Avatar, Icon } from 'zmp-ui'
import GoogleMaps from '../../components/display/googleMaps';

const Map = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
const users = Array.from(Array(10).keys()).map((i) => ({
  name: `Người dùng ${i}`,
  avatar: alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase(),
  online: Math.floor(Math.random() * 10) % 2 === 0,
  key: i,
}));
const hi = (a) =>{
  console.log(a);
}
  return (
    <Page className="flex flex-col">
    <Header title="Bản đồ số tỉnh Hậu Giang" />
    <Tabs id="contact-list" defaultActiveKey="1" onChange={(activeKey) => hi(activeKey)}>
        <Tabs.Tab key="1" label="Y tế">
        </Tabs.Tab> 
        <Tabs.Tab key="2" label="Du lịch">
         
        </Tabs.Tab>
        <Tabs.Tab key="3" label="Giáo dục">
       
        </Tabs.Tab>
      </Tabs>
      <div className="flex-1">
    <GoogleMaps />
    </div>
  </Page>
  )
}

export default Map