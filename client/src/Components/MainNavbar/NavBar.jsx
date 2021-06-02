import React, { useState } from "react";
import { Form, Input, Menu, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { createDepartament } from "../../actions/mainAction";
import { NavLink } from 'react-router-dom'
import { setCurrentDepartament } from "../../store/mainReducer";

const NavBar = () => {
  const departament = useSelector((state) => state.main.departament);

  const dispatch = useDispatch();

  const onSelect = (value) => {
    console.log(value.key);
    if (value.key === "add") {
    showModal();
    } else {
      dispatch(setCurrentDepartament(value.key))
    }  
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onSubmit = (values) => {
    // do your staff with values
    console.log(values);
    dispatch(createDepartament(values));
    setIsModalVisible(false);
  }

  const closePopup = () => {
    form.resetFields();
    setIsModalVisible(false);
  }

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        onSelect={onSelect}
      >
        {departament.map((item) => (
          <Menu.Item key={item.id}><NavLink to={'/' + item.id}>{item.name}</NavLink></Menu.Item>
        ))}
        <Menu.Item key="add">
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<PlusOutlined />} />
          </Tooltip>
        </Menu.Item>
      </Menu>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={form.submit}
        onCancel={closePopup}
      >
        <Form form={form} onFinish={onSubmit}>
          <Form.Item
            label="Отдел"
            name="name"
            rules={[
              {
                required: true,
                message: "Необходимо ввести наименование отдела"
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NavBar;
