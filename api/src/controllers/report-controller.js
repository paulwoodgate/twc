'use strict';

import moment from 'moment';
import Report from '../models/report-model';

export function getAllReports(req, res) {
  Report.find({})
    .sort({ date: 'asc' })
    .exec((err, results) => {
      if (err) {
        res.status(500).json({ message: err });
      } else {
        res.status(200).json({ Reports: results });
      }
    });
}

export function getYearReports(req, res) {
  const yearStart = `${req.params.year}0101`;
  const start = moment(yearStart, 'YYYYMMDD').startOf('year');
  const finish = moment(yearStart, 'YYYYMMDD').endOf('year');
  Report.find({ date: { $gte: start, $lte: finish } })
    .sort({ date: 'asc' })
    .select('id title date')
    .exec((err, results) => {
      if (err) {
        res.status(500).json({ message: err });
      } else {
        res.status(200).json({ Reports: results });
      }
    });
}

export function getReport(req, res) {
  const id = req.params.id;
  Report.findOne({ id: id }).exec((err, Report) => {
    if (err) {
      res.status(500).json({ message: err });
    } else if (!Report) {
      res.status(404);
    } else {
      res.status(200).json(Report);
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
