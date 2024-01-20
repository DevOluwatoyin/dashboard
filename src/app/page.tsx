import Image from "next/image";
import logo from "../assets/logo.svg";
import chat from "../assets/chat-bubble.svg";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { socials } from "@/constants/socials";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="relative bg-gradient-linear  min-h-screen p-10 text-white overflow-hidden">
      <div className="flex items-center gap-1">
        <Image src={logo} alt="stryke logo" />{" "}
        <span className="font-bold text-[38.769px]">Stryke</span>
      </div>

      <div className="pt-2 hidden md:block">
        <p className="text-4xl font-bold">
          Let&apos;s build something amazing today.
        </p>
        <p className="text-lg pt-2">
          Maybe some text here will help me see it better. Oh God. Oke,
          let&apos;s do it then.
        </p>
      </div>

      <section className="login pt-4">
        <span className="text-4xl font-bold wave">👋</span>
        <h2 className="text-[28px] font-semibold py-2">Welcome back!</h2>
        <p>Let's build something great</p>
        <form action="" className="pt-3 flex flex-col justify-between gap-6">
          <Input
            label="E-mail or phone number"
            type="email"
            id="email or phone number"
            name="email or phone number"
            placeholder="Type your e-mail or phone number"
          />
          <Input
            label="Password"
            type="email"
            name="password"
            id="password"
            placeholder="********"
          />

          <Button
            text="Sign in"
            buttonStyles="bg-primary px-6 py-4 rounded-lg"
            linkStyles="overflow-hidden"
          />
        </form>

        <p className="text-[10px] md:text-gray-lighter text-center py-4">
          <span className="inline-block w-[70px] h-[1px] mr-4 bg-border-light"></span>{" "}
          or do it via other accounts
          <span className="inline-block w-[70px] h-[1px] ml-4 bg-border-light"></span>
        </p>

        <Socials socialsArr={socials} />

        <p className="relative top-3 z-10 text-white text-sm md:text-gray-lighter text-right font-semibold">
          Don&apos;t have an account?
          <a href="/" className="text-primary">
            Get started
          </a>
        </p>
      </section>

      <div className="flex absolute bottom-0 justify-between w-full max-w-[80%] mx-auto">
        <Image src={chat} alt="chat bubble" />
        <span className="inline-block w-[170px] h-[170px] bg-[#8DEDF7] rounded-full -mb-10"></span>
      </div>
    </main>
  );
}
