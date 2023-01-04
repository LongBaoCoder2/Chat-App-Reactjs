import "./App.css";
import Login from "./components/Login/Login";
import Chatroom from "./components/ChatRoom/ChatBox/Chatroom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import RoomProvider from "./Context/RoomProvider";
import AddRoomModal from "./components/ChatRoom/Modal/AddRoomModal";
import InviteMemberModal from "./components/ChatRoom/Modal/InviteMemberModal";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoomProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Chatroom />} />
          </Routes>
          <AddRoomModal></AddRoomModal>
          <InviteMemberModal></InviteMemberModal>
        </RoomProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
