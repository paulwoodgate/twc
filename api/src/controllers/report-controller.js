'use strict';

import Report from '../models/report-model';

export function getAllReports(req, res) {
  Report.find({})
    .sort({ date: 'asc' })
    .exec((err, results) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(results);
      }
    });
}

export function getReportYears(req, res) {
  Report.distinct('year').exec((err, results) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(results.sort());
    }
  });
}
export function getYearReports(req, res) {
  const start = new Date(req.params.year, 0, 1);
  const finish = new Date(req.params.year, 11, 31);
  Report.find({ date: { $gte: start, $lte: finish } })
    .sort({ date: 'asc' })
    .select('id title date formattedDate coverPhoto')
    .exec((err, results) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(results);
      }
    });
}

export function getReport(req, res) {
  const id = req.params.id;
  Report.findOne({ id: id }).exec((err, report) => {
    if (err) {
      res.status(500).json(err);
    } else if (!report) {
      res.status(404);
    } else {
      res.status(200).json(report);
    }
  });
}

export function updateReport(req, res) {
  res.send('update report');
}

export function createReport(req, res) {
  res.send('create report');
}

export function deleteReport(req, res) {
  res.send('delete report');
}
