"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const trending_1 = __importDefault(require("./controllers/trending"));
const middleware_1 = require("./utils/middleware");
const app = (0, express_1.default)();
app.use("/api/trending", trending_1.default);
app.use(middleware_1.unknownEndpoint);
app.use(middleware_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map