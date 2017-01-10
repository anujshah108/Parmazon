const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'pending'
  }
})

  module.exports = Order