// Local Imports
const teacher = require("./teacher.routes");
const grade = require("./grade.routes")

class Router {
  static declareRoutes = (server) => {
    // Routes
    server.use("/teachers", teacher);
    server.use("/grades", grade);

    // default index route
    server.get("/", () =>
      console.log(
        "Well, What Can I Say? Thanks for trying this project, I guess..."
      )
    );
  };
}

module.exports = Router;
