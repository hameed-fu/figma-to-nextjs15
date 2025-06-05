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
      <div className="mb-2 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 w-full">
          {/* Search input */}
          <div className="w-full sm:w-4/5">
            <Input
              type="search"
              placeholder="Поиск по роли"
              className="w-full max-w-[340px] rounded-full h-10 px-4 border border-gray-300 focus:outline-none focus:ring-2 "
              prefix={<SearchOutlined style={{ color: "#9CA3AF" }} />} // text-gray-400
            />
          </div>

          {/* Dropdowns and Button */}
          <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
            {/* Category Dropdown */}
            <Dropdown menu={{ items: categoryItems }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <span className="text-green-600 inline-flex items-center gap-1">
                  Category <DownOutlined />
                </span>
              </a>
            </Dropdown>

            {/* City Dropdown */}
            <Dropdown menu={{ items: cityItems }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <span className="text-green-600 inline-flex items-center gap-1">
                  City <DownOutlined />
                </span>
              </a>
            </Dropdown>

            {/* Tool Icon Button */}
            <button className="border p-2 rounded-full hover:bg-gray-100 transition">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label=""
                className="icon-md"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5 5C13.3954 5 12.5 5.89543 12.5 7C12.5 8.10457 13.3954 9 14.5 9C15.6046 9 16.5 8.10457 16.5 7C16.5 5.89543 15.6046 5 14.5 5ZM10.626 6C11.0701 4.27477 12.6362 3 14.5 3C16.3638 3 17.9299 4.27477 18.374 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H18.374C17.9299 9.72523 16.3638 11 14.5 11C12.6362 11 11.0701 9.72523 10.626 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H10.626ZM9.5 15C8.39543 15 7.5 15.8954 7.5 17C7.5 18.1046 8.39543 19 9.5 19C10.6046 19 11.5 18.1046 11.5 17C11.5 15.8954 10.6046 15 9.5 15ZM5.62602 16C6.07006 14.2748 7.63616 13 9.5 13C11.3638 13 12.9299 14.2748 13.374 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H13.374C12.9299 19.7252 11.3638 21 9.5 21C7.63616 21 6.07006 19.7252 5.62602 18H4C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16H5.62602Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

    <Card>
  <Row gutter={[16, 16]}>
    {/* Section 1: Job List */}
    <Col xs={24} md={6}>
      <div
        className="max-h-[600px] overflow-y-auto pr-2"
      >
        <List
          dataSource={jobs}
          renderItem={(job) => {
            const isSelected = selectedJob?.id === job.id;
            return (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className={`p-4 mb-2 cursor-pointer   transition-all rounded-lg ${
                  isSelected ? "bg-gray-100" : "bg-white"
                }`}

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
                <div className="flex justify-between items-start">
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
    <Col xs={24} md={12}>
      {selectedJob && (
        <Card className="rounded-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-2">
            <div className="text-2xl font-semibold">
              {selectedJob.title}
            </div>
            <div className="flex items-center gap-2">
              <Button shape="circle" type="text" icon={<HeartOutlined />} />
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

    {/* Section 3: Filters */}
    <Col xs={24} md={6}>
      <div className="rounded-2xl border bg-gray-200 border-gray-300 mb-6">
        <div className="text-[#0D0E0C73] px-4 text-base py-2 font-semibold">
          Регион
        </div>
        <Card className="rounded-2xl">
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
