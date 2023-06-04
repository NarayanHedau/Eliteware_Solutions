const { usersRoutes } = require("../services/users");
const { itemRoutes } = require("../services/items")


const initialize = (app) => {
  app.use("/api/users", usersRoutes);
  app.use("/api/item", itemRoutes)


  app.use("/authError", (req, res, next) => {
    return next(new Error("DEFAULT_AUTH"));
  });

};



module.exports = { initialize };