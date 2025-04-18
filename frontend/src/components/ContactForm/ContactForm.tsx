import { Input } from "../Input/Input";
import { Label } from "../Label/Label";

export const ContactForm = () => {
  return (
    <div className="flex justify-around">
      <div className="w-full md:w-[40%] flex flex-col items-end justify-center gap-4">
        <h1 className="text-gray-500 text-4xl font-bold">
          Contacta con nosotros
        </h1>
        <p className="text-xl">(123)456-7890</p>
        <p className="text-xl">info@dentalcarecenter.com</p>
        <p className="text-xl">1234 Elm St, Anytown, CA 12345</p>
      </div>
      <form className="flex flex-col items-center gap-4 w-full md:w-[60%] ">
        <Label htmlFor="email">Email:</Label>
        <Input type="text" placeholder="Email" id="email" />
        <Label htmlFor="message">Mensaje:</Label>
        <textarea
          className="border border-zinc-800 w-full md:w-[450px]  md:h-[150px] rounded-md p-2 outline-0"
          name="message"
          id="message"
          placeholder="Mensaje"
        ></textarea>
        <button className="w-full md:w-[450px] bg-zinc-600 text-white font-bold p-2 rounded-md cursor-pointer hover:bg-zinc-500">
          Enviar
        </button>
      </form>
    </div>
  );
};
