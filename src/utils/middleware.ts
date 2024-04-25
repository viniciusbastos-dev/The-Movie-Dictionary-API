import { NextFunction, Request, Response } from "express";

export const unknownEndpoint = (request: Request, response: Response) => {
  response.status(404).send({ error: "Endpoint desconhecido" });
};

export const errorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.error(error.message);

  next(error);
};
