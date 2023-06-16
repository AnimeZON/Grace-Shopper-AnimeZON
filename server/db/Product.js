const { DOUBLE } = require('sequelize');
const conn = require('./conn');
const { STRING, UUID, UUIDV4, TEXT } = conn.Sequelize;

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
    type: TEXT,
    allowNull: false
  }
});

module.exports = Product;
