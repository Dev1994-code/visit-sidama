import { Form, Input, Typography, Button, message, Checkbox } from "antd";
import axios from "axios";
import { useCookies } from "react-cookie";
import "../assets/custom.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [userIdCookies, setUserIdCookies] = useCookies(["userId_cookies"]);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  // const checkLogin = () => {
  //   message.success("Login Successful!");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3001/user/login`,
        formData
      );
      console.log("response", response.data);
      alert("user Logged In Successfully!");
      // setFormData({ password: "", email: "" });
      if (response.status === 200) {
        setCookies("access_token", response.data.token);
        setUserIdCookies("userId_cookies", response.data.user._id);
        // console.log(response.data);
        navigate("/");
      }
    } catch (ex) {
      console.log("ex:", ex);

      if (ex.response && ex.response.status === 400) {
        setErrors(ex.response.data);
      }
    }
  };
  const labelStyle = {
    fontSize: "1.2rem", // Adjust the font size as needed
  };

  return (
    <div className="loginBg ">
      <form className="loginForm" onSubmit={handleSubmit}>
        <Typography.Title className="flex justify-center items-center">
          Login
        </Typography.Title>
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
          <Input
            name="email"
            placeholder="Enter your Email"
            className="text-lg"
            value={formData.email}
            onChange={handleChange}
          />
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
            name="password"
            placeholder="Enter your password"
            className="text-lg"
            value={formData.password}
            onChange={handleChange}
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
      </form>
    </div>
  );
};
export default Login;
