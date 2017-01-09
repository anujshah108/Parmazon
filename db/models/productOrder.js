const Sequelize = require('sequelize')
const db = require('APP/db')

const ProductOrder = db.define('productOrders', {
  product: {
    type: Sequelize.JSON,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      defaultValue: 1
    }
  }
})

module.exports = ProductOrder
