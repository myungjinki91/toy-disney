import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <h1>App</h1>
      <Outlet />
      <Footer />
    </>
  );
}
