import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormUser from "../FormUser/FormUser";

const MyDrawer = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [visible, setVisible] = useState(false);
  const [isRegister, setRegister] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title=""
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        {
        /*
        TODO сделать личный кабинет
        */}
        {currentUser ? "Нужно пользака" : <FormUser isRegister={isRegister} />}
        <Button type="text" ghost onClick={() => setRegister(!isRegister)}>
          {isRegister ? "Вход" : currentUser ? "Выход" : "Регистрация"}
        </Button>
      </Drawer>
    </div>
  );
};

export default MyDrawer;
