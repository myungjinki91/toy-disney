import { Outlet } from "react-router";
import Layout from "./Layout";

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
