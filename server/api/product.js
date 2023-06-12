const router = require('express').Router()
const { Product } = require('../db')

// route for all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

// Get /api/products/:productId
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id)
    res.json(product)
  } catch (err) {
    next(err)
  }
})


router.post('/', async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product)
  } catch (err) {
    next(err)
  }
})

// edit product
router.put('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(await product.update(req.body));
  } catch (err) {
    next(err)
  }
})

// delete product
router.delete('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    await product.destry();
    res.send(product)
  } catch (err) {
    next(err)
  }
})

router.post('/review/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params);
    res.send(await product.makeReview(req.body));
  } catch (err) {
    next(err);
  }
})

router.get('review/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params);
    res.send(await product.getReviews());
  } catch (err) {
    next(err);
  }
})

module.exports = router