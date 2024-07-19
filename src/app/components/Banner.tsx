"use client";

import Image from "next/image";
import { Movie } from "../../../typings";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../constants/movie";
import { FaPlay } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const imagePath = movie?.backdrop_path || movie?.poster_path;

  useEffect(() => {
    if (
      !netflixOriginals ||
      !Array.isArray(netflixOriginals) ||
      netflixOriginals.length === 0
    )
      return;
    const randomIndex = Math.floor(Math.random() * netflixOriginals.length);
    setMovie(netflixOriginals[randomIndex]);
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[75vh] lg:justify-end lg:pb-6">
      <div className="absolute -z-10 top-0 left-0 h-[95vh] w-screen">
        {baseUrl && imagePath && (
          <Image
            src={`${baseUrl}${imagePath}`}
            className="object-cover"
            fill
            alt="movie-icon"
            priority
          />
        )}
      </div>

      <h1 className="text-2xl lg:text-6xl lg:pt-12 md:text-4xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button
          className="bg-[gray]/70 bannerButton"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          More Info <HiInformationCircle className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
