'use strict';

import Report from '../models/report-model';

exports.getAllReports = async (req, res) => {
  try {
    const results = await Report.find({}).sort({ date: 'asc' }).exec();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getReportYears = async (req, res) => {
  try {
    const results = await Report.distinct('year').exec();
    res.status(200).json(results.sort());
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getYearReports = async (req, res) => {
  try {
    const start = new Date(req.params.year, 0, 1);
    const finish = new Date(req.params.year, 11, 31);
    const results = await Report.find({ date: { $gte: start, $lte: finish } })
      .sort({ date: 'asc' })
      .select('id title date formattedDate coverPhoto')
      .exec();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getReport = async (req, res) => {
  try {
    const id = req.params.id;
    const report = await Report.findOne({ id: id }).exec();
    if (report) {
      res.status(200).json(report);
    } else {
      res.status(404).json('Report not found');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
