import { IProject } from "@/app/datas/projects";
import Image from "next/image";

export const ProjectCard = ({
  img,
  badge,
  city,
  description,
  status,
}: IProject) => {
  const badgeClass = status
    ? "bg-green-100 text-green-800"
    : "bg-dark text-primary";

  const cardClass = status ? "group" : "group cursor-not-allowed";
  return (
    <>
      <div className={cardClass + " relative block bg-black"}>
        <Image
          alt="Developer"
          src={img}
          width={500}
          height={500}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          onLoadingComplete={() => {}}
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <div className="text-sm font-medium uppercase tracking-widest text-pink-500">
            <span
              className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 ${badgeClass}`}
            >
              {badge}
            </span>
          </div>

          <p className="text-xl font-bold text-white sm:text-2xl">{city}</p>

          <div
            className={
              status
                ? "mt-32 sm:mt-48 lg:mt-64"
                : "mt-32 sm:mt-48 lg:mt-64 opacity-50 bg-black"
            }
          >
            <div
              className={
                status
                  ? "translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  : "group-hover:opacity-0"
              }
            >
              <p className="text-sm text-white">{status ? description : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
