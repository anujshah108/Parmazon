'use strict'

const db = require('APP/db')
const Product = db.model('products')
const Review = db.model('reviews')


module.exports = require('express').Router()
  //returns all of the products in the Products table
  .get('/', (req, res, next) => {
    console.log(req.cookie)
    Product.findAll()
    .then(products => res.json(products))
    .catch(next)})
  //creates a new product
  .post('/', (req, res, next) =>
   Product.create(req.body)
    .then(product => res.status(201).json(product))
    .catch(next))
  //finds a product by its id
  .get('/:id', (req, res, next) =>
    Product.findById(req.params.id)
    .then(product => {
      res.json(product)

    })
    .catch(next))
  //deletes a product by its Id
  .delete('/:id', (req, res, next) =>
    Product.findById(req.params.id)
    .then(product => product.destroy())
    .then(product => res.sendStatus(204))
    .catch(next))
  //updates a product by using the object passed through the req.body
  .put('/:id', (req, res, next) =>
    Product.findById(req.params.id)
    .then(product => product.update(req.body))
    .then(product => res.json(product))
    .catch(next))
  //finds all products that will match a category passed in the params
  .get('/:category', (req, res, next) =>
    Product.findAll({where: {category: req.params.category}})
    .then(products => res.json(products))
    .catch(next))
  //uses a query for filtering out products
  .get('/products/filter', (req, res, next) => {
    const filters = req.query.filters
    Product.findAll({where:filters})
    .then(filteredProducts => res.send(filteredProducts))
    .catch(next)})
  //used to aggregate all the reviews for a product and returns an average user rating
  .get('/:id/review', (req,res,next) => {
    Review.findAll({
          where: {
            product_id: req.params.id
          }
        })
        .then(ratings => {
          const length = ratings.length;
          //maps over the array of ratings objects to extract the stars key
          let ratingsArr = ratings.map(instance => instance.stars);
          //sums up the stars and divides by the length to find the average
          var stars = ratingsArr.reduce((a, b) => {
            return a + b; },0) / length;
          stars = {stars: stars}
          res.json(stars)
        })
        .catch(next)
        })
