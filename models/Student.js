const mongoose = require('mongoose')
const {Schema} = mongoose

const StudentSchema = new Schema(
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
    regId: {
      type: Number,
      unique: true,
      index: true,
      required: true,
    },
  },
  {timestamps: true},
)

const Student = mongoose.model('Student', StudentSchema)
module.exports = Student
