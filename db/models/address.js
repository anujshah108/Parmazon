const Sequelize = require('sequelize')
const db = require('APP/db')

//Address For Customers Either Billing Or Shipping
const Address = db.define('addresses', {
    firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zip: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true
  }
}
)

module.exports = Address
