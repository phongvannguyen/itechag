const express = require('express');
const app = express();
const studentRoutes = express.Router();


let Student = require('../models/Student');

studentRoutes.route('/add').post(function (req, res) {
  let student = new Student(req.body);
  student.save()
    .then(student => {
      res.status(200).json({'student': 'student in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

studentRoutes.route('/').get(function (req, res) {
    Student.find(function (err, students){
    if(err){
      console.log(err);
    }
    else {
      res.json(students);
    }
  });
});

module.exports = studentRoutes;
