import React from "react";
import { Avatar, Typography } from "antd";
import styled from "styled-components";
import { AuthContext } from "../../../Context/AuthProvider";
import { motion } from "framer-motion";

const StyleUserInfo = styled.div`
  display: block;
  margin: 0 auto;
  height: 105px;
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;

const StyleAvatar = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  &&& {
    .ant-avatar {
      width: 60px;
      height: 60px;
      border-radius: 100rem;
    }
  }
`;

const UserInfo = () => {
  const userData = React.useContext(AuthContext);
  return (
    <StyleUserInfo>
      <StyleAvatar>
        <Avatar src={userData.user.photoURL} size="large" />
        <Typography.Text>{userData.user.displayName}</Typography.Text>
      </StyleAvatar>
    </StyleUserInfo>
  );
};

export default UserInfo;
