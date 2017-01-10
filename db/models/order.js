const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  status: {
    //pending, shipping, completed, canceled, returned
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'pending'
  }
})

  module.exports = Order
