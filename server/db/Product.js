const { DOUBLE } = require('sequelize');
const conn = require('./conn');
const { STRING, UUID, UUIDV4 } = conn.Sequelize;

const Product = conn.define('product', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: DOUBLE,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false
  }
});

Product.prototype.makeReview = async function ({ score }) {
  let review = await conn.models.review.create({
    productId: this.id,
    score: score
  });
  return review;
}

Product.prototype.getReviews = async function () {
  let reviews = await conn.models.review.findAll({
    where: {
      productId: this.id
    }
  });
  return reviews;
}

module.exports = Product;
