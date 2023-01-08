import React from "react";
import { Row, Col } from "antd";
import Navigation from "../Navigation/Navigation";
import ChatBox from "../ChatBox";

const Chatroom = () => {
  return (
    <Row>
      <Col span={4}>
        <Navigation></Navigation>
      </Col>
      <Col span={20}>
        <ChatBox></ChatBox>
      </Col>
    </Row>
  );
};

export default Chatroom;
