import { Request, Response, Router } from "express";
import API from "../utils/axiosInstance";
import { formatMovieData, formatSerieData } from "../utils/formatData";
const trendingRouter = Router();

trendingRouter.get(
  "/:mediaType/:timeWindow",
  async (request: Request, response: Response) => {
    const { mediaType, timeWindow } = request.params;

    const apiResponse = await API.get(
      `/trending/${mediaType}/${timeWindow}?language=pt-BR`
    );

    if (mediaType === "movie") {
      const formattedData = apiResponse.data.results.map((item: any) =>
        formatMovieData(item)
      );

      response.json(formattedData);
    } else if (mediaType === "tv") {
      const formattedData = apiResponse.data.results.map((item: any) =>
        formatSerieData(item)
      );

      response.json(formattedData);
    }
  }
);

export default trendingRouter;
