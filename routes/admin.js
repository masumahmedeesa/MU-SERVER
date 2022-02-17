const express = require('express')
const route = express.Router()

const AdminController = require('../controllers/adminController')

const {
  testAPiServer,
  createDepartment,
  retrieveAllDepartments,
  createCourse,
  retrieveCourses,
  studentRegistration,
} = AdminController

route.get('/test', testAPiServer)

route.post('/createDepartment', createDepartment)
route.get('/departments', retrieveAllDepartments)
route.post('/createCourse', createCourse)
route.get('/courses', retrieveCourses)
route.post('/register', studentRegistration)

module.exports = route
