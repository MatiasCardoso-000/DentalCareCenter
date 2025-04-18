import { Card } from "../Card/Card";

export const OurServices = () => {
  return (
    <section className="flex flex-col w-full h-screen justify-center items-center  gap-10">
      <h1 className="text-5xl font-bold text-zinc-800">Nuestros Servicios</h1>
      <div className="flex flex-col">
        <div className="flex gap-4">
          <Card
            image="../../../public/teeth_withening-image.PNG"
            title="Blanqueo de los dientes"
            paragraph=""
          />
          <Card
            image="../../../public/cosmetic_dedntistry_image.PNG"
            title="Implantes dentales"
            paragraph=""
          />
        </div>
        <div className="flex gap-4">
          <Card
            image="../../../public/dental_implants_image.PNG"
            title="Cosmetica dental"
            paragraph=""
          />
          <Card
            image="../../../public/orthodontics_image.PNG"
            title="Ortodonsia"
            paragraph=""
          />
        </div>
      </div>
    </section>
  );
};
