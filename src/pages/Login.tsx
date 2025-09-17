import { Link } from "react-router";
import Logo from "@/assets/icons/Logo";
import LoginForm from "@/components/modules/authentication/LoginForm";
import Lottie from 'lottie-react';
import loginlotti  from "../assets/icons/lott-login.json";



export default function Login() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center w-1/2 ">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        
        <Lottie animationData={loginlotti}></Lottie>
      </div>
    </div>
  );
}