'use strict'
const db = require('APP/db')
const Order = db.model('orders')
const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
	//route will getAll of the orders in the database, must be logged in as an admin
	.get('/', forbidden('only admins can list users'), (req, res, next) =>
		Order.findAll()
		.then(orders => res.json(orders))
		.catch(next))
	//fetches a single order based on the passed in Id
	.get('/:id', mustBeLoggedIn, (req, res, next) => 
		Order.findById(req.params.id)
		.then(order => res.json(order))
		.catch(next))
	//updates an order based on the Id and the body of the request
	.put('/:id', mustBeLoggedIn, (req, res, next) => 
		Order.findById(req.params.id)
		.then(orderToBeUpdated => orderToBeUpdated.udpdate(req.body))
		.catch(next))
