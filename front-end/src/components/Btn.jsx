import { Button, Flex } from "antd";

const Btn = () => {
  return (
    <Flex gap="small" align="flex-start" vertical>
      <Flex gap="large">
        <Button type="primary" className=" bg-lime-400 hover:bg-white">
          Login
        </Button>
        <Button type="primary" className="ml-4 bg-lime-400 hover:bg-white">
          Sign up
        </Button>
      </Flex>
    </Flex>
  );
};
export default Btn;
