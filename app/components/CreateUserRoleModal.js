"use client";

import { Modal, Input, Checkbox, Row, Col, Switch, Card } from "antd";
import { useState } from "react";

const parentPermissions = [
  "Управление функциями",
  "Управление идентификацией",
  "Настройка управления",
  "SaaS",
  "Чат",
  "Аудит регистрации",
  "OpenID",
  "Учетная запись",
  "Управление языком",
  "Управление текстовыми шаблонами",
  "Файлы",
];

const childPermissions = [
  "Управление деревом организации",
  "Создавать",
  "Редактировать",
  "Удалить",
  "Изменить права",
  "Посмотреть историю изменений",
  "Управление пользователями",
  "Управление ролями",
  "Персонификация",
  "Импорт",
  "Экспорт",
  "Посмотреть подробности",
  "Управление организационными единицами",
  "Настройка управления",
  "Журналы безопасности",
  "Сессии",
];

const allPermissions = [...parentPermissions, ...childPermissions];

export default function CreateUserRoleModal({ open, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [grantAll, setGrantAll] = useState(false);

  const handleToggleAll = (checked) => {
    setGrantAll(checked);
    setSelectedPermissions(checked ? allPermissions : []);
  };

  const handlePermissionsChange = (values) => {
    setSelectedPermissions(values);
    setGrantAll(values.length === allPermissions.length);
  };

  const filteredParent = parentPermissions.filter((perm) =>
    perm.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredChild = childPermissions.filter((perm) =>
    perm.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal
      title="Разрешения - Васильева Анна Андреевна"
      open={open}
      onCancel={onClose}
      onOk={() => {
        console.log("Selected permissions:", selectedPermissions);
        onClose();
      }}
      okText="Сохранить"
      cancelText="Отмена"
      width={900}
    >
      {/* Search + Select All */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <Input
          placeholder="Поиск"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: 280, borderRadius: "9999px" }}
        />
        <div>
          <span style={{ marginRight: 8 }}>Предоставить все права</span>
          <Switch checked={grantAll} onChange={handleToggleAll} />
        </div>
      </div>

      {/* Permissions */}
      <Checkbox.Group
        value={selectedPermissions}
        onChange={handlePermissionsChange}
        style={{ width: "100%" }}
      >
        <Row gutter={16}>
          {/* Left: Parent Permissions */}
          <Col span={12}>
            <Card title="Права">
              <div style={{ display: "flex", flexDirection: "column" }}>
                {filteredParent.map((perm) => (
                  <Checkbox key={perm} value={perm} style={{ marginBottom: 8 }}>
                    {perm}
                  </Checkbox>
                ))}
              </div>
            </Card>
          </Col>

          {/* Right: Child Permissions One Column */}
          <Col span={12}>
            <Card title="Дополнительные права">
              <div style={{ display: "flex", flexDirection: "column" }}>
                {filteredChild.map((perm) => (
                  <Checkbox key={perm} value={perm} style={{ marginBottom: 8 }}>
                    {perm}
                  </Checkbox>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </Checkbox.Group>
    </Modal>
  );
}
