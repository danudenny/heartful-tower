export interface IProject {
  img: string;
  badge: string;
  city: string;
  description: string;
  status?: boolean;
}

export const Projects: IProject[] = [
  {
    img: "https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167097/heartful/about-background_nfw1jq.jpg",
    badge: "Brand New",
    city: "Bekasi",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
    status: true,
  },
  {
    img: "https://res.cloudinary.com/killtdj/image/upload/v1697483878/e8d0c6173693147.Y3JvcCw2OTEyLDU0MDYsMCw1MzA_p0mtxz.jpg",
    badge: "",
    city: "",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
    status: false,
  },
];
