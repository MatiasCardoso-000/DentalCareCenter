
export const ResetPasswordForm = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-white">
      <form className="md:w-[500px] flex flex-col gap-4 items-center">
        <div className="w-[450px] flex justify-start">
          <h1 className="text-2xl text-zinc-800 font-semibold">
            Reset Password
          </h1>
        </div>
        <div className="flex flex-col  gap-2">
          <label htmlFor="password" className="text-zinc-800 font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded-md border-zinc-800 text-zinc-800 p-4 md:w-[450px]  outline-0 placeholder-zinc-800"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex flex-col  gap-2">
          <label htmlFor="password" className="text-zinc-800 font-semibold">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirPassword"
            name="password"
            className="border rounded-md border-zinc-800 text-white p-4 md:w-[450px]  outline-0 placeholder-zinc-800"
            placeholder="Confirm your password"
          />
        </div>

        <button
          type="submit"
          className="bg-white text-[#03B4C1] border font-bold p-4 rounded-md mt-4 w-full md:w-[450px] cursor-pointer hover:bg-[#03B4C1] hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
