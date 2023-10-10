import CardSlider from "@/app/components/CardSlider";

export const Facilities = () => {
  return (
    <div className="facilities-container">
      <div className="facilities flex flex-col items-center bg-primary">
        <div className="flex w-full container items-center justify-between my-32">
          <div className="flex items-center gap-5 ">
            <img
              src="/header-title.svg"
              alt="header-logo"
              width={70}
              height={122}
            />
            <div className="facilities-title">
              <h1>
                Balance <br />
                In Your <span>Life</span>
              </h1>
            </div>
          </div>

          <div className="facilities-desc">
            <p>
              Nikmati keseimbangan hidup anda dengan fasilitas <br />
              yang telah tersedia untuk para penguhni apartemen <br />
              <span className="font-bold italic text-[#EBBE63]">
                Heartful Tower Bekasi.
              </span>
            </p>
          </div>
        </div>
        <div className="container relative">
          <CardSlider />
        </div>
        <div className="facilities-big">
          <h1>FACILITIES</h1>
        </div>
      </div>
    </div>
  );
};
