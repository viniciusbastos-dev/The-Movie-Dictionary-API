"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSerieData = exports.formatMovieData = void 0;
const date_fns_1 = require("date-fns");
const imageURL = "https://image.tmdb.org/t/p/original";
const formatMovieData = (movieData) => {
    const formattedReleaseDate = (0, date_fns_1.format)(new Date(movieData.release_date + "T03:00:00Z"), "dd/MM/yyyy");
    movieData.background = imageURL + movieData.backdrop_path;
    movieData.poster = imageURL + movieData.poster_path;
    movieData.release_date = formattedReleaseDate;
    delete movieData.backdrop_path;
    delete movieData.poster_path;
    return movieData;
};
exports.formatMovieData = formatMovieData;
const formatSerieData = (serie) => {
    const formattedReleaseDate = (0, date_fns_1.format)(new Date(serie.first_air_date + "T03:00:00Z"), "dd/MM/yyyy");
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
exports.formatSerieData = formatSerieData;
//# sourceMappingURL=formatData.js.map