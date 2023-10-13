import { useTranslations } from "next-intl";

export const ContactUs = () => {
  const t = useTranslations("Contact");
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7748591155373!2d106.98631467576534!3d-6.293292261597383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d51797fee89%3A0xb76a046752381d1f!2sHeartful%20Tower%20Bekasi!5e0!3m2!1sen!2sid!4v1697110882781!5m2!1sen!2sid"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Heartful Tower Bekasi
              </h2>
              <p className="mt-1">
                Jl. Pesona Metropolitan RT.004/RW.042, Bojong Rawalumbu, Kec.
                Rawalumbu, Kota Bks, Jawa Barat 17116
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
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
              className="w-full bg-white rounded border border-gray-300 focus:border-[#75ACD8] focus:ring-2 focus:ring-[#75ACD8] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
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
              className="w-full bg-white rounded border border-gray-300 focus:border-[#75ACD8] focus:ring-2 focus:ring-[#75ACD8] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-[#75ACD8] border-0 py-2 px-6 focus:outline-none hover:bg-success rounded-md text-lg">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};
