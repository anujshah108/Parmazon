'use strict'
const db = require('APP/db')
const Order = db.model('orders')
const ProductOrder = db.model('productOrders')
const Address = db.model('addresses')
const {mustBeLoggedIn, forbidden,} = require('./auth.filters')


module.exports = require('express').Router()
	//route will getAll of the orders in the database, must be logged in as an admin
	.get('/', (req, res, next) =>
		Order.findAll()
		.then(orders => res.json(orders))
		.catch(next))
	//creates a new order
	.post('/', (req, res, next) =>
		Order.create()
		.then(order => res.json(order))
		.catch(next))
	.post('/updatecart', (req, res, next) => {
		req.session.products = req.body.products
		res.sendStatus(201)
		})
	//fetches a single order based on the passed in Id
	.get('/:id', (req, res, next) =>
		Order.findById(req.params.id)
		.then(order => res.json(order))
		.catch(next))
	// get products for a specific order
	.get('/:id/products', (req, res, next) =>
		ProductOrder.findAll({
			where:
			{order_id: req.params.id}
		})
		.then(products => res.json(products))
		.catch(next))
	// gets an open cart by logged in user or guest
	.get('/cart/user/', (req, res, next) => {
		if(typeof req.session.guest.id == 'number'){
		Order.findOrCreate({
			where: {
				status: 'cart',
				user_id: req.session.guest.id
			}
		})
		.then(function(order){
		if(req.session.products.length){
		req.session.products.forEach(function(product){
		ProductOrder.findById(product.id).then(function(product){
		if(product) product.update({order_id: order[0].id})
		})
		})
		}
		return order
		})
		.then(order => res.json(order))
		.catch(next)
		}
	else{
		Order.findOrCreate({
			where: {
				status: 'cart',
				guestid: req.session.guest.id
			}
		})
		.then(order => {
			res.json(order)
			})
		.catch(next)
	}
	})
	//updates an order based on the Id and the body of the request
	.put('/:id', (req, res, next) =>
		Order.findById(req.params.id)
		.then(orderToBeUpdated => orderToBeUpdated.update(req.body))
		.catch(next))

	//posts a new product for order
	.post('/:id/products', (req, res, next) =>
		ProductOrder.findOne({
			where:{
				order_id: req.params.id,
				ordered_product_id: req.body.ordered_product_id
			}
		})
		.then(product => {
			if(product){
			return product.update({
					quantity: product.quantity+req.body.quantity
				})
			}
			else{
				return ProductOrder.create(req.body)
			}
		}).then(product => {
			res.json(product)
		})
		.catch(next))

	//delete a product from an order
	.delete('/:id/products/:productId', (req, res, next) =>
		ProductOrder.destroy({
			where:{
				order_id: req.params.id,
				id: req.params.productId
			}
		}).then(product=> res.sendStatus(204)).catch(next))

	//Creates An Address and Links It to The Current Order

	.post('/checkout/address', (req,res,next) =>
		Address.create(req.body)
		.then(address => res.json(address))
		.catch(next))
	.delete('/orders/:orderId', (req, res, next) => {
		Order.destroy({
			where:{
				id: req.params.orderId
			}
		})
		.then(order => res.sendStatus(204).catch(next));
	})

