"use client";
import '../../globals.css';
import { useState } from "react";
import Sidebar from "./sidebar";
import Header  from "./header";
import { ConfigProvider } from "antd";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#389E0D",
        },
        components: {
          Menu: {
            colorPrimary: "#389E0D",         // Active menu color
            itemSelectedColor: "#389E0D",    // Selected text color
            itemSelectedBg: "#D9F7BE",       // Light green background
            itemHoverColor: "#52c41a",       // Hover text color
          },
          Button: {
            colorPrimary: "#389E0D",
          },
          Input: {
            colorPrimary: "#389E0D",
          },
          Select: {
            colorPrimary: "#389E0D",
          },
        },
      }}
    >
      <div className="min-h-screen bg-gray-100">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div
          className={`transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          <Header   />
          <main className="p-10">{children}</main>
        </div>
      </div>
    </ConfigProvider>
  );
}
