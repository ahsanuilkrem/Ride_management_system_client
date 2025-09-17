

import Logo from "@/assets/icons/Logo";
import RegisterForm from "@/components/modules/authentication/RegisterForm";
import Lottie from "lottie-react";
import { Link } from "lucide-react";
import registerlotti from "../assets/icons/lottie-register.json"



export default function Register() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block w-full">
        <Lottie animationData={registerlotti}></Lottie>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
             <Logo /> 
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}