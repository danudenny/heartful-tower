const cloudinaryUrl = `v1697167085/heartful/facilities/`;

export const images: string[] = [
  `${cloudinaryUrl}kindergarten_qvrzqh.jpg`,
  `${cloudinaryUrl}multifunction_hrthy4.jpg`,
  `${cloudinaryUrl}zen-garden_jugqc9.jpg`,
  `${cloudinaryUrl}pool_fpobpi.jpg`,
  `${cloudinaryUrl}mushola_hu1fjg.jpg`,
  `${cloudinaryUrl}pool-2_tq04wf.jpg`,
  `${cloudinaryUrl}zen-garden-2_ug09s6.jpg`,
];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
