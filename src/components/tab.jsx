import React, { useMemo, useState } from "react";
import { BottomNavigation, Icon } from "zmp-ui";
import { useLocation, useNavigate } from "react-router";
const Tab = () => {
  const tabs = {
    "/": {
      label: "Trang chủ",
      icon: <Icon icon="zi-home" />,
    },
    "/notification": {
      label: "Thông báo",
      icon: <Icon icon="zi-notif" />,
    },
    "/cart": {
      label: "Giỏ hàng",
      icon: <Icon icon="zi-calendar" />,
    },
    "/profile": {
      label: "Cá nhân",
      icon: <Icon icon="zi-user" />,
    },
  };

  const [activeTab, setActiveTab] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(activeTab);
  return (
    <BottomNavigation
      id="footer"
      activeKey={activeTab}
      onChange={(key) => setActiveTab(key)}
      className="z-50"
    >
      {Object.keys(tabs).map((path) => (
        <BottomNavigation.Item
          key={path}
          label={tabs[path].label}
          icon={tabs[path].icon}
          activeIcon={tabs[path].activeIcon}
          onClick={() => navigate(path)}
        />
      ))}
    </BottomNavigation>
  );
};

export default Tab;
