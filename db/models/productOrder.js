const Sequelize = require('sequelize')
const db = require('APP/db')


// A way to allow orders to contain quantities for a single product

const ProductOrder = db.define('productOrders', {
  product: {
    type: Sequelize.JSON,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
})

module.exports = ProductOrder
