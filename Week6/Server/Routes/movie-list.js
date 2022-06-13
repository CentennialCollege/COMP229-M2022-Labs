"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const movie_list_1 = require("../Controllers/movie-list");
router.get('/movie-list', Util_1.AuthGuard, movie_list_1.DisplayMovieList);
exports.default = router;
//# sourceMappingURL=movie-list.js.map