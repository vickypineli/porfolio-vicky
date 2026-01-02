//src/App.jsx
import AppRoutes from "./routes/AppRoutes";
import Header from "./layout/Header/Header";
import "./styles/main.scss";


export default function App() {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

