const {Router} = require('express');
const router = Router();

import {getCharById} from '../controllers/getCharById.js';
import {login} from '../controllers/login.js';
import { postFav, deleteFav } from '../controllers/handleFavorites.js';

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);


export default router;