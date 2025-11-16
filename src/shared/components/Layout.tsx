"use client";

// React Imports
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Next.js Imports
import { usePathname } from "next/navigation";

// Redux Imports
import {
  setCurrentPage,
  setIsMobileMenuOpen,
} from "../common/lib/redux/slices/common";
import { AppDispatch } from "../common/lib/redux/store";

// Component Imports
import DesktopSidebar from "./DesktopSidebar";
import Header from "./Header";
import MobileDrawer from "./MobileDrawer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // Hooks
  const pathName = usePathname();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (pathName === null) return;

    if (pathName === "/" || pathName === "/test-case") {
      dispatch(setCurrentPage("test-case"));
    } else {
      const route = pathName.replace("/", "") as CommonTypes.Routes;
      dispatch(setCurrentPage(route));
    }
  }, [pathName]);

  useEffect(() => {
    const handleResize = () => {
      const isMobileMenuOpen = window.innerWidth < 1024;
      dispatch(setIsMobileMenuOpen(isMobileMenuOpen));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-100">
        <Header />
        <MobileDrawer />
        <DesktopSidebar />
        <main className="pt-20 lg:ml-64 p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
