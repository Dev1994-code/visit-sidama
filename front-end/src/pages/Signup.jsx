import { Form, Input, Typography, Button, message, Checkbox } from "antd";
import "../assets/custom.css";

const Signup = () => {
  const checkSignup = () => {
    message.success("SignUp Successful!");
  };
  const labelStyle = {
    fontSize: "1.2rem", // Adjust the font size as needed
  };
  return (
    <div className="loginBg ">
      <Form className="loginForm" onFinish={checkSignup}>
        <Typography.Title className="flex justify-center items-center">
          SignUp
        </Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              message: "please enter valid email",
            },
          ]}
          label={<span style={labelStyle}>Username</span>}
          name={"username"}
          className="text-lg"
        >
          <Input placeholder="Enter your email" className="text-lg" />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              type: "email",
              message: "please enter valid email",
            },
          ]}
          label={<span style={labelStyle}>Email</span>}
          name={"email"}
          className="text-lg"
        >
          <Input placeholder="Enter your email" className="text-lg" />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "please enter your password",
            },
          ]}
          label={<span style={labelStyle}>Password</span>}
          name={"password"}
          className="text-lg"
        >
          <Input.Password
            placeholder="Enter your password"
            className="text-lg"
          />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox className="text-xl flex items-center">Remember me</Checkbox>
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          className="text-lg flex items-center justify-center"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Signup;
