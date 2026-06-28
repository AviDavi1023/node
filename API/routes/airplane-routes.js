import express from 'express'
const router = express.Router()


import {getAirplane, getAll} from '../controllers/airplane-controller.js';


router.get('/', getAll);
router.get('/:airplane', getAirplane);


export default router;
