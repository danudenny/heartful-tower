import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";

export const ContactUs = () => {
  const t = useTranslations("Contact");
  const inputDomiciliRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputWhatsappRef = useRef<HTMLInputElement>(null);
  const inputNameRef = useRef<HTMLInputElement>(null);

  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const subscribeUser = async (e: { preventDefault: () => void }) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          email: inputEmailRef.current?.value,
          name: inputNameRef.current?.value,
          whatsapp: inputWhatsappRef.current?.value,
          domicili: inputDomiciliRef.current?.value,
        }),

        headers: {
          "Content-Type": "application/json",
        },

        method: "POST",
      });
      if (res) {
        setIsLoading(false);
        setSuccessMessage("Thank You for Contacting Us!");
        if (inputDomiciliRef.current) {
          inputDomiciliRef.current.value = "";
        }
        if (inputEmailRef.current) {
          inputEmailRef.current.value = "";
        }
        if (inputWhatsappRef.current) {
          inputWhatsappRef.current.value = "";
        }
        if (inputNameRef.current) {
          inputNameRef.current.value = "";
        }
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setSuccessMessage("");
    }
  };

  useEffect(() => {
    if (successMessage) {
      setIsLoading(false);

      const timeout = setTimeout(() => {
        setSuccessMessage("");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [successMessage]);

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.067791842157!2d106.98742147576486!3d-6.254799361241469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d9b13dc528b%3A0xda8b934f21da2231!2sRevo%20Mall!5e0!3m2!1sen!2sid!4v1697447201281!5m2!1sen!2sid"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="herattower-location"
          ></iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Marketing Gallery & Show Unit <br />
                Heartful Tower Bekasi
              </h2>
              <p className="mt-1">
                Revo Mall
                <br />
                Ruko No. 55, Lt. UG Kios No 35 - 36
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Whatsapp
              </h2>
              <span className="text-indigo-500 leading-relaxed">
                0811 1993 3099
              </span>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">(021) 3987 1188</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={subscribeUser}
          className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <div>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              {t("title")}
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">{t("desc")}</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoCapitalize="off"
                ref={inputNameRef}
                autoCorrect="off"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#75ACD8] focus:ring-2 focus:ring-[#75ACD8] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                ref={inputEmailRef}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#75ACD8] focus:ring-2 focus:ring-[#75ACD8] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="whatsapp"
                className="leading-7 text-sm text-gray-600"
              >
                No. Whatsapp
              </label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                ref={inputWhatsappRef}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#75ACD8] focus:ring-2 focus:ring-[#75ACD8] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="domicile"
                className="leading-7 text-sm text-gray-600"
              >
                Domisili
              </label>
              <input
                type="text"
                id="domicile"
                name="domicile"
                ref={inputDomiciliRef}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#75ACD8] focus:ring-2 focus:ring-[#75ACD8] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                value=""
                disabled={isLoading}
                className={`text-white bg-[#75ACD8] border-0 py-2 px-6 focus:outline-none hover:bg-success rounded-md text-lg ${
                  isLoading ? "cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
              <div
                className={`transition-opacity duration-300 ease-in-out ${
                  successMessage ? "opacity-100" : "opacity-0"
                }`}
              >
                {successMessage}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
