"use client";

import React from "react";
import { Movie } from "../../../typings";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
  // movie: Movie | DocumentData; --> when using firebase
  film: Movie;
}

function Thumbnail({ film }: Props) {
  console.log(film);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovieState] = useRecoilState(movieState);
  const baseMovieTitle = film.title ? film.title : film.original_name;
  const movieTitle = baseMovieTitle ? baseMovieTitle : film.name;

  const handleClick = () => {
    setMovieState(film);
    setShowModal(true);
  };

  return (
    <div
      onClick={handleClick}
      className="relative cursor-pointer h-28 min-w-[180px] md:h-36 md:min-w-[260px] md:hover:scale-105 ease-in-out duration-300 transition-all"
    >
      {/* Image */}
      <div className="relative h-full">
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            film.backdrop_path || film.poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
          fill
          alt="thumbnail-Icon"
          sizes="w-full"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-50 flex items-center justify-center">
          <h2 className="text-white text-center text-xl md:text-3xl">
            {movieTitle}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
