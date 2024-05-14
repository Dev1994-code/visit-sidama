import { Button, Flex } from "antd";
import { Link as RouterLink } from "react-router-dom";

const Btn = () => {
  return (
    <Flex gap="small" align="flex-start" vertical>
      <Flex gap="large">
        <RouterLink to="/login">
          <Button type="primary">Login</Button>
        </RouterLink>
        <RouterLink to="/signup">
          <Button type="primary" className="ml-4">
            Sign up
          </Button>
        </RouterLink>
      </Flex>
    </Flex>
  );
};
export default Btn;
