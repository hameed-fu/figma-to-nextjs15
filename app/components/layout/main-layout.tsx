"use client";
import "../../globals.css";
import { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, ConfigProvider } from "antd";
import AppHeader from "./header";
import Sidebar from "./sidebar";

const { Content, Sider } = Layout;

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#389E0D" },
        components: {
          Menu: {
            colorPrimary: "#389E0D",
            itemSelectedColor: "#389E0D",
            itemSelectedBg: "#D9F7BE",
            itemHoverColor: "#52c41a",
          },
          Button: { colorPrimary: "#389E0D" },
          Input: { colorPrimary: "#389E0D" },
          Select: { colorPrimary: "#389E0D" },
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

        <Layout>
          <AppHeader />
          <Content
            style={{
              margin: 16,
              overflow: "auto",
              
            }}
          >
            <div
              style={{
                padding: 24,
                borderRadius: borderRadiusLG,
                // background: colorBgContainer,
                // minHeight: "calc(100vh - 112px)", 
              }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
