"use client";
import Image from "next/image";
import logo from "/public/icons/logo.svg";
import chat from "/public/icons/chat-bubble.svg";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Socials from "@/components/Socials";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState("");


  return (
    <main className="relative bg-gradient-linear min-h-screen p-10 py-8 text-white overflow-hidden md:flex md: justify-between md:bg-none md:p-0">
      <div className="flex-1 md:bg-gradient-linear md:relative md:px-10 md:py-8 md:max-w-[586px]">
        <Link href="/" className="flex items-center gap-1">
          <Image src={logo} alt="stryke logo" />
          <span className="font-bold text-[38.769px]">Stryke</span>
        </Link>

        <div className="pt-2 hidden top-32 md:block md:relative md:pl-8">
          <p className="text-4xl font-bold max-w-[433px]">
            Let&apos;s build something amazing today.
          </p>
          <p className="text-lg pt-2 max-w-[420px] mt-6">
            Maybe some text here will help me see it better. Oh God. Oke,
            let&apos;s do it then.
          </p>
        </div>

        <div className="flex absolute -bottom-4 justify-between w-full max-w-[80%] mx-auto">
          <Image src={chat} alt="chat bubble" />
          <span className="inline-block w-[170px] h-[170px] bg-[#8DEDF7] rounded-full relative -bottom-12"></span>
        </div>
      </div>

      <section className="login pt-4 flex-1 md:bg-white  md:text-heading-dark md:grid items-center content-center">
        <div className="md:w-[312px] md:mx-auto ">
          <span className="text-4xl font-bold animate-pulse">👋</span>
          <div>
            <h2 className="text-[28px] font-semibold py-2">Hello!</h2>
            <p>Join Us! Let&apos;s build something great</p>
          </div>

          <form action="" className="pt-3 flex flex-col justify-between gap-6">
            <Input
              label="E-mail or phone number"
              type="text"
              id="email or phone number"
              name="email or phone number"
              placeholder="Type your e-mail or phone number"
            />
            <Input
              label="Password"
              type="password"
              name="password"
              id="password"
              placeholder="********"
            />
            <Input
              label="Confirm Password"
              type="password"
              name="confirm password"
              id="confirm password"
              placeholder="********"
            />

            <Button
              text="Sign up"
              buttonStyles="w-full bg-primary px-6 py-4 rounded-lg text-white font-semibold text-sm hover:bg-primary-soft hover:text-primary transition-all"
            />
          </form>

          <div>
            <p className="text-[10px] md:text-gray-lighter text-center py-4">
              <span className="inline-block w-[40px] h-[1px] mr-4 bg-border-light md:w-[70px]"></span>
              or do it via other accounts
              <span className="inline-block w-[40px] h-[1px] ml-4 bg-border-light md:w-[70px]"></span>
            </p>

            <Socials />
          </div>
        </div>
        <p className="relative top-3 z-10 text-white text-sm md:text-gray-lighter text-right font-semibold md:right-4">
          Already have an account?
          <Link
            href="/"
            className="text-primary ml-1 hover:underline transition ease-in-out"
          >
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}
