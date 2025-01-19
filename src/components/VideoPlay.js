import { Typography } from "@material-tailwind/react";

export default function VideoPlay({ video }) {
  return (
    <div className="relative h-full w-full">
      <video
        className="h-full w-full rounded-none"
        loop
        controls={false}
        autoPlay
      >
        <source src={video?.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex justify-start">
        <div className=" lg:ml-20 ml-10 max-w-md flex items-center lg:pt-0 pt-20">
          <Typography
            className={
              video?.textColor +
              " lg:text-3xl  text-xl uppercase font-extrabold"
            }
          >
            {video.alt}
          </Typography>
        </div>
      </div>
    </div>
  );
}
