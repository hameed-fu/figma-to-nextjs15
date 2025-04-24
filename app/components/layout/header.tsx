import React from "react";
import { Header } from "antd/lib/layout/layout";
import { Button, Badge, Avatar, Dropdown, Menu, Divider } from "antd";
import {
  BellOutlined,
  UserOutlined,
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import "./AppHeader.css";

interface AppHeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

const AppHeader: React.FC = () => {
  const menuItems = [
    { key: "1", label: "Profile" },
    { key: "2", label: "Settings" },
    { key: "3", label: "Log Out" },
  ];

  return (
    <Header className="app-header">
      <div className="left-header">
      
      </div>

      <div className="right-header">
        <Badge count={11}>
          <Button
            type="text"
            icon={<BellOutlined style={{ fontSize: "20px" }} />}
            className="notification-btn"
          />
        </Badge>
        <Divider type="vertical" />
        <div className="profile-wrapper">
          <Avatar
            style={{ backgroundColor: "#f0f0f0", color: "#666" }}
            icon={<UserOutlined />}
            size="large"
          >
            AK
          </Avatar>
          <Dropdown
            menu={{ items: menuItems }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <Button
              type="text"
              icon={<DownOutlined style={{ fontSize: "18px" }} />}
              className="dropdown-btn"
            />
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
