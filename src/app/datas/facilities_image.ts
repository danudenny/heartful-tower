const cloudinaryUrl = `v1697167085/heartful/facilities/`;

export const images = [
  {
    src: `${cloudinaryUrl}kindergarten_qvrzqh.jpg`,
    title: "Kindergarten",
    alt: "Kindergarten",
  },
  {
    src: `${cloudinaryUrl}multifunction_hrthy4.jpg`,
    title: "Multifunction Room",
    alt: "Multifunction Room",
  },
  {
    src: `${cloudinaryUrl}zen-garden_jugqc9.jpg`,
    title: "Zen Garden",
    alt: "Zen Garden",
  },
  {
    src: `${cloudinaryUrl}pool_fpobpi.jpg`,
    title: "Pool",
    alt: "Pool",
  },
  {
    src: `${cloudinaryUrl}mushola_hu1fjg.jpg`,
    title: "Musholla",
    alt: "Musholla",
  },
  {
    src: `${cloudinaryUrl}pool-2_tq04wf.jpg`,
    title: "Pool",
    alt: "Pool",
  },
  {
    src: `${cloudinaryUrl}zen-garden-2_ug09s6.jpg`,
    title: "Zen Garden",
    alt: "Zen Garden",
  },
];

export const imageByIndex = (index: number) => {
  return images[index].src;
};

export const imageTitleByIndex = (index: number) => {
  return images[index].title;
};

export const imageAltByIndex = (index: number) => {
  return images[index].alt;
};

export const imageLength = images.length;
