import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayMovieList } from '../Controllers/movie-list';

router.get('/movie-list', AuthGuard, DisplayMovieList);

export default router;
