import { Col, Layout, Row } from "antd";
import React from "react";
import MyDrawer from "../../Components/Drawer/MyDrawer";
import NavBar from "../../Components/MainNavbar/NavBar";

const { Header } = Layout;

const MyHeader = () => {
  
  return (
    <Header className="header">
      <Row>
        <Col span={2}>
          <div className="logo" style={{color: "white"}}>
            LOGO тут
          </div>
        </Col>
        <Col span={20}>
          <NavBar />
        </Col>
        <Col span={1}>
          <MyDrawer/>
        </Col>
      </Row>
    </Header>
  );
};

export default MyHeader;
