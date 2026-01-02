// src/layout/MainLayout.jsx
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "./MainLayout.module.scss";

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