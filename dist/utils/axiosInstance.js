"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const axiosInstance = axios_1.default.create({
    baseURL: "https://api.themoviedb.org/3",
});
axiosInstance.interceptors.request.use((config) => {
    config.headers["Authorization"] = `Bearer ${process.env.TMDB_AUTHORIZATION}`;
    return config;
}, (error) => {
    return Promise.reject(error);
});
exports.default = axiosInstance;
