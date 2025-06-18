import { API_OPTIONS } from "../utils/constants";
import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector(store => store.movies?.movieTrailer)
  if(!trailer) return;

  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"

        src={"https://www.youtube.com/embed/"+trailer.key+"?autoplay=1&mute=1&loop=1&playlist="+trailer.key}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
