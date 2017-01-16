const Sequelize = require('sequelize');
const db = require('APP/db');

// A Model for products that contain all the individual details of a single product

const Product = db.define('products', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stockQuantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    summary: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    imageURL: {
      type: Sequelize.STRING,
      allowNull: false
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    milkType: {
      type: Sequelize.STRING,
      defaultValue: 'cow'
    }
  }, {
    getterMethods: {
      preview: function() {
        if (this.content) return this.content.slice(0, 175) + '...'
        else return '';
      },
    }
  }, {
    indexes: [{
      fields: ['name'],
      unique: true
    }]
  })

module.exports = Product