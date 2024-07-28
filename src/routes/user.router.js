const { getAll, create, getOne, destroy, update } = require('../controllers/user.controllers')
const express = require('express');

// Creating the routes for users

const userRouter = express.Router();

userRouter.route("/") //STATIC ROUTES
  .get(getAll)
  .post(create)

userRouter.route("/:id") //DYNAMIC ROUTES
  .get(getOne)
  .delete(destroy)
  .put(update)

module.exports = userRouter;