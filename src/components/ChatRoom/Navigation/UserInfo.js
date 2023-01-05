import React from "react";
import { Avatar, Typography, Button } from "antd";
import { signOut } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../../../Firebase/config";
import { AuthContext } from "../../../Context/AuthProvider";

const StyleUserInfo = styled.div`
  display: flex;
  justify-content: space-around;
  max-height: 105px;
  align-items: center;
  padding: 32px 20px;
  gap: 2em;
  border-bottom: 1px solid #ccc;
  &&& {
    .btn-logout {
      background-color: #2f5cff;
    }
  }
`;

const StyleAvatar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
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
      <Button
        type="primary"
        className="btn-logout"
        onClick={() => signOut(auth)}
      >
        Đăng xuất
      </Button>
    </StyleUserInfo>
  );
};

export default UserInfo;
