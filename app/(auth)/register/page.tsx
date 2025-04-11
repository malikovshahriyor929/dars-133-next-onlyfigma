"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";
import { useRouter } from "next/navigation";
import { base_url } from "@/lib/utils";

const Register = () => {
  const router = useRouter();
  const [formValue, setFormValue] = useState<{
    password: string;
    email: string;
    lastName: string;
    FirstName: string;
  }>({ password: "", email: "", lastName: "", FirstName: "" });
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    })
      .then((data) => data.json())
      .then(() => router.push("/dashboard"));
    setFormValue({ password: "", email: "", lastName: "", FirstName: "" });
  };
  return (
    <>
      <div className="flex h-screen  ">
        <div className="bg-[#18181B] flex-1/2 flex flex-col gap-5 h-full p-5 justify-end text-white">
          <p className="font-medium text-[18px]   ">
            This Library has saved me countless hours of work and helped me
            deliver stunning designs to my clients faster than ever before.”
          </p>
          <p className="font-medium ">Sofia Davis</p>
        </div>
        <div className="bg-white flex-1/2 relative flex items-center justify-center flex-col  ">
          <Link href={"/login"}>
            <p className="absolute top-5 right-8  ">Login</p>
          </Link>

          <div className=" flex flex-col gap-6">
            <div className="text-center">
              <h2 className="text-[24px] font-semibold text-[#09090B] ">
                Create an account
              </h2>
              <p className="text-[#71717A]">
                Enter your email below to create your account
              </p>
            </div>
            <form onSubmit={submit} className="flex flex-col gap-3 ">
              <Input
                value={formValue.FirstName}
                onChange={(e: any) =>
                  setFormValue({ ...formValue, FirstName: e.target.value })
                }
                type="text"
                placeholder="first name "
              />
              <Input
                value={formValue.lastName}
                onChange={(e: any) =>
                  setFormValue({ ...formValue, lastName: e.target.value })
                }
                type="text"
                placeholder="last name "
              />
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
              <Button className="w-full">Create account</Button>
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
              By Clicking continue, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
