import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";

import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-white relative">
      <div className="absolute top-0 left-0">
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <form
        className="md:w-[500px] flex flex-col gap-4 items-center"
        onSubmit={handleSubmit((value) => {
          console.log(value);
        })}
      >
        <div className="w-[450px] flex justify-start">
          <h1 className="text-2xl text-zinc-800 font-semibold">Register</h1>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className=" font-semibold text-zinc-800">
            Name:
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
            className="border rounded-md border-zinc-800 p-4 md:w-[450px] outline-0 placeholder-zinc-800 text-zinc-800"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col  gap-2">
          <label htmlFor="email" className=" font-semibold text-zinc-8000">
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="border rounded-md border-zinc-800 p-4 md:w-[450px]  outline-0 placeholder-zinc-800 text-zinc-800"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col  gap-2">
          <label htmlFor="password" className=" font-semibold text-zinc-800">
            Password:
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className="border rounded-md border-zinc-800 p-4 md:w-[450px]  outline-0 placeholder-zinc-800 text-zinc-800"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex flex-col  gap-2">
          <label htmlFor="password" className=" font-semibold text-zinc-800">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: true,
            })}
            className="border rounded-md border-zinc-800 p-4 md:w-[450px]  outline-0 placeholder-zinc-800 text-zinc-800"
            placeholder="Confirm your password"
          />
        </div>
        <button
          type="submit"
          className="bg-white text-[#03B4C1] border font-bold p-4 rounded-md mt-4 w-full md:w-[450px] cursor-pointer hover:bg-[#03B4C1] hover:text-white "
        >
          Register
        </button>
      </form>
      <p className="mt-6 text-center text-zinc-900 font-bold">
        Have an account?{" "}
        <Link to={"/login"}>
          {" "}
          <span className=" text-[#03B4C1] cursor-pointer">Log In</span>{" "}
        </Link>
      </p>
    </div>
  );
};
