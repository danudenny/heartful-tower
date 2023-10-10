import Image from "next/image";

export const About = () => {
  const statistics = [
    {
      name: "Total Property",
      value: "46.000",
      unit: "Year",
    },
    {
      name: "Location",
      value: "400",
      unit: "Sales",
    },
    {
      name: "Share",
      value: 1,
      unit: null,
    },
  ];
  return (
    <div className="about-container">
      <div className="about flex items-center justify-center" key="about">
        <div className="container mx-auto relative flex gap-10">
          <div className="relative">
            <Image
              src="/about-image.png"
              alt=""
              width={600}
              height={300}
              className="ml-24"
            />
            <div className="absolute -bottom-44 -left-20 mb-4 ml-4">
              <img alt="circle-arrow" src="/circle-arrow-top-right.svg" />
            </div>
          </div>
          <div className="flex flex-col gap-5 about-title">
            <h1>Perumnas IIDA Group</h1>
            <p>
              Perumnas IIDA Group didirikan di Indonesia sejak October 2017{" "}
              <br />
              yang merupakan anak usaha dari IIDA SANGYO Co., Ltd. dan <br /> PT
              Propernas Griya Utama (anak perusahaan dari PERUM PERUMNAS).
            </p>
            <p>
              IIDA SANGYO Co., Ltd. merupakan pengembang property ternama <br />
              di bawah naungan IIDA Group Holdings yang merupakan Perusahaan Tbk
              di Jepang. <br />
              IIDA Group telah menyediakan lebih dari 46.000 tempat tinggal
              pertahunnya, <br />
              yang mana sekitar 30% penduduk Jepang memiilih tempat tinggal{" "}
              <br />
              yang diproduksi oleh IIDA Group.
            </p>
            <div className="flex justify-around mt-10">
              {statistics.map((stat, index) => (
                <div
                  className="flex flex-col gap-2 text-[#EBBE63] text-center leading-8"
                  key={index}
                >
                  <div>
                    <h1>{stat.value}</h1>
                  </div>
                  <div>
                    <h3 className="text-[#75ACD8]">
                      {stat.name} {stat.unit ? `(${stat.unit})` : ""}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-big">
          <h1>INSIGHT</h1>
        </div>
      </div>
    </div>
  );
};
