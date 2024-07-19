import Head from "next/head";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Row from "./components/Row";
import requests from "./utils/requests";
import Modal from "./components/Modal";
import useMovies from "./hooks/useMovies";
import { Movie } from "../../typings";

// interface Props {
//   netflixOriginals: Movie[];
//   trendingNow: Movie[];
//   topRated: Movie[];
//   actionMovies: Movie[];
//   comedyMovies: Movie[];
//   horrorMovies: Movie[];
//   romanceMovies: Movie[];
//   documentaries: Movie[];
// }

export default async function Home() {
  // const {
  //   netflixOriginals,
  //   trendingNow,
  //   topRated,
  //   actionMovies,
  //   comedyMovies,
  //   horrorMovies,
  //   romanceMovies,
  //   documentaries,
  // } = useMovies();

  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals.results} />
        <section className="md:space-y-24 ">
          <Row title="Trending Now" movies={trendingNow.results} />
          <Row title="Top Rated" movies={topRated.results} />
          <Row title="Action Thrillers" movies={actionMovies.results} />
          {/* My List Component */}
          <Row title="Comedies" movies={comedyMovies.results} />
          <Row title="Scary Movies" movies={horrorMovies.results} />
          <Row title="Romance Movies" movies={romanceMovies.results} />
          <Row title="Documentaries" movies={documentaries.results} />
        </section>
      </main>
      <Modal />
    </div>
  );
}
