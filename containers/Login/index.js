import Link from "next/link";
import { InputFieldComponent, ButtonComponent } from "@/components";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = useCallback((event) => {
    setUserName(event.target.value);
  }, []);

  const handlePassword = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login");
    router.push("/home");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center space-y-6"
    >
      <h1 className="text-4xl font-semibold text-white ">LOGIN</h1>

      <InputFieldComponent
        src={"/username.png"}
        placeholder="Username"
        value={userName}
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
      <Link href={"forget-password"}>
        <h1 className="tracking-wide font-medium text-end w-[400px] -translate-y-4">
          Forget Password?
        </h1>
      </Link>
      <ButtonComponent type={"submit"} label={"Login"} extraCss={"w-[400px]"} />
    </form>
  );
};

export default Login;
