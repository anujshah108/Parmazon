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

User.hasMany(Review)
Review.belongsTo(User, {as: 'author'})

Product.hasMany(Review)
Review.belongsTo(Product)

User.hasMany(Order)
Order.belongsTo(User)

User.hasMany(Address)
Address.belongsTo(User)

Order.hasMany(productOrder)
productOrder.belongsTo(Order)

module.exports = {User, Order, Product, productOrder, Review, Address}
