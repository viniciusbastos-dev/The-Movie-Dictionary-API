"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axiosInstance_1 = __importDefault(require("../utils/axiosInstance"));
const formatData_1 = require("../utils/formatData");
const trendingRouter = (0, express_1.Router)();
trendingRouter.get("/:mediaType/:timeWindow", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { mediaType, timeWindow } = request.params;
    const apiResponse = yield axiosInstance_1.default.get(`/trending/${mediaType}/${timeWindow}?language=pt-BR`);
    if (mediaType === "movie") {
        const formattedData = apiResponse.data.results.map((item) => (0, formatData_1.formatMediaData)(item, item.media_type));
        response.json(formattedData);
    }
    else if (mediaType === "tv") {
        const formattedData = apiResponse.data.results.map((item) => (0, formatData_1.formatMediaData)(item, item.media_type));
        response.json(formattedData);
    }
    else if (mediaType === "all") {
        const formattedData = apiResponse.data.results.map((item) => (0, formatData_1.formatMediaData)(item, item.media_type));
        response.json(formattedData.slice(0, 5));
    }
    else {
        response.status(400).json({ error: "Erro na requisição" });
    }
}));
exports.default = trendingRouter;
//# sourceMappingURL=trending.js.map