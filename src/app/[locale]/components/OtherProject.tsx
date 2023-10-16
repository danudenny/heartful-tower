import { Projects as projects } from "@/app/datas/projects";
import { ProjectCard } from "@/app/[locale]/components/ProjectCard";
import React from "react";

export const OtherProject = () => {
  return (
    <div className="mt-24 sm:mt-24 lg:mt-24 px-10">
      <h2 className="text-4xl font-black text-center text-dark">
        OUR PROJECTS
      </h2>
      <p className="text-center text-success mt-3">
        At Heartful Tower, we're redefining modern living.
        <br />
        Elevate your lifestyle with Heartful Tower's exceptional designs,
        <br />
        innovative amenities, and eco-friendly living. Your extraordinary life
        begins here."
      </p>
      <div className="mt-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              img={project.img}
              badge={project.badge}
              city={project.city}
              description={project.description}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
