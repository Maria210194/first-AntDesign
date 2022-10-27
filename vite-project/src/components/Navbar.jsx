import { Layout, Menu, Button, Space } from "antd";
const { Header } = Layout;
import { Link } from "react-router-dom";

import "../assets/style/style.scss";
import { navLinks } from "../assets/data";

const Navbar = () => (
  <Layout className="layout">
    <Header
      className="navbar"
      style={{ display: "flex", borderBottom: "1px solid #f0f0f0" }}
      align="middle"
    >
      <Menu
        theme="light"
        mode="horizontal"
        style={{ width: "100vw", border: "none" }}
        defaultSelectedKeys={["1"]}
        items={navLinks.map((link, index) => {
          const key = index + 1;
          return {
            key,
            label: <Link to={link.href}>{link.title}</Link>,
          };
        })}
      />
      <Space>
        <Button type="primary" shape="round">
          Login
        </Button>
        <Button type="primary" shape="round">
          Register
        </Button>
      </Space>
    </Header>
  </Layout>
);

export default Navbar;
