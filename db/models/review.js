const Sequelize = require('sequelize')
const db = require('APP/db')

// Model for review which will be assocaited with users and products

const Review = db.define('reviews', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  }
)

module.exports = Review