"use client";

import React, { useRef, useState } from "react";
import {
  Row,
  Col,
  Input,
  DatePicker,
  Button,
  Radio,
  Tabs,
  Typography,
  Divider,
  Form,
  Select,
  Card,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import dayjs from "dayjs";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const PersonalAccount = () => {
  const [birthDate, setBirthDate] = useState(dayjs("1990-01-01"));
  const [gender, setGender] = useState("Мужской");
  const [citizenship, setCitizenship] = useState("Беларусь");

  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold">Личный кабинет</h1>
      <div style={{ padding: 24, background: "#fff", borderRadius: 8 }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Персональная и контактная информация" key="1">
            {/* Tab 1 Content */}
            <Row gutter={[16, 16]} align="middle" style={{ marginTop: 16 }}>
              <Col span={4} style={{ textAlign: "center" }}>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    backgroundColor: "#f0f0f0",
                    margin: "0 auto",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  {preview ? (
                    <img
                      src={preview}
                      alt="avatar"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : null}
                  <EditOutlined
                    style={{
                      position: "absolute",
                      bottom: 8,
                      right: 8,
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      padding: 4,
                      fontSize: 16,
                    }}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                </div>
                <div style={{ marginTop: 8 }} type="secondary">
                  Табельный: 688890
                </div>
              </Col>
              <Col span={20}>
                <Row gutter={[16, 16]}>
                  {/* Personal Info Fields */}
                  <Col span={8}>
                    <Input placeholder="Фамилия" value="Иванов" />
                  </Col>
                  <Col span={8}>
                    <Input placeholder="Имя" value="Иван" />
                  </Col>
                  <Col span={8}>
                    <Input placeholder="Отчество" value="Иванович" />
                  </Col>
                  <Col span={8}>
                    <DatePicker
                      placeholder="Дата рождения"
                      value={birthDate}
                      onChange={(date) => setBirthDate(date)}
                    />
                  </Col>
                  <Col span={8}>
                    <Input
                      placeholder="Идентификационный номер"
                      value="3081190E004PB6"
                    />
                  </Col>
                  <Col span={8}>
                    <Radio.Group
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <Radio.Button value="Мужской">Мужской</Radio.Button>
                      <Radio.Button value="Женский">Женский</Radio.Button>
                    </Radio.Group>
                  </Col>
                  <Col span={8}>
                    <Input placeholder="Место проживания" value="Гомель" />
                  </Col>
                  <Col span={8}>
                    <Radio.Group
                      value={citizenship}
                      onChange={(e) => setCitizenship(e.target.value)}
                    >
                      <Radio.Button value="Россия">Россия</Radio.Button>
                      <Radio.Button value="Беларусь">Беларусь</Radio.Button>
                    </Radio.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
          </TabPane>

          <TabPane tab="Образование" key="2">
            {/* Tab 2 Content */}
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Input placeholder="Учебное заведение" />
              </Col>
              <Col span={8}>
                <Input placeholder="Специальность" />
              </Col>
              <Col span={8}>
                <DatePicker placeholder="Дата окончания" />
              </Col>
            </Row>
          </TabPane>

          <TabPane tab="Опыт работы" key="3">
            {/* Tab 3 Content */}
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Input placeholder="Компания" />
              </Col>
              <Col span={8}>
                <Input placeholder="Должность" />
              </Col>
              <Col span={8}>
                <DatePicker placeholder="Период работы" />
              </Col>
            </Row>
          </TabPane>

          <TabPane tab="Навыки" key="4">
            {/* Tab 4 Content */}
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item label="Навыки">
                  <Select mode="multiple" placeholder="Выберите навыки">
                    <Select.Option value="communication">Коммуникация</Select.Option>
                    <Select.Option value="leadership">Лидерство</Select.Option>
                    <Select.Option value="teamwork">Работа в команде</Select.Option>
                    <Select.Option value="problemSolving">Решение проблем</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </TabPane>

          <TabPane tab="Дополнительно" key="5">
            {/* Tab 5 Content */}
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Input placeholder="Дополнительная информация" />
              </Col>
            </Row>
          </TabPane>

          <TabPane tab="Карьера" key="6">
            {/* Tab 6 Content */}
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Input placeholder="Цели карьеры" />
              </Col>
            </Row>
          </TabPane>
        </Tabs>

        <Divider />

        <div className="rounded-[18px] p-0 border border-gray-300 bg-[#F5F5F5] mb-6">
          <div className="text-[#0D0E0C73] px-4 text-[16px] py-2 font-semibold">
            Настройки пароля
          </div>
          <Card className="rounded-[18px]">
            <div>
              <Button className="text-black" shape="round">
                Установить пароль
              </Button>
            </div>
          </Card>
        </div>

        <Divider />

        <div type="secondary">История</div>
      </div>
    </>
  );
};

export default PersonalAccount;
