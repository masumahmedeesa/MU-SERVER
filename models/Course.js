const mongoose = require('mongoose')
const {Schema} = mongoose

const CourseSchema = new Schema(
  {
    departmentId: {
      type: Schema.Types.ObjectId,
      ref: 'Department',
      required: true,
    },
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
    credit: {
      type: Number,
      required: true,
    },
  },
  {timestamps: true},
)

const Course = mongoose.model('Course', CourseSchema)
module.exports = Course
