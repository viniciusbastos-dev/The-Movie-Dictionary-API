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

export const formatMediaData = (
  mediaData: any,
  type: "movie" | "tv"
): MovieData | SerieData => {
  const isSerie = type === "tv";

  const formattedReleaseDate = format(
    new Date(
      (isSerie ? mediaData.first_air_date : mediaData.release_date) +
        "T03:00:00Z"
    ),
    "dd/MM/yyyy"
  );

  const formattedData = {
    ...mediaData,
    background: imageURL + mediaData.backdrop_path,
    poster: imageURL + mediaData.poster_path,
    release_date: formattedReleaseDate,
  };

  if (isSerie) {
    formattedData.title = mediaData.name;
    delete formattedData.first_air_date;
    delete formattedData.name;
  }

  delete formattedData.backdrop_path;
  delete formattedData.poster_path;

  return formattedData;
};
