const router = require('express').Router()
const { User } = require('../db')

// route for all products
router.get('/', async( req, res, next) => {
  try{
    const users = await User.findAll()
    res.json(users)
  } catch(err) {
    next(err)
  }
})

// Get /api/products/:productId
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

// edit product
router.put('/:id', async(req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(await user.update(req.body));
  } catch(err) {
    next(err)
  }
})

// delete product
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