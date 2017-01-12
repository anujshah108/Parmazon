'use strict'
const db = require('APP/db')
const Order = db.model('orders')
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
	// gets an open cart by logged in user
	.get('/cart/user/:id', (req, res, next) =>
		Order.findOne({
			where: {
				status: 'cart',
				user_id: req.params.id
			}
		})
		.then(order => res.json(order))
		.catch(next))
	// gets an open cart by guest
	.get('/cart/guest/:id', (req, res, next) =>
		Order.findOne({
			where: {
				status: 'cart',
				guestid: req.params.id
			}
		})
		.then(order => res.json(order))
		.catch(next))
	//updates an order based on the Id and the body of the request
	.put('/:id', (req, res, next) =>
		Order.findById(req.params.id)
		.then(orderToBeUpdated => orderToBeUpdated.udpdate(req.body))
		.catch(next))
