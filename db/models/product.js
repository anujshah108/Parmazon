const Sequelize = require('sequelize');
const db = require('APP/db');
const Review = require('./review');
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
    categories: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tags: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      // page.tags = 'programming,coding,javascript'
      set: function(value) {

        var arrayOfTags;

        if (typeof value === 'string') {
          arrayOfTags = value.split(',').map(function(s) {
            return s.trim();
          });
          this.setDataValue('tags', arrayOfTags);
        } else {
          this.setDataValue('tags', value);
        }

      }
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
    indexes: [{
      fields: ['name'],
      unique: true
    }]
  })

module.exports = Product