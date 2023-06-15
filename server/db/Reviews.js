const { validate } = require('webpack');
const conn = require('./conn');
const { INTEGER, UUID, UUIDV4 } = conn.Sequelize;

const Reviews = conn.define('review', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  score: {
    type: INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  productId: {
    type: UUID,
    allowNull: false
  },
  userId: {
    type: UUID,
    allowNull: false
  }
});

module.exports = Reviews;