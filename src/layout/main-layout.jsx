import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import "./layout.scss";

const { Header, Content, Sider } = Layout;

const sidebarData = [
  {
    key: 1,
    icon: <UserOutlined />,
    label: <Link to="/">News</Link>,
    children: [
      {
        key: 11,
        label: <Link to="/about">About</Link>,
      },
    ],
  },
  {
    key: 2,
    icon: <UserOutlined />,
    label: "Navigation 2",
    children: [
      {
        key: 21,
        label: "Sub Navigation 2.1",
      },
    ],
  },
  {
    key: 3,
    icon: <UserOutlined />,
    label: "Navigation 3",
    children: [
      {
        key: 31,
        label: "Sub Navigation 3.1",
      },
    ],
  },
];

const items2 = sidebarData.map((item) => {
  return {
    key: item.key,
    icon: item.icon,
    label: item.label,

    children: item.children.map((child) => {
      return {
        key: child.key,
        label: child.label,
      };
    }),
  };
});

export const MainLayout = () => {
  return (
    <div className="layout__wrapper">
      <Layout style={{ height: "100vh" }}>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
        </Header>
        <Layout>
          <Sider width={200} height={100}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                padding: 24,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};
