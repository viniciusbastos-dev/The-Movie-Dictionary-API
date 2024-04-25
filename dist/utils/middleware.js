"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.unknownEndpoint = void 0;
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "Endpoint desconhecido" });
};
exports.unknownEndpoint = unknownEndpoint;
const errorHandler = (error, request, response, next) => {
    console.error(error.message);
    next(error);
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=middleware.js.map