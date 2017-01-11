'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Order = require('./order')
const Product = require('./product')
const productOrder = require('./productOrder')
const Review = require('./review')
const Address = require('./address')
const Tag = require('./tags')

// Associating Reviews to Users
User.hasMany(Review)
Review.belongsTo(User, {as: 'author'})

// Associating Reviews to Products
Product.hasMany(Review)
Review.belongsTo(Product)

// Associating Orders to Users
User.hasMany(Order)
Order.belongsTo(User)

// Associating Address to User
User.hasMany(Address)
Address.belongsTo(User)

// Associating Individual Products/Quantities to Total Orders
Order.hasMany(productOrder)
productOrder.belongsTo(Order)
productOrder.belongsTo(Product, {as: 'ordered_product'})

Product.hasMany(Tag)
Tag.belongsTo(Product)

module.exports = {User, Order, Product, productOrder, Review, Address}
