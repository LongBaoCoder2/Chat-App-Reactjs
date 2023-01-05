import { Avatar, Typography } from "antd";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const StyleWrapper = styled(motion.div)`
  background-color: #477eff;
  padding: 10px 30px;
  width: fit-content;
  margin-top: 20px;
  border-radius: 20px;
  display: inline-block;
  position: relative;
  color: #fff;
  .myself--message {
    flex-direction: row-reverse;
    text-align: right;
  }
`;

const StyleMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  width: auto;
  gap: 10px;
  .message {
    margin-left: 20px;
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
  }

  .name {
    font-weight: bold;
  }
  &&& {
    .ant-typography {
      font-size: 1.2em;
      margin-top: 5px;
    }
  }
`;

const Message = ({ message, displayName, photoURL, className }) => {
  return (
    <StyleWrapper
      layout
      style={
        className === "myself"
          ? { alignSelf: "flex-end", backgroundColor: "#576c99" }
          : {}
      }
    >
      <StyleMessage layout className={`${className}--message`}>
        <Avatar size="large" src={photoURL}>
          Q
        </Avatar>
        <div className="message">
          <span className="name">{displayName}</span>
          <Typography.Text>{message}</Typography.Text>
        </div>
      </StyleMessage>
    </StyleWrapper>
  );
};

export default Message;
