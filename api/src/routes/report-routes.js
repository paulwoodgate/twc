'use strict';

import express from 'express';
import {
  getAllReports,
  getReport,
  getReportYears,
  getYearReports,
  createReport,
  deleteReport,
  updateReport
} from '../controllers/report-controller';

const router = express.Router();

router.get('/', getAllReports);
router.get('/years', getReportYears);
router.get('/:year', getYearReports);
router.get('/detail/:id', getReport);
router.put('/', updateReport);
router.post('/', createReport);
router.delete('/', deleteReport);

export default router;
