"use client";

import React, { useState } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { ChevronLeft, ChevronRight, Edit, Grid, ListCollapse, Route, UsersRound } from "lucide-react";
import { IdcardOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Sider } = Layout;

const rawItems = [
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
  const [collapsed, setCollapsed] = useState(false);

  const items: MenuProps["items"] = rawItems.map((item) => ({
    key: item.key,
    icon: item.icon,
    label: item.name,
    children: item.children?.map((child) => ({
      key: `${item.key}/${child.key}`,
      label: <Link href={`/${item.key}/${child.key}`}>{child.name}</Link>,
    })),
  }));

  return (
    <Sider
    collapsible
    collapsed={collapsed}
    onCollapse={(value) => setCollapsed(value)}
    width={240}
    theme="light"
    style={{
      overflow: "auto",
      height: "100vh",
      position: "sticky",
      top: 0,
      left: 0,
      background: "#fff",
      boxShadow: "2px 0 6px rgba(0, 0, 0, 0.05)",
      zIndex: 10,
    }}
    trigger={null} // Disable default trigger
  >
    <div
      className="sidebar-header-logo"
      style={{
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: collapsed ? "center" : "start",
        paddingLeft: collapsed ? 0 : 20,
        fontWeight: "bold",
        fontSize: 18,
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      {collapsed ? "ПР" : "Профессионалы"}
    </div>
  
    <Menu
      theme="light"
      defaultSelectedKeys={["applications/active"]}
      mode="inline"
      items={items}
    />
  
  <div
  onClick={() => setCollapsed(!collapsed)}
  style={{
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: "#fff",
    borderTop: "1px solid #f0f0f0",
    cursor: "pointer",
    paddingLeft:'4px'
  }}
>

  
  {collapsed ? (
    <ListCollapse className="w-5 h-5 text-black" />
  ) : (
    <ListCollapse className="w-5 h-5 text-black rotate-180" />
  )}
</div>

  </Sider>
  
  );
};

export default Sidebar;
