"use client";
import React, { useRef, useState } from "react";
import { Movie } from "../../../typings";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Thumbnail from "./Thumbnail";

interface Props {
  // movie: Movie | DocumentData[]; --> when using firebase
  title: string;
  movies: Movie[];
}

function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 md:text-2xl cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          onClick={() => handleClick("left")}
          className={`absolute group-hover:opacity-100 transition hover:scale-125 opacity-0 top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer ${
            !isMoved && "hidden"
          }`}
        />

        <div
          ref={rowRef}
          className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2"
        >
          {movies &&
            movies.map((movie) => <Thumbnail key={movie.id} film={movie} />)}
        </div>

        <ChevronRightIcon
          onClick={() => handleClick("right")}
          className={`absolute group-hover:opacity-100 transition hover:scale-125 opacity-0 top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer`}
        />
      </div>
    </div>
  );
}

export default Row;
