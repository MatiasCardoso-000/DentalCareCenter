import { useNavigate } from "react-router-dom";

export const InfoSections = () => {

  const navigate = useNavigate()

  return (
    <section>
      <section className="md:h-max flex w-full justify-between p-2">
        <div className=" w-full flex flex-col items-start  gap-4 m-auto px-[100px]">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">DentalCare Center</h1>
          </div>
          <p className="text-xl">
            Obtenga ayuda y cuidados expertos en cada visita.
          </p>
          <p className="w-[40%] text-4xl text-primary-500">
            Ofrecemos una amplia gama de servicios dentales, incluyendo
            chequeos, limpiezas , y más. También ofrecemos una variedad de
            productos dentales y servicios , incluyendo implantes dentales,
            coronas y blanqueamiento dental.
          </p>

          <button className="bg-[#03B4C1] p-4 text-white rounded-md mt-4 font-bold hover:bg-amber-600 cursor-pointer" onClick={()=> {
            navigate('/citas')
          }}>
            FIJAR UNA CITA
          </button>
        </div>

        <div>
          <img
            src="../../../public/hero-image.PNG"
            alt=" hero image"
            className="w-[800px]"
          />
        </div>
      </section>
      <section className="md:h-max flex justify-evenly gap-8 w-full m-auto  px-2 py-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Nuestros Servicios</h2>

          <img
            src="../../../public/second-section-image.PNG"
            alt="woman in the dentist image"
            className="w-[600px] mx-auto"
          />
        </div>

        <div className="w-[70%] flex flex-col gap-16">
          <ul className="flex flex-col gap-4 mt-12">
            <li>
              <p className="text-2xl font-bold text-[#03B4C1] mb-2">
                Cuidado Dental
              </p>
              <p className="text-xl">
                Nuestros servicios de cuidado dental están diseñados para
                ayudarle a mantener una sonrisa sana y prevenir problemas
                dentales antes de que se conviertan en grave. Ofrecemos una
                variedad de servicios, incluyendo chequeos, limpiezas, y más.
                También ofrecemos una variedad de productos dentales y
                servicios, incluyendo implantes dentales, coronas, y los dientes
                blanqueamiento.
              </p>
            </li>
            <li>
              <p className="text-2xl font-bold text-[#03B4C1] mb-2">
                Implantes Dentales
              </p>
              <p className="text-xl">
                Los implantes dentales son una opción muy popular para sustituir
                los dientes perdidos . Están hechos de un material resistente y
                duradero y se implantan en el hueso maxilar para proporcionar
                una base estable para nuevos dientes. Los implantes dentales
                pueden ayudar a mejorar su aspecto y función, y también pueden
                ayudar a prevenir la pérdida de más dientes.
              </p>
            </li>
            <li>
              <p className="text-2xl font-bold text-[#03B4C1] mb-2">Coronas</p>
              <p className="text-xl">
                Las coronas dentales son una opción popular para restaurar
                dientes dañados o ausentes de . Están hechas de un material
                resistente y duradero y se colocan sobre la parte superior de un
                diente para rellenar cualquier hueco o defectos. Las coronas
                dentales pueden ayudar a mejorar su aspecto y función, y también
                pueden ayudar a prevenir la pérdida de más dientes.
              </p>
            </li>
          </ul>

          <h3 className="text-2xl">Testimonios</h3>
          <p className="text-xl font-bold italic text-sky-600">
            "Volver a comer sin dolor y sonreír sin vergüenza fue posible con
            sus implantes. ¡Inversión que vale cada segundo!"
          </p>

          <p className="text-xl font-bold italic text-sky-600">
            "Mi sonrisa brilla más que nunca gracias a sus carillas
            personalizadas. ¡Parece que llevo un filtro en la vida real!"
          </p>
        </div>
      </section>
      <section className="w-full flex flex-col items-center p-2 gap-20">
        <div className="w-full  flex justify-evenly items-center  mx-auto px-4 ">
          <h2 className="text-4xl font-semibold mb-2 border-t-4 border-[#03B4C1] border-spacing-y-1.5">
            Nuestros principales servicios
          </h2>
          <img
            src="../../../public/third-section-image.PNG"
            alt="third-section-image "
          />
        </div>
        <ul className="w-full flex md:flex-row gap-4 justify-center items-center p-2">
          <li className="w-full flex flex-col items-center p-2 ">
            <img
              src="../../../public/tooth-bright-dental.png"
              alt=" tooth-bright-dental"
              className="w-[150px] h-[100px] object-cover block  "
            />

            <div className="flex flex-col items-center p-2 ">
              <h3 className="font-bold text-xl mb-4">LIMPIEZA</h3>
              <p className=" w-[50%]">
                Las limpiezas son una parte importante del mantenimiento de una
                buena salud bucodental. Ayudan a eliminar la placa y la
                acumulación de sarro, que pueden provocar caries y enfermedades
                de las encías en . Las limpiezas regulares también pueden ayudar
                a a prevenir las caries y otros problemas dentales.
              </p>
            </div>
          </li>
          <li className="w-full flex flex-col items-center p-2">
            <img
              src="../../../public/filling-image.png"
              alt=" tooth-filling-dental"
              className="w-[150px] h-[100px] object-cover block "
            />
            <div className="flex flex-col items-center p-2 ">
              <h3 className="font-bold text-xl mb-4">RELLENO</h3>
              <p className="w-[50%]">
                Los empastes son una forma de reparar los dientes dañados o
                cariados. Son , normalmente de resina compuesta o una aleación
                metálica, y se colocan en la cavidad para rellenarla. Los
                empastes pueden ayudar a restaurar la forma y la función de un
                diente y prevenir nuevas caries.
              </p>
            </div>
          </li>
          <li className="w-full flex flex-col items-center p-2 ">
            <img
              src="../../../public/extraction-image.png"
              alt=" tooth-extraction-dental"
              className="w-[150px] h-[100px] object-cover block "
            />

            <div className="flex flex-col items-center p-2 ">
              <h3 className="font-bold text-xl">EXTRACCIÓN</h3>
              <p className="mb-4 w-[60%]">
                La extracción es el proceso de sacar un diente de la boca. Se
                hace normalmente cuando un diente está dañado sin posibilidad de
                reparación o cuando está causando dolor. La extracción se puede
                realizar a través de una variedad de métodos , incluyendo la
                extracción con un taladro, la extracción con un láser , o la
                extracción con una técnica quirúrgica.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
};
