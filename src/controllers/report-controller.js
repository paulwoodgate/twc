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
    const results = await Report.find({ date: { $gte: start, $lte: finish }, subjectType: { $ne: 'Day' } })
      .sort({ date: 'asc' })
      .select('id title date endDate formattedDate year coverPhoto')
      .exec();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getReport = async (req, res) => {
  try {
    const id = req.params.id;
    let dayReports = [];
    const getDayReports = async (id) => {
      dayReports = await Report.find({ id: { $regex: id + '-' } })
        .sort({ date: 'asc' })
        .select('id title date year formattedDate coverPhoto')
        .exec();

      return dayReports.map((r) => ({
        id: r.id,
        date: r.formattedDate,
        title: r.title,
        year: r.year,
        coverPhoto: r.coverPhoto
      }));
    };
    const data = await Report.findOne({ id: id }).exec();
    if (data) {
      if (data.subjectType === 'Group') {
        dayReports = await getDayReports(id);
      }

      const report = {
        id: data.id,
        date: data.date,
        endDate: data.endDate,
        formattedDate: data.formattedDate,
        year: data.year,
        title: data.title,
        report: data.report,
        coverPhoto: data.coverPhoto,
        subjectType: data.subjectType,
        walkRating: data.walkRating,
        reportBy: data.reportBy,
        photographer: data.photographer,
        photos: data.photos,
        days: dayReports
      };
      res.status(200).json(report);
    } else {
      res.status(404).json('Report not found');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
