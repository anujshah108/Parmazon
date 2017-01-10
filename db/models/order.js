const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  status: {
    type: Sequelize.ENUM('pending', 'shipped', 'completed', 'canceled', 'returned'),
    allowNull: false,
    defaultValue: 'pending'
  }
})

  module.exports = Order