import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { User } from "../../types/User.interface";
import { Input } from "../Input/Input";

export const RegisterForm = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const { signUp, errors: RegisterErrors } = useAuth();


  const onSubmit = handleSubmit(async (values: User) => {
    signUp(values);
  });

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-white relative">
      {RegisterErrors.map((error, i) => {
        return (
          <div className="bg-red-500 text-white p-2" key={i}>
            {error}
          </div>
        );
      })}

      <div className="absolute top-0 left-0">
          <Logo />
      </div>
      <form
        className="md:w-[500px] flex flex-col gap-4 items-center"
        onSubmit={onSubmit}
      >
        <div className="w-[450px] flex justify-start">
          <h1 className="text-2xl text-zinc-800 font-semibold">Register</h1>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className=" font-semibold text-zinc-800">
            Name:
          </label>
          <Input
            type="text"
            id="username"
            placeholder="Enter your name"
            register={{ ...register("username", { required: true }) }}
          />

          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}
        </div>
        <div className="flex flex-col  gap-2">
          <label htmlFor="email" className=" font-semibold text-zinc-8000">
            Email:
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            register={{ ...register("email", { required: true }) }}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>
        <div className="flex flex-col  gap-2">
          <label htmlFor="password" className=" font-semibold text-zinc-800">
            Password:
          </label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            register={{ ...register("password", { required: true }) }}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>
        <div className="flex flex-col  gap-2">
          <label htmlFor="password" className=" font-semibold text-zinc-800">
            Confirm Password:
          </label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            register={{ ...register("confirmPassword", { required: true }) }}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">Confirm Password is required</p>
          )}
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
