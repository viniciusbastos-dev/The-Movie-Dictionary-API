"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMediaData = void 0;
const date_fns_1 = require("date-fns");
const imageURL = "https://image.tmdb.org/t/p/original";
const formatMediaData = (mediaData, type) => {
    const isSerie = type === "tv";
    const formattedReleaseDate = (0, date_fns_1.format)(new Date((isSerie ? mediaData.first_air_date : mediaData.release_date) +
        "T03:00:00Z"), "dd/MM/yyyy");
    const formattedData = Object.assign(Object.assign({}, mediaData), { background: imageURL + mediaData.backdrop_path, poster: imageURL + mediaData.poster_path, release_date: formattedReleaseDate });
    if (isSerie) {
        formattedData.title = mediaData.name;
        delete formattedData.first_air_date;
        delete formattedData.name;
    }
    delete formattedData.backdrop_path;
    delete formattedData.poster_path;
    return formattedData;
};
exports.formatMediaData = formatMediaData;
//# sourceMappingURL=formatData.js.map