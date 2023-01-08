import React, { useContext } from "react";
import { Collapse, Typography, Button } from "antd";
import styled from "styled-components";
import { AntDesignOutlined, PlusOutlined } from "@ant-design/icons";
import { RoomContext } from "../../../Context/RoomProvider";

const StylePanel = styled(Collapse.Panel)`
  &&& {
    .ant-typography {
      padding: 10px 20px;
      border-radius: 1rem;
      &.active {
        background: rgb(255, 255, 255, 0.1);
        transition: 0.5s;
      }
    }
    .ant-collapse-header {
      width: 100%;
      color: white;
      font-size: 16px;
      padding: 20px 30px 0 30px;
    }
    .ant-collapse-content-box {
      padding: 10px 30px;
    }
    .add-room {
      margin-top: 10px;
      color: #fff;
    }
  }
`;
const StyleTypo = styled(Typography.Link)`
  display: block;
  color: black;
  margin-bottom: 5px;
`;

const ChatList = ({ isVisible = true }) => {
  const { rooms, setIsModalOpen, setSelectedRoomId, selectedRoomId } =
    useContext(RoomContext);

  return (
    <Collapse
      ghost
      defaultActiveKey={["1"]}
      expandIconPosition="end"
      collapsible={<AntDesignOutlined />}
    >
      <StylePanel header="Rooms" key="1">
        {rooms.map((room) => (
          <StyleTypo
            className={`room ${room.id === selectedRoomId ? "active" : ""}`}
            key={room.id}
            onClick={() => setSelectedRoomId(room.id)}
          >
            {room.name}
          </StyleTypo>
        ))}
        <Button
          className="add-room"
          type="text"
          ghost
          icon={<PlusOutlined />}
          onClick={() => setIsModalOpen(true)}
        >
          Thêm phòng
        </Button>
      </StylePanel>
    </Collapse>
  );
};

export default ChatList;
