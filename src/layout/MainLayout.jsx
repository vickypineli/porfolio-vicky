// src/layout/MainLayout.jsx
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "../styles/layout/MainLayout.scss";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}