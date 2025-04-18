import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { useForm } from "react-hook-form";
import { User } from "../../types/User.interface";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const { signIn, isAuthenticated, errors: LoginErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values: User) => {
    signIn(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-white relative">
      {LoginErrors.map((error, i) => {
        return <div className="bg-red-500 text-white p-2 rounded-md" key={i}>{error}</div>;
      })}
      <div className="absolute top-0 left-0">
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <form
        onSubmit={onSubmit}
        className="md:w-[500px] flex flex-col gap-4 items-center"
      >
        <div className="w-[450px] flex justify-start">
          <h1 className="text-2xl text-zinc-800 font-semibold">Log In</h1>
        </div>
        <div className="flex flex-col  gap-2">
          <label htmlFor="email" className="font-semibold text-zinc-800">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="border rounded-md border-zinc-800 p-4 md:w-[450px]  outline-0 placeholder-zinc-800"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>
        <div className="flex flex-col  gap-2">
          <label htmlFor="password" className="text-zinc-800 font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="border rounded-md border-zinc-800  p-4 md:w-[450px]  outline-0 placeholder-zinc-800"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>
        <span className="text-zinc-800 font-bold underline flex justify-end w-full md:w-[450px] cursor-pointer">
          <Link to={"/reset"}>
            <span> Forgot password? </span>
          </Link>
        </span>
        <button
          type="submit"
          className="bg-white text-[#03B4C1] border font-bold p-4 rounded-md mt-4 w-full md:w-[450px] cursor-pointer hover:bg-[#03B4C1] hover:text-white"
        >
          Log In
        </button>
      </form>
      <p className="mt-6 text-center text-zinc-900 font-semibold">
        Don't have an account?{" "}
        <Link to={"/registro"}>
          {" "}
          <span className="text-[#03B4C1] font-bold">Register</span>{" "}
        </Link>
      </p>
    </div>
  );
};
