const notesRoute = require("./noteRoute");
const userRoute = require('./userRoute')

// exports multiple router
module.exports = (app) => {
  app.use("/notes", notesRoute);
  app.use("/users", userRoute )
};
