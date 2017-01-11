const Sequelize = require('sequelize')
const db = require('APP/db')

// Orders will be assocaited with productOrders which allow for Quantity
const Order = db.define('orders', {
  status: {
    //pending, shipping, completed, canceled, returned
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'pending'
  }
})

  module.exports = Order
