import React from "react";
import { Header } from "antd/lib/layout/layout";
import { Button, Badge, Avatar, Dropdown, Menu, Divider } from "antd";
import { BellOutlined, UserOutlined, DownOutlined, DesktopOutlined } from "@ant-design/icons";

const AppHeader: React.FC = () => {
  const menuItems = [
    { key: "1", label: "Profile" },
    { key: "2", label: "Settings" },
    { key: "3", label: "Log Out" },
  ];

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        background: "#f5f5f5",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Badge count={11}>
          <Button
            type="text"
            icon={<BellOutlined style={{ fontSize: "20px" }} />}
            className="border border-gray-600 rounded-full bg-white"
          />
        </Badge>
        <Divider type="vertical" />
        <div style={{ display: "flex", alignItems: "center", background: "#fff", borderRadius: "999px", padding: "4px 8px" }}>
          <Avatar
            style={{ backgroundColor: "#f0f0f0", color: "#666" }}
            icon={<UserOutlined />}
            size="large"
          >
            AK
          </Avatar>
          <Dropdown menu={{ items: menuItems }} placement="bottomRight" trigger={['click']}>
            <Button type="text" icon={<DownOutlined style={{ fontSize: "18px" }} />} className="border-none" />
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
