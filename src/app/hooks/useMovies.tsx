"use client";

import { useState, useEffect } from "react";

const useMovieData = () => {
  const [movieData, setMovieData] = useState({
    netflixOriginals: [],
    trendingNow: [],
    topRated: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
    documentaries: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = {
          fetchNetflixOriginals: "https://api.example.com/netflixOriginals",
          fetchTrending: "https://api.example.com/trending",
          fetchTopRated: "https://api.example.com/topRated",
          fetchActionMovies: "https://api.example.com/actionMovies",
          fetchComedyMovies: "https://api.example.com/comedyMovies",
          fetchHorrorMovies: "https://api.example.com/horrorMovies",
          fetchRomanceMovies: "https://api.example.com/romanceMovies",
          fetchDocumentaries: "https://api.example.com/documentaries",
        };

        const responses = await Promise.all([
          fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
          fetch(requests.fetchTrending).then((res) => res.json()),
          fetch(requests.fetchTopRated).then((res) => res.json()),
          fetch(requests.fetchActionMovies).then((res) => res.json()),
          fetch(requests.fetchComedyMovies).then((res) => res.json()),
          fetch(requests.fetchHorrorMovies).then((res) => res.json()),
          fetch(requests.fetchRomanceMovies).then((res) => res.json()),
          fetch(requests.fetchDocumentaries).then((res) => res.json()),
        ]);

        setMovieData({
          netflixOriginals: responses[0]?.results,
          trendingNow: responses[1]?.results,
          topRated: responses[2]?.results,
          actionMovies: responses[3]?.results,
          comedyMovies: responses[4]?.results,
          horrorMovies: responses[5]?.results,
          romanceMovies: responses[6]?.results,
          documentaries: responses[7]?.results,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return movieData;
};

export default useMovieData;
