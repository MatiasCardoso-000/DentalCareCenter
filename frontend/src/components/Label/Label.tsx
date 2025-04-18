interface Params {
  children: React.ReactNode;
  htmlFor:string
}

export const Label = ({ children, htmlFor }: Params) => {
  return <label htmlFor={htmlFor} className=" font-semibold text-zinc-800">{children}</label>;
};
