import { format } from "date-fns";

interface MovieData {
  background: string;
  poster: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface SerieData {
  background: string;
  id: number;
  original_name: string;
  overview: string;
  poster: string;
  media_type: string;
  adult: boolean;
  title: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

const imageURL = "https://image.tmdb.org/t/p/original";

export const formatMovieData = (movieData: any): MovieData => {
  const formattedReleaseDate = format(
    new Date(movieData.release_date + "T03:00:00Z"),
    "dd/MM/yyyy"
  );

  movieData.background = imageURL + movieData.backdrop_path;
  movieData.poster = imageURL + movieData.poster_path;
  movieData.release_date = formattedReleaseDate;

  delete movieData.backdrop_path;
  delete movieData.poster_path;

  return movieData;
};

export const formatSerieData = (serie: any): SerieData => {
  const formattedReleaseDate = format(
    new Date(serie.first_air_date + "T03:00:00Z"),
    "dd/MM/yyyy"
  );

  serie.title = serie.name;
  serie.background = imageURL + serie.backdrop_path;
  serie.poster = imageURL + serie.poster_path;
  serie.release_date = formattedReleaseDate;

  delete serie.backdrop_path;
  delete serie.poster_path;
  delete serie.first_air_date;
  delete serie.name;

  return serie;
};
