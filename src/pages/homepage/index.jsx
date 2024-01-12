import React from "react";
import { List, Page, Icon, Header, useNavigate } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../../state";
import Welcome from "./welcome";
import Story from "./story";
import Post from "./post";
const HomePage = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  return (
    <Page className="">
      <Welcome />
      <Story />
      <Post />
      {/* <div className="section-container">
        <UserCard user={user.userInfo} />
      </div>
      <div className="section-container">
        <List>
          <List.Item
            onClick={() => navigate("/about")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>About</div>
          </List.Item>
          <List.Item
            onClick={() => navigate("/user")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>User</div>
          </List.Item>
        </List>
      </div> */}
    </Page>
  );
};

export default HomePage;
