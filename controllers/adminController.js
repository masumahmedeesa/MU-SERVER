const Department = require('../models/Department')
const Course = require('../models/Course')
const Student = require('../models/Student')

const {serverError, resourceError} = require('../utils/errors')

exports.testAPiServer = (request, response, next) => {
  return response.status(200).json({
    message: 'HELLO WORLD!',
  })
}

exports.createDepartment = (request, response, next) => {
  const {name, shortform, address} = request.body
  Department.findOne({shortform})
    .then((exist) => {
      if (exist) {
        return resourceError(response, 'Department already exists!')
      }
      var _department = new Department({
        name,
        shortform,
        address,
      })
      _department
        .save()
        .then((saved) => {
          return response.status(200).json({
            details: saved,
            message: 'SUCCESS',
          })
        })
        .catch((error) => serverError(response, error))
    })
    .catch((error) => serverError(response, error))
}

exports.retrieveAllDepartments = (request, response, next) => {
  Department.find({}).exec((error, departments) => {
    if (error) {
      return serverError(response, error)
    }
    return response.status(200).json({
      details: departments,
      message: 'SUCCESS',
    })
  })
}

exports.createCourse = (request, response, next) => {
  const {name, shortform, credit, departmentId} = request.body
  Course.findOne({shortform})
    .then(async (exist) => {
      if (exist) {
        return resourceError(response, 'Course already exists!')
      }
      const saved = await new Course({
        name,
        shortform,
        credit,
        departmentId,
      }).save()
      return response.status(200).json({
        details: saved,
        message: 'SUCCESS',
      })
    })
    .catch((error) => serverError(response, error))
}

exports.retrieveCourses = (request, response, next) => {
  Course.find({})
    .populate('departmentId', 'name shortform')
    .sort({departmentId: 1, _id: -1})
    // createdAt: -1
    // .sort({departmentId: 'asc', _id: 'desc'})
    .exec((error, courses) => {
      if (error) {
        return serverError(response, error)
      }
      return response.status(200).json({
        details: courses,
        message: 'SUCCESS',
      })
    })
}

//() => {}

exports.studentRegistration = async (request, response, next) => {
  const {departmentId, name, regId} = request.body
  try {
    const exist = await Student.findOne({regId})
    if (exist) {
      return resourceError(response, 'Student already exists!')
    }
    var _student = await new Student({departmentId, name, regId}).save()
    return response.status(200).json({
      details: _student,
      message: 'SUCCESS',
    })
  } catch (error) {
    return serverError(response, error)
  }
}
