"use client";

import React, { useState } from "react";
import {
  Row,
  Col,
  Select,
  List,
  Typography,
  Card,
  Divider,
  Space,
  Input,
  Button,
  Form,
  Modal,
  Dropdown,
} from "antd";
import {
  HeartOutlined,
  EyeOutlined,
  SettingOutlined,
  SearchOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { TouchpadOff } from "lucide-react";

const { Title, Text } = Typography;
const { TextArea } = Input;

const categoryItems = [
  { key: "all", label: "Все" },
  { key: "it", label: "IT" },
];

const cityItems = [
  { key: "minsk", label: "Минск" },
  { key: "brest", label: "Брест" },
];
const jobs = [
  {
    id: 1,
    title: "Fullstack-разработчик",
    location: "Минск",
    salary: "1000 - 3000 BYN",
    experience: "1-3 года",
    description: "Разрабатывать и поддерживать fullstack-решения...",
  },
  {
    id: 2,
    title: "TeamLead Front-end Developer",
    location: "Минск",
    salary: "3000 - 5000 BYN",
    experience: "3+ года",
    description: "Руководство командой frontend-разработчиков...",
  },

  {
    id: 3,
    title: "TeamLead Front-end Developer",
    location: "Минск",
    salary: "3000 - 5000 BYN",
    experience: "3+ года",
    description: "Руководство командой frontend-разработчиков...",
  },
  {
    id: 4,
    title: "TeamLead Front-end Developer",
    location: "Минск",
    salary: "3000 - 5000 BYN",
    experience: "3+ года",
    description: "Руководство командой frontend-разработчиков...",
  },

  {
    id: 5,
    title: "TeamLead Front-end Developer",
    location: "Минск",
    salary: "3000 - 5000 BYN",
    experience: "3+ года",
    description: "Руководство командой frontend-разработчиков...",
  },

  {
    id: 6,
    title: "TeamLead Front-end Developer",
    location: "Минск",
    salary: "3000 - 5000 BYN",
    experience: "3+ года",
    description: "Руководство командой frontend-разработчиков...",
  },
  {
    id: 7,
    title: "TeamLead Front-end Developer",
    location: "Минск",
    salary: "3000 - 5000 BYN",
    experience: "3+ года",
    description: "Руководство командой frontend-разработчиков...",
  },
  {
    id: 8,
    title: "TeamLead Front-end Developer",
    location: "Минск",
    salary: "3000 - 5000 BYN",
    experience: "3+ года",
    description: "Руководство командой frontend-разработчиков...",
  },
  {
    id: 9,
    title: "TeamLead Front-end Developer",
    location: "Минск",
    salary: "3000 - 5000 BYN",
    experience: "3+ года",
    description: "Руководство командой frontend-разработчиков...",
  },
  {
    id: 10,
    title: "TeamLead Front-end Developer",
    location: "Минск",
    salary: "3000 - 5000 BYN",
    experience: "3+ года",
    description: "Руководство командой frontend-разработчиков...",
  },
];

const JobBoard = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comment, setComment] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log("Submitted comment:", comment);
    setIsModalOpen(false);
    setComment("");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Row style={{ marginBottom: 24 }}>
        <Col span={24}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            {/* Search bar (70%) */}
            <div style={{ flex: "0 0 80%" }}>
              <Input
                placeholder="Поиск по роли"
                allowClear
                style={{
                  width: "100%",
                  borderRadius: 20,
                }}
              />
            </div>

            {/* Dropdown 1 */}
            <Space size="large">
              {/* Category Dropdown */}
              <Dropdown menu={{ items: categoryItems }} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="text-green-600">
                    Category
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>

              {/* City Dropdown */}
              <Dropdown menu={{ items: cityItems }} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="text-green-600">
                    City
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Space>
            {/* Tools icon */}
            <Button type="text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: 24, height: 24 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </Button>
          </div>
        </Col>
      </Row>
      <Card>
        <Row gutter={16}>
          {/* Section 1: Job List */}
          <Col span={6}>
            {/* Job List */}
            <div
              style={{
                maxHeight: "800px",
                overflowY: "auto",
                paddingRight: "8px",
              }}
            >
              <List
                dataSource={jobs}
                renderItem={(job) => {
                  const isSelected = selectedJob?.id === job.id;

                  return (
                    <div
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      style={{
                        padding: "16px",
                        marginBottom: 8,
                        cursor: "pointer",
                        borderBottom: "1px solid #f0f0f0",
                        backgroundColor: isSelected ? "#f5f5f5" : "#fff",
                        transition: "background-color 0.3s",
                        borderRadius: "8px",
                      }}
                      onMouseEnter={(e) =>
                        !isSelected &&
                        (e.currentTarget.style.backgroundColor = "#fafafa")
                      }
                      onMouseLeave={(e) =>
                        !isSelected &&
                        (e.currentTarget.style.backgroundColor = "#fff")
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                        }}
                      >
                        <div>
                          <Text strong>{job.title}</Text>
                          <br />
                          <Text type="secondary">{job.location}</Text>
                          <br />
                          <Text>{job.salary}</Text>
                        </div>
                        <Space>
                          <Button shape="circle" type="text">
                            <HeartOutlined />
                          </Button>

                          <Button shape="circle" type="text">
                            <EyeOutlined />
                          </Button>
                        </Space>
                      </div>
                    </div>
                  );
                }}
              />
            </div>
          </Col>

          {/* Section 2: Job Details */}
          <Col span={12}>
            {selectedJob && (
              <Card className="rounded-full ">
                <div className="flex items-center justify-between mb-4">
                  {/* Job Title */}
                  <div className="text-2xl font-semibold">
                    {selectedJob.title}
                  </div>

                  <>
                    <div className="flex items-center gap-2">
                      <Button
                        shape="circle"
                        type="text"
                        icon={<HeartOutlined />}
                      />
                      <Button
                        className="border-none bg-white rounded-full"
                        type="text"
                        onClick={showModal}
                      >
                        Option 1
                      </Button>
                      <Button className="border bg-white rounded-full">
                        Option 2
                      </Button>
                    </div>
                    <Modal
                      title="Add a Comment"
                      open={isModalOpen}
                      footer={null}
                      onCancel={handleCancel}
                    >
                      <p className="text-xl font-semibold mb-2">Comment</p>

                      <TextArea
                        rows={4}
                        placeholder="Write your comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />

                      <Divider />

                      <div className="flex justify-end">
                        <Button
                          size="large"
                          className="rounded-full px-6 py-1 border"
                          onClick={handleOk}
                        >
                          Submit
                        </Button>
                      </div>
                    </Modal>
                  </>
                </div>
                <Text>{selectedJob.location}</Text> ·{" "}
                <Text strong>{selectedJob.salary}</Text>
                <Divider />
                <Title level={5}>Обязанности</Title>
                <Text>• {selectedJob.description}</Text>
                <Divider />
                <Title level={5}>Требования</Title>
                <Text>• Уверенное владение Java, JavaScript</Text>
                <br />
                <Text>• Опыт с Spring Boot, Hibernate, Vue.js</Text>
                <Divider />
                <Button type="primary">Откликнуться</Button>
              </Card>
            )}
          </Col>

          {/* Section 3: Filters (from screenshot) */}
          <Col span={6}>
            <div className="rounded-[18px] p-0 border bg-gray-200 border-gray-300 mb-6">
              <div className="text-[#0D0E0C73]  px-4 text-[16px] py-2 font-semibold">
                Регион
              </div>
              <Card className="rounded-[18px] ">
                <Form.Item label="Уровень дохода">
                  <Space.Compact style={{ width: "100%" }}>
                    <Input style={{ width: "40%" }} placeholder="от" />
                    <Input style={{ width: "40%" }} placeholder="до" />
                    <Select defaultValue="BYN" style={{ width: "20%" }}>
                      <Select.Option value="BYN">BYN</Select.Option>
                      <Select.Option value="USD">USD</Select.Option>
                    </Select>
                  </Space.Compact>
                </Form.Item>

                <Space direction="vertical" style={{ width: "100%" }}>
                  <Title level={5}>Регион</Title>
                  <Input placeholder="Поиск региона" />

                  <Title level={5}>Вакансии рядом</Title>
                  <Select style={{ width: "100%" }} defaultValue="3">
                    <Select.Option value="<1">{"< 1 км"}</Select.Option>
                    <Select.Option value="3">3 км</Select.Option>
                    <Select.Option value="5">5 км</Select.Option>
                    <Select.Option value=">5">{"> 5 км"}</Select.Option>
                  </Select>

                  <Title level={5}>Образование</Title>
                  <Select style={{ width: "100%" }} defaultValue="any">
                    <Select.Option value="any">Не имеет значения</Select.Option>
                    <Select.Option value="higher">Высшее</Select.Option>
                  </Select>

                  <Title level={5}>Опыт</Title>
                  <Select style={{ width: "100%" }} defaultValue="1-3">
                    <Select.Option value="0">Без опыта</Select.Option>
                    <Select.Option value="1-3">1-3 года</Select.Option>
                    <Select.Option value="3+">3+ лет</Select.Option>
                  </Select>

                  <Button type="text">
                    <span className="text-green-600">Сбросить всё</span>
                  </Button>
                </Space>
              </Card>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default JobBoard;
