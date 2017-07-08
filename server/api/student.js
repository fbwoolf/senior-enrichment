'use strict'

const router = require('express').Router();
const models = require('../../db/models');
const Campus = models.Campus;

router.get('/', function (req, res, next) {
  Student.findAll()
  .then(students => res.json(students))
  .catch(next);
});

router.param('studentId', function (req, res, next, id) {
  Student.findById(id)
  .then(student => {
    if (!student) {
      const err = Error('Student not found');
      err.status = 404;
      throw err
    }
    req.student = student;
    next();
    return null;
  })
  .catch(next);
});

router.get('/:studentId', function (req, res) {
  res.json(req.student);
});

router.post('/', function (req, res, next) {
  Student.create(req.body)
  .then(student => res.status(201).json(student))
  .catch(next);
});

router.put('/:studentId', function (req, res, next) {
  req.student.update(req.body)
  .then(student => res.status(200).json(student))
  .catch(next);
});

router.delete('/:studentId', function (req, res, next) {
  req.student.destroy()
  .then(() => res.status(204).end())
  .catch(next);
});

module.exports = router;