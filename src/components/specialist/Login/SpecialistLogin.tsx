import { useState } from "react";
import { useAuth } from "@/contexts";
import { specialistLogin } from "@/api";

import { InputField, Button } from "@/components";

import styles from "./SpecialistLogin.module.scss";

interface SpecialistLoginProps {
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
}

function SpecialistLogin({
  username,
  setUsername,
  password,
  setPassword,
}: SpecialistLoginProps) {
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { login } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
      setLoginError("");
    }
    if (name === "password") {
      setPassword(value);
      setPasswordError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoginError("");
    setPasswordError("");

    if (!username) {
      setLoginError("Username is required");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    try {
      const response = await specialistLogin(username, password);
      const { success, token, id, name, message } = response;
      if (success) {
        login(token, name, id);
        setUsername("");
        setPassword("");
      } else {
        setLoginError(message || "An error occurred. Please try again later.");
      }
    } catch (error) {
      console.log("Error:", error);
      setLoginError("Invalid credentials");
    }
  };

  return (
    <form className={styles.login} onSubmit={handleSubmit}>
      <InputField
        value={username}
        name="username"
        placeholder="Username"
        maxLength={20}
        onChange={handleInputChange}
      />
      {loginError && <div>{loginError}</div>}

      <InputField
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        maxLength={20}
        onChange={handleInputChange}
      />
      {passwordError && <div>{passwordError}</div>}
      <Button type="submit" label="Submit" />
    </form>
  );
}

export default SpecialistLogin;
