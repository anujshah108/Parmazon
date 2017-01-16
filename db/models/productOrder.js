const Sequelize = require('sequelize')
const db = require('APP/db')


// A way to allow orders to contain quantities for a single product

const ProductOrder = db.define('productOrders', {
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
        isDecimal: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
  },
  userid: {
    type: Sequelize.DECIMAL
  },
  inCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
}
})

module.exports = ProductOrder
