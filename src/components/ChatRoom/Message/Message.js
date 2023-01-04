import { Avatar, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const StyleMessage = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
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

const Message = ({ message, displayName, photoURL }) => {
  return (
    <StyleMessage>
      <Avatar size="large" src={photoURL}>
        Q
      </Avatar>
      <div className="message">
        <span className="name">{displayName}</span>
        <Typography.Text>{message}</Typography.Text>
      </div>
    </StyleMessage>
  );
};

export default Message;
