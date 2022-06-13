"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayMovieList = void 0;
const movie_1 = __importDefault(require("../Models/movie"));
const Util_1 = require("../Util");
function DisplayMovieList(req, res, next) {
    movie_1.default.find(function (err, moviesCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Movie List', page: 'movie-list', movies: moviesCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayMovieList = DisplayMovieList;
//# sourceMappingURL=movie-list.js.map