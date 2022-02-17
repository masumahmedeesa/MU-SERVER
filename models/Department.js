const mongoose = require('mongoose')
const {Schema} = mongoose

const DepartmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  shortform: {
    type: String,
    unique: true,
    index: true,
    required: true,
  },
  address: {
    type: String,
    default: null,
  },
})

const Department = mongoose.model('Department', DepartmentSchema)
module.exports = Department
