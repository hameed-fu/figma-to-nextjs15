"use client";

import "../../globals.css";
import { useState, useEffect } from "react";
import Sidebar from "./sidebar"; // Assuming Sidebar component exists
import Header from "./header"; // Assuming Header component exists
import { ConfigProvider } from "antd";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state
  const [isMobile, setIsMobile] = useState(false); // Mobile detection state

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Detect if screen width is less than 768px
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#389E0D" },
        components: {
          Menu: {
            colorPrimary: "#389E0D",
            itemSelectedColor: "#389E0D",
            itemSelectedBg: "#D9F7BE",
            itemHoverColor: "#52c41a",
          },
          Button: { colorPrimary: "#389E0D" },
          Input: { colorPrimary: "#389E0D" },
          Select: { colorPrimary: "#389E0D" },
        },
      }}
    >
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 z-40 h-full transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={isMobile ? { left: isSidebarOpen ? 0 : '-100%' } : {}}
        >
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </div>

        {/* Main Content */}
        <div
          className={`flex-1 min-h-screen transition-all duration-300 ease-in-out ${
            !isMobile && isSidebarOpen ? "ml-64" : ""
          }`}
        >
          <Header setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
          <main className="p-4 sm:p-6 md:p-10">{children}</main>
        </div>
      </div>
    </ConfigProvider>
  );
}
