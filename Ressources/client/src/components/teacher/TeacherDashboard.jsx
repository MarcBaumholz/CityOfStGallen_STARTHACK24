import React from "react";
import { Button, Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Routes, Route, Link } from "react-router-dom";
import Classes from "./Classes";
import Student from "./Student";
import Students from "./Students";
import Subjects from "./Subjects";
import Competence from "./Competence";
import Subject from "./Subject";
import QuickMenu from "./QuickMenu";
import EasyOverview from "../general/EasyOverview";

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

function DashboardRoutes({ setUser }) {
  return (
    <Routes>
      <Route path="/" element={<QuickMenu setUser={setUser} />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route
        path="/subjects/:subjectId/:competenceId"
        element={<Competence />}
      />
      <Route
        path="/option3"
        element={
          <DashboardContent title="Option 3" content="Inhalt für Option 3" />
        }
      />
      <Route path="/classes/:classId" element={<Students />} />
      <Route path="/classes/:classId/:studentId" element={<Student />} />
      <Route path="/subjects/:subjectId" element={<Subject />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/easy-view" element={<EasyOverview />} />
    </Routes>
  );
}

function TeacherDashboard({ setUser }) {
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
            for teachers
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
      <Sider style={{ paddingTop: "100px" }} collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">Übersicht</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<LaptopOutlined />}>
            <Link to="/classes">Klassen</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<NotificationOutlined />}>
            <Link to="/subjects">Fächer</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Content style={{ margin: "0 16px", paddingTop: 40 }}>
          <DashboardRoutes />
        </Content>
      </Layout>
    </Layout>
  );
}

export default TeacherDashboard;
