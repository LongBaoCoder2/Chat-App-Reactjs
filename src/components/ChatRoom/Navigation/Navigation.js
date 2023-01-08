import React from "react";
import { Row, Col } from "antd";
import UserInfo from "./UserInfo";
import ChatList from "./ChatList";
import styled from "styled-components";
import { motion } from "framer-motion";
import { auth } from "../../../Firebase/config";
import { signOut } from "firebase/auth";

const LogoutStyle = styled(motion.button)`
  width: 50%;
  height: 45px;
  border: none;
  border-radius: 100em;
  background-color: #57eb64;
  font-weight: 500;
  font-size: 1em;
  position: absolute;
  bottom: 100px;
  cursor: pointer;
  transition: 0.4s;
`;

const StyleChatroom = styled(motion.nav)`
  background-image: linear-gradient(to top, #000428, #004e92);
  min-height: 100%;
  border-top-right-radius: 15px;
  position: relative;
  &&& {
    .ant-typography {
      color: #fff;
      font-size: 17px;
    }
  }
`;

const Navigation = () => {
  return (
    <StyleChatroom initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Row>
        <Col span={24}>
          <UserInfo></UserInfo>
        </Col>
        <Col span={24}>
          <ChatList></ChatList>
        </Col>
      </Row>
      <LogoutStyle
        type="primary"
        className="btn-logout"
        onClick={() => signOut(auth)}
        initial={{ x: "50%" }}
        whileHover={{ scale: 1.2 }}
      >
        Đăng xuất
      </LogoutStyle>
    </StyleChatroom>
  );
};

export default Navigation;
