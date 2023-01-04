import React, { createContext, useMemo } from "react";
import { useFirestore } from "../hooks/useFirestore";
import { AuthContext } from "./AuthProvider";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = React.useState(false);
  const [selectedRoomId, setSelectedRoomId] = React.useState("");
  const {
    user: { uid },
  } = React.useContext(AuthContext);

  const roomCondition = React.useMemo(() => {
    return {
      field: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);
  const rooms = useFirestore("rooms", roomCondition);

  const sellectedRoom = React.useMemo(
    () => rooms.find((room) => room.id === selectedRoomId) || {},
    [rooms, selectedRoomId]
  );

  const userCondition = useMemo(() => {
    return {
      field: "uid",
      operator: "in",
      compareValue: sellectedRoom.members,
    };
  }, [sellectedRoom.members]);
  const userList = useFirestore("users", userCondition);

  const messageCondition = useMemo(() => {
    return {
      field: "roomId",
      operator: "==",
      compareValue: sellectedRoom.id,
    };
  }, [sellectedRoom.id]);
  const messageList = useFirestore("messages", messageCondition);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sellectedRoom,
        userList,
        messageList,
        isModalOpen,
        isInviteModalOpen,
        setIsInviteModalOpen,
        setIsModalOpen,
        selectedRoomId,
        setSelectedRoomId,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
