export const Home = () => {
  return (
    <>
      <section className="md:h-max flex w-full justify-between p-2">
        <div className=" w-full flex flex-col items-start  gap-4 m-auto px-[100px]">
          <div className="flex items-center">
            <img
              src="../../../public/logo.png"
              alt="logo image"
              className="w-[150px] cursor-pointer"
            />
            <h1 className="text-xl font-bold">DentalCare Center</h1>
          </div>
          <p className="text-xl">Get expert help and care at every visit.</p>
          <p className="w-[40%] text-4xl text-primary-500">
            We offer a wide range of dental services, including check-ups,
            cleanings, and more. We also offer a variety of dental products and
            services, including dental implants, crowns, and teeth whitening.
          </p>

          <button className="bg-[#03B4C1] p-4 text-white rounded-md mt-4 font-bold hover:bg-amber-600 cursor-pointer">
            SET AN APPOINTMENT
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
          <h2 className="text-4xl font-bold">Our Services</h2>

          <img
            src="../../../public/second-section-image.PNG"
            alt="woman dentist image"
            className="w-[600px] mx-auto"
          />
        </div>

        <div className="w-[70%] flex flex-col gap-16">
          <ul className="flex flex-col gap-4 mt-12">
            <li>
              <p className="text-2xl font-bold text-[#03B4C1] mb-2">
                Dental Care
              </p>
              <p className="text-xl">
                Our dental care services are designed to help you maintain a
                healthy smile and prevent dental problems before they become
                serious. We offer a variety of services, including check-ups,
                cleanings, and more. We also offer a variety of dental products
                and services, including dental implants, crowns, and teeth
                whitening.
              </p>
            </li>
            <li>
              <p className="text-2xl font-bold text-[#03B4C1] mb-2">
                Dental Implants
              </p>
              <p className="text-xl">
                Dental implants are a popular option for replacing missing
                teeth. They are made of a strong, durable material and are
                implanted into the jawbone to provide a stable foundation for
                new teeth. Dental implants can help improve your appearance and
                function, and they can also help prevent further tooth loss.
              </p>
            </li>
            <li>
              <p className="text-2xl font-bold text-[#03B4C1] mb-2">
                Dental Crowns
              </p>
              <p className="text-xl">
                Dental crowns are a popular option for restoring damaged or
                missing teeth. They are made of a strong, durable material and
                are placed over the top of a tooth to fill in any gaps or
                defects. Dental crowns can help improve your appearance and
                function, and they can also help prevent further tooth loss.
              </p>
            </li>
          </ul>

          <h3 className="text-2xl">Testimonials</h3>
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
            Our Main Services
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
              <h3 className="font-bold text-xl mb-4">CLEANING</h3>
              <p className=" w-[50%]">
                Cleanings are an important part of maintaining good oral health.
                They help remove plaque and tartar buildup, which can lead to
                tooth decay and gum disease. Regular cleanings can also help
                prevent cavities and other dental problems.
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
              <h3 className="font-bold text-xl mb-4">FILLING</h3>
              <p className="w-[50%]">
                Fillings are a way to repair damaged or decayed teeth. They are
                typically made of a composite resin or a metal alloy and are
                placed in the cavity to fill it up. Fillings can help restore
                the shape and function of a tooth and prevent further decay.
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
              <h3 className="font-bold text-xl">CLEANING</h3>
              <p className="mb-4 w-[60%]">
                Extraction is the process of removing a tooth from the mouth. It
                is typically done when a tooth is damaged beyond repair or when
                it is causing pain. Extraction can be done through a variety of
                methods, including extraction with a drill, extraction with a
                laser, or extraction with a surgical technique.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};
