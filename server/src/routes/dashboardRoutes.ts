import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController";


const router = Router();

router.route('/').get(getDashboardMetrics);

export default router;