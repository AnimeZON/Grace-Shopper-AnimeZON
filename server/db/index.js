const conn = require('./conn');
const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const LineItem  = require('./LineItem');

Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product);

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  const [moe, lucy, larry, luffy, zoro, nami, ethyl] = await Promise.all([
    User.create({ username: 'moe', password: '123', isAdmin: true, address: '1234 Baybay Street', payment: 'Credit', email: 'username@gmail.com' }),
    User.create({ username: 'lucy', password: '123', isAdmin: false, address: '1234 Baybay Street', payment: 'Credit', email: 'username@gmail.com' }),
    User.create({ username: 'larry', password: '123', isAdmin: true, address: '1234 Baybay Street', payment: 'Credit', email: 'username@gmail.com' }),
    Product.create({ name: 'Luffy', image: 'Picture.img', price: 234.45, description: 'A statue of Luffy', quantity: 10}),
    Product.create({ name: 'Zoro', image: 'Picture.img', price: 234.45, description: 'A statue of Zoro'}),
    Product.create({ name: 'Nami', image: 'Picture.img', price: 234.45, description: 'A statue of Nami'}),
    User.create({ username: 'ethyl', password: '123', isAdmin: true, address: '1234 Baybay Street', payment: 'Credit', email: 'username@gmail.com' }),
  ]);

  const cart = await ethyl.getCart();
  await ethyl.addToCart({ product: luffy, quantity: 3});
  await ethyl.addToCart({ product: zoro, quantity: 2});
  return {
    users: {
      moe,
      lucy,
      larry
    },
    products: {
      luffy,
      zoro,
      nami
    }
  };
};


module.exports = {
  syncAndSeed,
  User,
  Product
};
