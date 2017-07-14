'use strict'

const router = require('express').Router();
const { Campus } = require('../../db/models');

router.get('/', function (req, res, next) {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
});

router.param('campusId', function (req, res, next, id) {
  Campus.findById(id)
  .then(campus => {
    if (!campus) {
      const err = Error('Campus not found');
      err.status = 404;
      throw err
    }
    req.campus = campus;
    next();
    return null;
  })
  .catch(next);
});

router.get('/:campusId', function (req, res) {
  res.json(req.campus);
});

router.post('/', function (req, res, next) {
  Campus.create(req.body)
  .then(campus => res.status(201).json(campus))
  .catch(next);
});

router.put('/:campusId', function (req, res, next) {
  req.campus.update(req.body)
  .then(campus => res.status(200).json(campus))
  .catch(next);
});

router.delete('/:campusId', function (req, res, next) {
  req.campus.destroy()
  .then(() => res.status(204).end())
  .catch(next);
});

module.exports = router;