"use client";

import React, { useEffect, useState } from "react";
import { Menu, Divider, Button } from "antd";
import type { MenuProps } from "antd";
import Sider from "antd/lib/layout/Sider";
import {
  Edit,
  Grid,
  ListCollapse,
  Route,
  UsersRound,
} from "lucide-react";
import { IdcardOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

const sidebarItems = [
  {
    name: "Заявки",
    icon: <Edit className="h-4 w-4" />,
    key: "applications",
    children: [
      { name: "Активные", key: "active" },
      { name: "Черновики", key: "drafts" },
      { name: "Опубликованные", key: "published" },
      { name: "Архив", key: "archive" },
      { name: "Шаблоны", key: "templates" },
      { name: "Удаленные", key: "deleted" },
    ],
  },
  {
    name: "Маршруты",
    icon: <Route className="h-4 w-4" />,
    key: "routes",
    children: [],
  },
  {
    name: "Профили должностей",
    icon: <UsersRound className="h-4 w-4" />,
    key: "job-profiles",
    children: [],
  },
  {
    name: "Управление организациями",
    icon: <UsersRound className="h-4 w-4" />,
    key: "users",
    children: [
      
      { name: "Структура", key: "structure" },
      { name: "Роли", key: "roles" },
      { name: "Пользователи", key: "users" },
      { name: "Option 2", key: "list" },
    ],
  },
  { type: "divider" },
  {
    name: "Справочник",
    icon: <Grid className="h-4 w-4" />,
    key: "reference",
    children: [],
  },
  {
    name: "Новый термин",
    icon: <IdcardOutlined />,
    key: "new-term",
    children: [],
  },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>(["applications"]);
  const [selectedKey, setSelectedKey] = useState<string>("applications/");

  useEffect(() => {
    const cleanedPath = pathname.replace(/^\/+/, "");
    setSelectedKey(cleanedPath);
    const mainKey = cleanedPath.split("/")[0];
    if (mainKey) setOpenKeys([mainKey]);
  }, [pathname]);

  const onOpenChange = (keys: string[]) => setOpenKeys(keys);
  const onClick: MenuProps["onClick"] = (e) => setSelectedKey(e.key);

  const items: MenuProps["items"] = sidebarItems.map((item, index) => {
    if (item.type === "divider") {
      return {
        type: "group",
        key: `divider-${index}`,
        label: <Divider style={{ margin: "8px 0" }} />,
      };
    }

    return {
      key: item.key!,
      icon: item.icon,
      label: item.name,
      children:
        item.children?.map((child) => ({
          key: `${item.key}/${child.key}`,
          label: <Link href={`/${item.key}/${child.key}`}>{child.name}</Link>,
        })) ?? [],
    };
  });

  return (
    <Sider
    width={260}
    collapsible
    collapsed={collapsed}
    trigger={null}
    style={{
      background: "#fff",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Top Logo / Header */}
    <div
      style={{
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
        fontSize: "1.125rem",
        opacity: collapsed ? 0 : 1,
        transition: "opacity 0.3s",
        whiteSpace: "nowrap",
      }}
    >
      Профессионалы
    </div>
  
    {/* Scrollable Menu Section */}
    <div style={{ flex: 1, overflowY: "auto",  height: "100vh", }}>
      <Menu
        mode="inline"
        openKeys={openKeys}
        selectedKeys={[selectedKey]}
        onOpenChange={onOpenChange}
        onClick={onClick}
        items={items}
        style={{ borderRight: 0 }}
      />
    </div>
  
    {/* Bottom Toggle Button */}
    <div
      style={{
        padding: "12px",
        borderTop: "1px solid #f0f0f0",
        textAlign: "center",
      }}
    >
      <Button
        type="text"
        onClick={() => setCollapsed(!collapsed)}
        icon={
          <ListCollapse
            className={`h-5 w-5 text-gray-700 transition-transform duration-200 ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        }
      />
    </div>
  </Sider>
  
  );
};

export default Sidebar;
