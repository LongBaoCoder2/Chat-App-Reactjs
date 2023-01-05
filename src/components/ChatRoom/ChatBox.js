import { SendOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Avatar, Button, Form, Input, Tooltip, Typography } from "antd";
import styled from "styled-components";
import { RoomContext } from "../../Context/RoomProvider";
import Message from "./Message/Message";
import React from "react";
import { addDocument } from "../../Firebase/service";
import { AuthContext } from "../../Context/AuthProvider";

const StyleContainer = styled.div`
  height: 100vh;
`;
const StyleAvatarWrapper = styled.div`
  height: 105px;
  display: flex;
  justify-content: space-between;
  padding: 30px 50px 30px 0;
  border-bottom: 1px solid #ccc;
  position: relative;
  &&& {
    .ant-btn {
      background-color: #391898;
      border-radius: 100rem;
      position: absolute;
      transform: translateX(-120%);
    }
  }
`;

const StyleSend = styled(Form)`
  max-height: 85px;
  position: fixed;
  bottom: 0px;
  background-color: #fff;
  width: 80%;
  padding: 10px;
  font-size: 50px;
  border: 1px solid #ccc;
  &&& {
    .ant-btn.ant-btn-circle {
      width: 50px;
      height: 50px;
      transform: translateY(3px);
      background-color: #391898;
    }
    .ant-form-item-control-input-content {
      width: 100%;
      display: flex;
      gap: 15px;
      justify-content: center;
    }
    .ant-input {
      font-size: 1.3em;
      padding: 25px;
      width: 55%;
      height: 60px;
      border-radius: 20px;
    }
  }
`;
const StyleAvatar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  margin-left: 30px;
  &&& {
    .ant-typography {
      font-size: 3em;
      font-weight: bold;
      margin-left: 50px;
    }
  }
`;
const StyleChatbox = styled.div`
  padding: 50px 60px;
  height: calc(100% - 190px);
  display: flex;
  flex-flow: column nowrap;
  overflow-y: auto;
  .my-self {
    background-color: red;
  }
`;

const ChatBox = () => {
  const { sellectedRoom, userList, setIsInviteModalOpen, messageList } =
    React.useContext(RoomContext);
  const {
    user: { displayName, photoURL, uid },
  } = React.useContext(AuthContext);
  const [inputValue, setInputValue] = React.useState("");
  const [form] = Form.useForm();

  console.log(inputValue);
  const handleInputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePressEnter = () => {
    addDocument("messages", {
      text: inputValue,
      displayName,
      photoURL,
      uid,
      roomId: sellectedRoom.id,
    });
    form.resetFields(["messages"]);
  };

  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  return (
    <StyleContainer>
      {sellectedRoom.id ? (
        <>
          <StyleAvatarWrapper>
            <StyleAvatar>
              <Typography.Text>{sellectedRoom.name}</Typography.Text>
            </StyleAvatar>

            <Avatar.Group
              maxCount={3}
              size="large"
              maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
            >
              <Button
                type="primary"
                icon={<UserAddOutlined />}
                size="large"
                onClick={() => setIsInviteModalOpen(true)}
              >
                Mời
              </Button>
              {userList.map((user) => (
                <Tooltip
                  title={user.displayName}
                  placement="top"
                  key={user.uid}
                >
                  <Avatar
                    src={user.photoURL}
                    icon={!user.photoURL ? <UserOutlined /> : null}
                  />
                </Tooltip>
              ))}
            </Avatar.Group>
          </StyleAvatarWrapper>
          <StyleChatbox>
            {messageList.map((message) => (
              <Message
                displayName={message.displayName}
                photoURL={message.photoURL}
                message={message.text}
                className={message.uid === uid ? "myself" : ""}
              ></Message>
            ))}
            <div ref={messagesEndRef} />
          </StyleChatbox>
          <StyleSend form={form}>
            <Form.Item name="messages">
              <Input
                placeholder="Nhập tin nhắn ..."
                onChange={handleInputOnChange}
                onPressEnter={handlePressEnter}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<SendOutlined />}
                size={60}
                onClick={handlePressEnter}
              />
            </Form.Item>
          </StyleSend>
        </>
      ) : (
        <Alert
          message="Chào mừng đến với Chat room"
          description="Chat tới bến nhé ^^."
          type="success"
          showIcon
          style={{ margin: 50 }}
        />
      )}
    </StyleContainer>
  );
};

export default ChatBox;
