import { Header } from "../../components/Header/Header";

export const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-lg mb-4 w-full md:w-[50%]">
          En nuestra clínica dental, combinamos experiencia, tecnología de
          vanguardia y un trato humano para brindarte la mejor atención. Nuestro
          equipo de profesionales está comprometido con tu salud bucal,
          ofreciendo soluciones personalizadas en un ambiente cómodo y
          confiable. Nos apasiona verte sonreír con confianza, y trabajamos cada
          día para que tu visita al dentista sea una experiencia positiva.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Nuestros Valores</h1>
        <p className="text-lg mb-4 w-full md:w-[50%]">
          Nuestro compromiso con la salud bucal se refleja en nuestros valores:
        </p>
        <ul className="list-disc list-inside text-lg mb-4 w-full md:w-[50%]">
          <li>Respeto y compromiso con la salud bucal.</li>
          <li>Eficacia y calidad en nuestros servicios. </li>
          <li>Trato humano y confianza.</li>
          <li>Ampliar la información y la experiencia.</li>
        </ul>
      </div>
    </div>
  );
};
