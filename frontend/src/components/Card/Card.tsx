
interface Params {
  image: string
  title:string
  paragraph:string
}

export const Card = ({image, title,paragraph}:Params) => {
  return (
    <div className="w-full flex flex-col justify-center items-center md:w-[500px] md:h-[300px] shadow-lg rounded-lg p-4 my-4 cursor-pointer">
      <img src={image} alt="imagen" />
      <p>{paragraph}</p>
      <h3 className="text-3xl font-semibold text-zinc-800">{title}</h3>
    </div>
  );
}