import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export const VideoPlayer = () => {
  return (
    <div className="video-player">
      <CldVideoPlayer
        src="v1697167098/heartful/video/video_nwuoyq.mp4"
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
