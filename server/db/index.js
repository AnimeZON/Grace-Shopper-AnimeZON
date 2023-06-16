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
  const [moe, lucy, larry, luffy, zoro, nami, obito, itachi, eren, ulquiorra, ichigo, chopper, pain, ethyl] = await Promise.all([

    User.create( userData1 ),
    User.create( userData2 ),
    User.create( userData3 ),
    Product.create({ name: 'Luffy', image: 'https://tinyurl.com/2p8ea67m', price: 234.45, description: '【First name】:One piece Luffy Gear 5th Anime Figure 【Character】:Luffy 【Material】: PVC 【Packaging 】: color box/no box 【Size】: 20cm 【Note】: 1: due to factors such as lighting, display color deviation, personal understanding of color and other factors, it is unavoidable that there will be some color difference between the actual object and the image. 2: if you buy more than 5 pieces of products, you can contact us to give someDiscounts, it is more cost-effective to buy more than 5 pieces' }),
    Product.create({ name: 'Zoro', image: 'https://tinyurl.com/juzxdy6y', price: 234.45, description: 'This figurine represents the famous character of Zoro, member of the crew of Luffy in the manga One Piece. Zoro is represented holding his 9 swords, ready to fight. The figurine is high quality and measures approximately 35 cm high. The details of the sculpture are neat, with a realistic painting that highlights the different elements of the figure. The nine swords are securely attached to Zoros hands and also feature authentic details.'}),
    Product.create({ name: 'Nami', image: 'https://tinyurl.com/mrxtwcfe', price: 234.45, description: 'Inspired by the chapter 710 colorspread of the manga, Epoch Studio presents their Nami 1/4 Scale statue. Nami playfully holds a giant paintbrush while a scroll with lillustrated cherry blossoms seemingly comes to life. Effortlessly balanced on a scrolls, Nami gives that signature wink. Materials: Poly + PU + PVC + PC Product Dimensions: (Est.) H 68cm x W 49cm x L 44cm Product Weight: (Est.) 9.5kg' }),
    Product.create({ name: 'Obito', image: 'https://tinyurl.com/2nv5essr', price: 500.00, description: 'A statue of Obito' }),
    Product.create({ name: 'Itachi', image: 'https://tinyurl.com/yn92unnn', price: 159.99, description: 'A statue of Itachi' }),
    Product.create({ name: 'Eren', image: 'https://tinyurl.com/y99nxsh2', price: 49.99, description: 'A statue of Eren' }),
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
      itachi,
      eren,
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
