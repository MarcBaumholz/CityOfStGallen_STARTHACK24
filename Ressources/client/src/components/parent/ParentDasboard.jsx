import React from "react";
import { Button, Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Routes, Route, Link } from "react-router-dom";
import MyChildren from "./MyChildren";
import MyChild from "./MyChild";
import ParentMasterData from "./ParentMasterData";

const { Header, Content, Sider } = Layout;

function DashboardContent({ title, content }) {
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 360 }}
    >
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

function ParentDashboard({ setUser }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        className="site-layout-background"
        style={{
          padding: 20,
          position: "absolute",
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ color: "white", margin: 0 }}>DigiTeach</h1>
          <p
            style={{
              color: "white",
              marginLeft: "4px",
              marginTop: "5px",
              fontSize: "12px",
            }}
          >
            for parents
          </p>
        </div>
        <div style={{ float: "right", marginRight: "10px" }}>
          <Link to="/">
            <Button
              onClick={() => setUser(null)}
              type="primary"
              style={{ marginRight: "10px" }}
            >
              Logout
            </Button>
          </Link>
        </div>
      </Header>
      <Sider style={{ paddingTop: "70px" }} collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<LaptopOutlined />}>
            <Link to="/students">Leistungen</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<NotificationOutlined />}>
            <Link to="/masterdata">Stammdaten</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px", paddingTop: 40 }}>
          <Routes>
            <Route
              path="/"
              element={
                <DashboardContent
                  title="Parent Dashboard"
                  content="Willkommen im Eltern-Dashboard"
                />
              }
            />
            <Route path="/students" element={<MyChildren />} />
            <Route path="/students/:studentId" element={<MyChild />} />
            <Route path="/masterdata" element={<ParentMasterData />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default ParentDashboard;
