export const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video
        src="/video/video.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
    </div>
  );
};
