import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-white">
      <form className="md:w-[500px] flex flex-col gap-4 items-center">
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
            name="email"
            className="border rounded-md border-zinc-800 p-4 md:w-[450px]  outline-0 placeholder-zinc-800"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col  gap-2">
          <label htmlFor="password" className="text-zinc-800 font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded-md border-zinc-800  p-4 md:w-[450px]  outline-0 placeholder-zinc-800" 
            placeholder="Enter your password"
          />
        </div>
        <span className="text-zinc-800 font-bold underline flex justify-end w-full md:w-[450px] cursor-pointer">
         <Link to={'/reset'}><span> Forgot password?{" "}</span></Link>
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
        <Link to={"/"}>
          {" "}
          <span className="text-[#03B4C1] font-bold">Register</span>{" "}
        </Link>
      </p>
    </div>
  );
};
