const router = require('express').Router()
const { User } = require('../db')


router.get('/', async( req, res, next) => {
  try{
    const users = await User.findAll()
    res.json(users)
  } catch(err) {
    next(err)
  }
})

router.get('/:id', async(req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.json(user)
  } catch(err) {
    next(err)
  }
})

router.post('/', async(req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user)
  }catch(err) {
    next(err)
  }
})

router.put('/:id', async(req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(await user.update(req.body));
  } catch(err) {
    next(err)
  }
})

router.delete('/:productId', async(req, res, next) => {
  try {
    const user = await User.findByPk(req.params.productId);
    await user.destry();
    res.send(user)
  } catch(err) {
    next(err)
  }
})




module.exports = router