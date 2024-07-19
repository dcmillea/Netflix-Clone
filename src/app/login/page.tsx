"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

interface Inputs {
  email: string;
  password: string;
}

function LoginPage() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        alt="icon"
        fill
        className="-z-10 object-cover !hidden opacity-60 sm:!inline"
      />

      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      {isHovered && (
        <div className="absolute md:top-10 md:bottom-auto bottom-10 z-10 w-1/2 border-none left-36 rounded bg-[#e6e6e6]">
          <p className="text-center text-black">
            This is just a clone project. This is not real Netflix. You do not
            need a netflix account to view this site. If you have not logged in
            before, just press the 'Sign up now' button at the bottom and use
            your email and any password, once you do this, you can then log in
            using this same information anytime going forward.
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 opacity-75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl flex gap-x-2 items-center font-semibold">
          Sign In
          <QuestionMarkCircleIcon
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-7 cursor-pointer h-7"
          />
        </h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Please enter valid email
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Please enter valid password
              </p>
            )}
          </label>
        </div>

        <button
          onClick={() => setLogin(true)}
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
        >
          Sign In
        </button>

        <div className="text-[gray]">
          New to Netflix?{" "}
          <button
            onClick={() => setLogin(false)}
            type="submit"
            className="cursor-pointer hover:underline text-white"
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
