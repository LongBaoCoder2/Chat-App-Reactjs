import React from "react";
import { Row, Col } from "antd";
import UserInfo from "./UserInfo";
import ChatList from "./ChatList";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyleChatroom = styled(motion.nav)`
  background-image: linear-gradient(to top, #000428, #004e92);
  min-height: 100%;
  border-top-right-radius: 15px;
  &&& {
    .ant-typography {
      color: #fff;
      font-size: 17px;
    }
  }
`;

const Navigation = () => {
  return (
    <StyleChatroom initial={{ opacity: "0.5" }} animate={{ opacity: 1 }}>
      <Row>
        <Col span={24}>
          <UserInfo></UserInfo>
        </Col>
        <Col span={24}>
          <ChatList></ChatList>
        </Col>
      </Row>
    </StyleChatroom>
  );
};

export default Navigation;
