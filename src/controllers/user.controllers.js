const catchError = require('../utils/catchError');
const User = require('../models/User');

// Creating the getAll controller for all users

const getAll = catchError(async(req, res) => {
    const result = await User.findAll() 
    return res.json(result)
});

// Creating the post controller to create the users

const create = catchError(async(req, res) => {
    const result = await User.create(req.body) 
    return res.status(201).json(result)
});

// Creating the getOne controller to fetch a user

const getOne = catchError(async(req,res) => {
  const { id } = req.params
  const result = await User.findByPk(id)
  if(!result) return res.sendStatus(404)
  return res.json(result)
})

// Creating the delete controller to remove a user

const destroy = catchError(async(req,res) => {
    const { id } = req.params
    const result = await User.destroy({where:{id}})

    if(!result) return res.sendStatus(404)
    
    return res.sendStatus(204)
})

// Creating the update controller to update a user

const update = catchError(async (req, res) => {
  const { id } = req.params
  const user = await User.update(
    req.body,
    { where: { id }, returning: true }
  )
  if (user[0] === 0) return res.sendStatus(404)
  return res.status(200).json(user[1][0])
})


module.exports = {
  getAll,
  create,
  getOne,
  destroy,
  update
}