import Image from "next/image";

export const Siteplan = () => {
  return (
    <div className="siteplan mx-auto" key="siteplan">
      <div className="flex w-1/2 mx-auto">
        <Image
          src="/siteplan.png"
          width={400}
          height={300}
          layout="responsive"
          objectFit="contain"
          quality={100}
          alt="siteplan"
        />
      </div>
      <div className="siteplan-title">
        <h1>SITE</h1>
        <h1 className="-mt-32">PLAN</h1>
      </div>
    </div>
  );
};
