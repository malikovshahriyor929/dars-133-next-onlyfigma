"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";
import { base_url } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export interface LoginType {
  lastName: string;
  email: string;
  password: string;
  FirstName: string;
  phoneNumber: string;
  id: string;
  confirm: string;
}

const Login = () => {
  const [formValue, setFormValue] = useState<{
    password: string;
    email: string;
  }>({ password: "", email: "" });
  const [check, setCheck] = useState([]);

  const router = useRouter();
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(base_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => setCheck(res));

    check.filter((value: LoginType) => {
      if (
        value.email == formValue.email &&
        value.password == formValue.password
      ) {
        router.push("/dashboard");
        toast.success("you successfuly sign in ");
      } else {
        router.push("/register");
        toast.error("you're not successfuly sign in ");
      }
    });
    setFormValue({ password: "", email: "" });
  };
  return (
    <div className="flex h-screen  ">
      <div className="bg-[#18181B] flex-1/2 flex flex-col gap-5 h-full p-5 justify-end text-white">
        <p className="font-medium text-[18px]   ">
          This Library has saved me countless hours of work and helped me
          deliver stunning designs to my clients faster than ever before.”
        </p>
        <p className="font-medium ">Sofia Davis</p>
      </div>
      <div className="bg-white flex-1/2 relative flex items-center justify-center flex-col  ">
        <Link href={"/register"}>
          <p className="absolute top-5 right-8  ">Register</p>
        </Link>
        <div className=" flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-[24px] font-semibold text-[#09090B] ">
              Sign in an account
            </h2>
            <p className="text-[#71717A]">
              Enter your email below your account
            </p>
          </div>
          <form onSubmit={submit} className="flex flex-col gap-3 ">
            <Input
              value={formValue.email}
              onChange={(e: any) =>
                setFormValue({ ...formValue, email: e.target.value })
              }
              type="text"
              placeholder="name@example.com"
            />
            <Input
              value={formValue.password}
              onChange={(e: any) =>
                setFormValue({ ...formValue, password: e.target.value })
              }
              type="password"
              placeholder="password"
            />
            <Button type="submit" className="w-full">
              sign in account
            </Button>
          </form>
          <div className="flex items-center gap-2 ">
            <div className="w-full h-0.5 bg-[#E4E4E7] "></div>
            <p className="w-full text-nowrap text-xs text-[#71717A]">
              OR CONTINUE WITH
            </p>
            <div className="w-full h-0.5 bg-[#E4E4E7] "></div>
          </div>
          <Button className="" variant="outline">
            <Github />
            Github
          </Button>
          <p className="max-w-[300px] text-center  text-[#71717A] ">
            By Clicking continue, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
