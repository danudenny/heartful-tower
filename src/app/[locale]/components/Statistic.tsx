import { useTranslations } from "next-intl";

export const Statistic = () => {
  const t = useTranslations("Stat");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center">
          <h6 className="text-4xl font-bold text-white">{t("provides")}</h6>
          <h6 className="mb-2 text-5xl font-black text-success italic drop-shadow-lg">
            46.000
          </h6>
          <p className="text-gray-700 font-semibold">{t("house")}</p>
        </div>
        <div className="text-center">
          <h6 className="text-4xl font-bold text-white">{t("over")}</h6>
          <h6 className="mb-2 text-5xl font-black text-success italic drop-shadow-lg">
            400
          </h6>
          <p className="text-gray-700 font-semibold">{t("location")}</p>
        </div>
        <div className="text-center">
          <h6 className="text-4xl font-bold text-white">{t("japan")}</h6>
          <h6 className="mb-2 text-5xl font-black text-success italic drop-shadow-lg">
            Good
          </h6>
          <p className="text-gray-700 font-semibold">{t("quality")}</p>
        </div>
        <div className="text-center">
          <h6 className="text-4xl font-bold text-white">{t("the")}</h6>
          <h6 className="mb-2 text-5xl font-black text-success italic drop-shadow-lg">
            Good
          </h6>
          <p className="text-gray-700 font-semibold">{t("price")}</p>
        </div>
      </div>
    </div>
  );
};
