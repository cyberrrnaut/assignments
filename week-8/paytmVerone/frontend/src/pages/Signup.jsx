import { Header } from "../components/Header";
import { SubHeader } from "../components/SubHeader";
import { InputBox } from "../components/InputBox";
import { BlackButton } from "../components/BlackButton";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/user/signup", {
        firstName,
        lastName,
        username: email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      console.log(response);
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle error appropriately here, e.g., show an error message
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 p-2 h-max px-4">
          <div className="text-center">
            <Header label={"Signup"} />
            <SubHeader label={"Enter your information to create an account"} />
          </div>

          <InputBox onChange={(e) => setFirstName(e.target.value)} label={"First Name"} type={"text"} placeholder={"Soumyendu"} />
          <InputBox onChange={(e) => setLastName(e.target.value)} label={"Last Name"} type={"text"} placeholder={"Das"} />
          <InputBox onChange={(e) => setEmail(e.target.value)} label={"Email"} type={"email"} placeholder={"cyberrrnaut@gmail.com"} />
          <InputBox onChange={(e) => setPassword(e.target.value)} label={"Password"} type={"password"} placeholder={"123456"} />

          <BlackButton label={"Signup"} onClick={handleSignup} />

          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>
      </div>
    </div>
  );
};
