### It's a demo server created for educational purposes. Main goal is to teach fellow students about recent technology, e.g. Node ExpressJS.

# REQUIREMENTS

- VSCode/WebStrom
- Node
- POSTMAN
- Mongodb
- Mongodb Compass

# GET Started

- After installation of above requirements on your environment, follow the following steps.
- Create a file named `.env`
- Copy everything from `.env.example`, and paste to `.env`
- On terminal, use command `npm install`
- Then use `npm start` to run the project.

# CONNECT To MongoDB Atlas

- On `.env`, please replace `PUT_YOUR_MONGODB_ATLAS_DATABASE_URL_HERE` with `mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.sdfj9.mongodb.net/MetropolitanServer?retryWrites=true&w=majority`
- On `configs/db.js`, comment `const databaseURL = process.env.DATABASE_URL`, and uncomment `const databaseURL = process.env.GLOBAL_DATABASE_URL`.
- Now GOOD TO GO!

# DATABASE-DESIGN

- department
- course [ fk/ref: departmentId ]
- student [ fk/ref: departmentId ]
- course-assigns [ ref: studentId, ref: courseId ]
