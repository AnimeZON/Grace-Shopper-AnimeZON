const conn = require('./conn');
const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const LineItem = require('./LineItem');

Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product);

const userData1 = {
  username: 'moe',
  password: '123',
  isAdmin: true,
  address: '1234 Baybay Street',
  payment: 'Credit',
  email: 'username@gmail.com',
  country: 'United States',
  fullName: 'Moe Johnson',
  phone: '777-888-9999',
  city: 'South City',
  contState: 'Florida',
  zip: "11224"
}

const userData2 = {
  username: 'lucy',
  password: '123',
  isAdmin: true,
  address: '1234 Baybay Street',
  payment: 'Credit',
  email: 'username@gmail.com',
  country: 'United States',
  fullName: 'Lucy Gents',
  phone: '777-888-9999',
  city: 'South City',
  contState: 'Florida',
  zip: "11224"
}

const userData3 = {
  username: 'larry',
  password: '123',
  isAdmin: true,
  address: '1234 Baybay Street',
  payment: 'Credit',
  email: 'username@gmail.com',
  country: 'United States',
  fullName: 'Larry Long',
  phone: '777-888-9999',
  city: 'South City',
  contState: 'Florida',
  zip: "11224"
}

const userData4 = {
  username: 'ethyl',
  password: '123',
  isAdmin: true,
  address: '1234 Baybay Street',
  payment: 'Credit',
  email: 'username@gmail.com',
  country: 'United States',
  fullName: 'Ethyl Drake',
  phone: '777-888-9999',
  city: 'South City',
  contState: 'Florida',
  zip: "11224"
}

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const [moe, lucy, larry, luffy, zoro, nami, ethyl] = await Promise.all([
    User.create( userData1 ),
    User.create( userData2 ),
    User.create( userData3 ),
    Product.create({ name: 'Luffy', image: 'https://tinyurl.com/4r84tr74', price: 234.45, description: 'A statue of Luffy', quantity: 10 }),
    Product.create({ name: 'Zoro', image: 'https://tinyurl.com/juzxdy6y', price: 234.45, description: 'A statue of Zoro' }),
    Product.create({ name: 'Nami', image: 'https://tinyurl.com/mrxtwcfe', price: 234.45, description: 'A statue of Nami' }),
    User.create(userData4),
  ]);

  const cart = await ethyl.getCart();
  await ethyl.addToCart({ product: luffy, quantity: 3 });
  await ethyl.addToCart({ product: zoro, quantity: 2 });
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
