import { Layout, Menu, theme } from "antd";
import AppHeader from "../components/AppHeader";
import "../assets/home.css";
import "antd/dist/antd";
import Landing from "./Landing";

const { Header, Content } = Layout;

const Home = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content className="mt-10">
        <Landing />
      </Content>
    </Layout>
  );
};
export default Home;
