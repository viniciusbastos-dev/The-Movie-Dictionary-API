import { Request, Response, Router } from "express";
import API from "../utils/axiosInstance";
import { formatMediaData } from "../utils/formatData";
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
        formatMediaData(item, item.media_type)
      );

      response.json(formattedData);
    } else if (mediaType === "tv") {
      const formattedData = apiResponse.data.results.map((item: any) =>
        formatMediaData(item, item.media_type)
      );

      response.json(formattedData);
    } else if (mediaType === "all") {
      const formattedData = apiResponse.data.results.map((item: any) =>
        formatMediaData(item, item.media_type)
      );

      response.json(formattedData.slice(0, 5));
    } else {
      response.status(400).json({ error: "Erro na requisição" });
    }
  }
);

export default trendingRouter;
