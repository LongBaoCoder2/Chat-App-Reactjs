import React, { useContext } from "react";
import { Collapse, Typography, Button } from "antd";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { RoomContext } from "../../../Context/RoomProvider";

const StylePanel = styled(Collapse.Panel)`
  &&& {
    .ant-collapse-header {
      color: white;
      font-size: 16px;
      padding: 20px 30px 0 30px;
    }
    .ant-collapse-content-box {
      padding: 10px 50px;
    }
    .add-room {
      padding: 0;
      color: white;
    }
  }
`;
const StyleTypo = styled(Typography.Link)`
  display: block;
  color: black;
  margin-bottom: 20px;
`;

const ChatList = () => {
  const { rooms, setIsModalOpen, setSelectedRoomId } = useContext(RoomContext);

  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <StylePanel header="Danh sách các phòng" key="1">
        {rooms.map((room) => (
          <StyleTypo
            className="Room"
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
          Thêm một phòng
        </Button>
      </StylePanel>
    </Collapse>
  );
};

export default ChatList;
