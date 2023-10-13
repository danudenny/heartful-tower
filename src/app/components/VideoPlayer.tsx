export const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video
        src="https://res.cloudinary.com/killtdj/video/upload/q_auto/v1697167098/heartful/video/video_nwuoyq.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
    </div>
  );
};
