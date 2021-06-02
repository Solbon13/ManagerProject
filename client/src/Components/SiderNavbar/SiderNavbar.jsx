import { Menu } from "antd";
import {
  UserOutlined
} from "@ant-design/icons";
import { useSelector } from "react-redux";

const SiderNavbar = () => {
  const users = useSelector((state) => state.user.users);

  const children = users?.map((item) => (
    <Menu.Item key={item.id} icon={<UserOutlined />}>{`${item.firstName} ${item.lastName} ${item.patronymic}`}</Menu.Item>
  ));

    return (
        <Menu
        mode="inline"
        style={{ height: "100%", borderRight: 0 }}
      >
          {children}
      </Menu>
    )
}

export default SiderNavbar
