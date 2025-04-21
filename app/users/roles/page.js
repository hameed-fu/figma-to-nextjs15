"use client";

import { Table, Button, Typography, Input } from "antd";
import { ChevronDown, Cog, Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Dropdown, Menu } from "antd";
import { MoreOutlined, SearchOutlined } from "@ant-design/icons";

import CreateUserRoleModal from "../../components/CreateUserRoleModal";
const mockUsers = [
  {
    key: 1,
    name: "Администратор ОК",
    participants: "3",
  },
  {
    key: 2,
    name: "Администратор ОК",
    participants: "12",
  },
  {
    key: 3,
    name: "Система",
    participants: "5",
  },
];

const columns = [
  {
    title: "Действия",
    key: "actions",
    render: (_, record) => {
      const menu = (
        <Menu>
          <Menu.Item
            key="edit"
            onClick={() => alert(`Редактировать: ${record.name}`)}
          >
            Редактировать
          </Menu.Item>
          <Menu.Item
            key="delete"
            onClick={() => alert(`Удалить: ${record.name}`)}
          >
            Удалить
          </Menu.Item>
        </Menu>
      );

      return (
        <Dropdown
          menu={{
            items: [
              {
                key: "edit",
                label: "Редактировать",
                onClick: () => alert(`Редактировать: ${record.name}`),
              },
              {
                key: "delete",
                label: "Удалить",
                onClick: () => alert(`Удалить: ${record.name}`),
              },
              {
                key:"title",
                label:"title",
              }
            ],
          }}
          trigger={["click"]}
        >
          <Button
            className="items-center px-0"
            shape="round"
            size="small"
            icon={<Cog className="h-4 w-4" />}
          >
            Действия <ChevronDown className="h-4 w-4" />
          </Button>
        </Dropdown>
      );
    },
  },
  {
    title: "Роль",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Участники",
    dataIndex: "participants",
    key: "participants",
  },
];

const { Title } = Typography;

export default function Roles() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center mb-2">
        <Title level={4} style={{ margin: 0 }}>
          Роли
        </Title>
        <Button
          shape="circle"
          size="large"
          className="ml-3"
          icon={<Plus />}
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <div
        style={{
          width: "100%",
        }}
      >
        <Input
          type="search"
          placeholder="Поиск"
          style={{
            width: "100%",
            maxWidth: "300px",
            borderRadius: "9999px",
            marginBottom: "0.5rem",
          }}
          prefix={<SearchOutlined style={{ color: "#9CA3AF" }} />} // text-gray-400
        />
      </div>

      <Table columns={columns} dataSource={mockUsers} pagination={false} />

      <CreateUserRoleModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
