const conn = require('./conn');
const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const LineItem = require('./LineItem');
const Reviews = require('./Reviews');

Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product);
Product.hasMany(Reviews);
Reviews.belongsTo(Product);
Reviews.belongsTo(User)

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

const userData5 = {
  username: 'cust1',
  password: '123',
  isAdmin: false,
  address: '1234 Baybay Street',
  payment: 'Credit',
  email: 'cust1@gmail.com',
  country: 'United States',
  fullName: 'Bilbo Baggins',
  phone: '777-888-9999',
  city: 'South City',
  contState: 'Florida',
  zip: "11224"
}

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const [moe, lucy, larry, luffy, zoro, nami, obito, ulquiorra, ichigo, chopper, pain, ethyl] = await Promise.all([
    User.create( userData1 ),
    User.create( userData2 ),
    User.create( userData3 ),
    Product.create({ name: 'Luffy', image: 'https://tinyurl.com/2p8ea67m', price: 234.45, description: 'A statue of Luffy', quantity: 10 }),
    Product.create({ name: 'Zoro', image: 'https://tinyurl.com/juzxdy6y', price: 234.45, description: 'A statue of Zoro' }),
    Product.create({ name: 'Nami', image: 'https://tinyurl.com/mrxtwcfe', price: 234.45, description: 'A statue of Nami' }),
    Product.create({ name: 'Obito', image: 'https://tinyurl.com/2nv5essr', price: 500.00, description: 'A statue of Obito' }),
    Product.create({ name: 'Ulquiorra', image: 'https://tinyurl.com/5fyj6dz5', price: 200.00, description: 'A statue of Ulquiorra' }),
    Product.create({ name: 'Ichigo', image: 'https://tinyurl.com/54t7fvrk', price: 500.00, description: 'A statue of Ichigo' }),
    Product.create({ name: 'Chopper', image: 'https://tinyurl.com/3xjvtw6w', price: 100.00, description: 'A statue of Chopper' }),
    Product.create({ name: 'Pain', image: 'https://tinyurl.com/yc3rh8bf', price: 249.00, description: 'A statue of Pain' }),
    User.create(userData4),
    User.create(userData5),
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
      nami,
      obito,
      ulquiorra,
      ichigo,
      chopper,
      pain
    }
  };
};


module.exports = {
  syncAndSeed,
  User,
  Product,
  Reviews
};
