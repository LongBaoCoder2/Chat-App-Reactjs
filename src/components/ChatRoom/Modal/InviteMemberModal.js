import { Avatar, Form, Modal, Select, Spin, Typography } from "antd";
import { debounce } from "lodash";
import React, { useContext } from "react";
import { RoomContext } from "../../../Context/RoomProvider";

const fetchFunctions = async () => {};

const DeboundOptions = ({ fetchOptions, timeOut = 500, ...props }) => {
  const [isFetching, setIsFetching] = React.useState(false);
  const [options, setOptions] = React.useState([]);

  const deboundFetcher = React.useMemo(() => {
    const loadDebound = (value) => {
      setIsFetching(true);
      setOptions([]);

      fetchOptions(value).then((newOptions) => {
        setIsFetching(false);
        setOptions(newOptions);
      });
    };
    return debounce(loadDebound, timeOut);
  }, [fetchOptions, timeOut]);

  return (
    <Select
      labelInValue
      filterOptions={false}
      onSearch={deboundFetcher}
      notFoundContent={isFetching ? <Spin /> : null}
      {...props}
    >
      {options.map((option) => (
        <Select.Option
          value={option.value}
          key={option.value}
          title={option.label}
        >
          <Avatar src={option.photoURL}></Avatar>
          <Typography.Text>{option.label}</Typography.Text>
        </Select.Option>
      ))}
    </Select>
  );
};

const InviteMemberModal = () => {
  const [value, setValue] = React.useState([]);
  const { isInviteModalOpen, setIsInviteModalOpen } = useContext(RoomContext);
  const [form] = Form.useForm();

  const handleOk = () => {
    form.resetFields();
    setIsInviteModalOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsInviteModalOpen(false);
  };
  return (
    <div>
      <Modal
        title="Thêm một phòng"
        open={isInviteModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical" form={form}>
          <DeboundOptions
            mode="mutiple"
            label="Mời thành viên"
            placeholder="Thêm thành viên"
            style={{ width: "100%" }}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            fetchOptions={fetchFunctions}
          ></DeboundOptions>
        </Form>
      </Modal>
    </div>
  );
};

export default InviteMemberModal;
