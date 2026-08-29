import {Router} from 'express'
import { verifyToken } from '../middleware/verifyToken.js'
import * as monitorController from "../controllers/monitor.controller.js"


const router = Router()

router.post("/",verifyToken,monitorController.addUrl)
router.get("/",verifyToken,monitorController.getUrl)
export default router