'use strict'
const db = require('APP/db')
const Order = db.model('orders')
const ProductOrder = db.model('productOrders')
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
			console.log(order)
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
				console.log(req.body)
				return ProductOrder.create(req.body)
			}
		}).then(product => {
			res.json(product)
		})
		.catch(next))
