import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export const VideoPlayer = () => {
  return (
    <div className="video-player">
      <CldVideoPlayer
        src="v1699365047/Heartful_Tower_-_Teaser_-_November_wt6gka.mp4"
        loop
        muted
        className="w-full h-full object-cover"
        width="640"
        height="360"
        autoPlay="on-scroll"
        controls={false}
      />
    </div>
  );
};
