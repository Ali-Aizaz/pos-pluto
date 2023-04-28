import { InputFieldComponent, ButtonComponent } from "@/components";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleUserName = useCallback((event) => {
    setUserName(event.target.value);
  }, []);

  const handlePassword = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const handleRePassword = useCallback((event) => {
    setRePassword(event.target.value);
  }, []);

  const handleEmail = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const handleName = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signup");
    router.push("/home");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center space-y-6"
    >
      <h1 className="text-4xl font-semibold text-white ">LOGIN</h1>

      <InputFieldComponent
        src={"/username.png"}
        placeholder="username"
        value={username}
        onEdit={handleUserName}
        extraCss="w-[400px]"
      />
      <InputFieldComponent
        src={"/key.png"}
        placeholder="Password"
        value={password}
        onEdit={handlePassword}
        extraCss="w-[400px]"
      />
      <InputFieldComponent
        src={"/key.png"}
        placeholder="Re-enter Password"
        value={rePassword}
        onEdit={handleRePassword}
        extraCss="w-[400px]"
      />
      <InputFieldComponent
        src={"/mail.png"}
        placeholder="Email"
        value={email}
        onEdit={handleEmail}
        extraCss="w-[400px]"
      />
      <InputFieldComponent
        src={"/person.png"}
        placeholder="First Name"
        value={name}
        onEdit={handleName}
        extraCss="w-[400px]"
      />
      <ButtonComponent
        type={"submit"}
        label={"SIGN UP"}
        extraCss={"w-[400px]"}
      />
    </form>
  );
};

export default Register;
