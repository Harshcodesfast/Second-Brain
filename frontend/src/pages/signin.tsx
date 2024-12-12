import { useRef } from "react";
import { Button } from "../components/button";
import { InputBox } from "../components/inputBox";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const SignIn = function () {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  const signin = async function () {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
      username,
      password,
    });
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  };
  return (
    <div className="h-screen w-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white rounded-xl border min-w-48  p-8">
        <InputBox reference={usernameRef} placeholder="Username" />
        <InputBox reference={passwordRef} placeholder="Password" />
        <div className="flex justify-center pt-4">
          <Button
            onClick={signin}
            variant="primary"
            text="Signin"
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
};
