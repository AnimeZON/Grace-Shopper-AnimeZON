const Sequelize = require('sequelize');
const config = {
    // database: 'acme_shopping_db',
    // dialect: 'postgres',
    // logging: false,
    // password: 'password',
    // username: 'postgres',
};

if(process.env.QUIET){
  config.logging = false;
}
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_shopping_db', config);

module.exports = conn;
