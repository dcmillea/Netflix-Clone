import React from "react";
import { Movie } from "../../../typings";
import Image from "next/image";

interface Props {
  // movie: Movie | DocumentData; --> when using firebase
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  return (
    <div className="relative cursor-pointer h-28 min-w-[180px] transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        fill
        alt="thumbnail-Icon"
        sizes="w-full"
      />
    </div>
  );
}

export default Thumbnail;
