import { FieldValues, UseFormRegister } from "react-hook-form";

interface Params {
  type: string;
  id: string;
  placeholder: string;
  register: ReturnType<UseFormRegister<FieldValues>>;
}

export const Input = ({ type,  id, placeholder,register }: Params) => {

  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      {...register}
      className="border rounded-md border-zinc-800 p-4 md:w-[450px]  outline-0 placeholder-zinc-800 text-zinc-800"
    />
  );
};
