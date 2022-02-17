const mongoose = require('mongoose')
require('dotenv').config()

const databaseURL = process.env.DATABASE_URL
// const databaseURL = process.env.GLOBAL_DATABASE_URL

mongoose
  .connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.log(err))
