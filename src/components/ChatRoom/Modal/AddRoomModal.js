import { UserOutlined } from "@ant-design/icons";
import { Form, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { RoomContext } from "../../../Context/RoomProvider";
import { addDocument } from "../../../Firebase/service";

const AddRoomModal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(RoomContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [form] = Form.useForm();

  const handleOk = () => {
    console.log(form.getFieldValue());
    const formData = {
      ...form.getFieldValue(),
      members: [uid],
    };

    addDocument("rooms", formData);

    form.resetFields();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        title="Thêm một phòng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical" form={form}>
          <FormItem
            label="Tên phòng"
            name="name"
            rules={[
              {
                message: "Needed name!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Tên phòng"
              prefix={<UserOutlined />}
            />
          </FormItem>
        </Form>
      </Modal>
    </div>
  );
};

export default AddRoomModal;
