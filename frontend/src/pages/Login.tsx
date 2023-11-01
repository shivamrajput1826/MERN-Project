import React from "react";
import Form from "../components/form/Form";
import { AuthService } from "../services/authService";

const Login = () => {
  const fields = [
    { label: "Email", name: "email", type: "email", required: true },
    { label: "Password", name: "password", type: "password", required: true },
  ];

  const onSubmit = (formData: Record<string, string>) => {
    const loginService = new AuthService();
    const { email, password } = formData;
    loginService
      .loginUser(email, password)
      .then((response) => console.log("response", response))
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <Form fields={fields} onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
