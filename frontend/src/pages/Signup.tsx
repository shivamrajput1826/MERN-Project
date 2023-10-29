import Form from "../components/form/Form";
import { SignupService } from "../services/signupService";

const Signup = () => {
  const fields = [
    { label: "Username", name: "username", type: "text", required: true },
    { label: "Email", name: "email", type: "email", required: true },
    { label: "Password", name: "password", type: "password", required: true },
  ];

  const onSubmit = (formData: Record<string, string>) => {
    const signUpService = new SignupService();
    const { username, email, password } = formData;
    signUpService
      .signupUser(username, email, password)
      .then((response) => console.log("response", response))
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <Form fields={fields} onSubmit={onSubmit} />
    </div>
  );
};

export default Signup;
