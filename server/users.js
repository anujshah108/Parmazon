'use strict'

const db = require('APP/db')
const User = db.model('users')
const Order = db.model('orders')
const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/', forbidden('only admins can list users'), (req, res, next) => 
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next))
	.get('/:id', mustBeLoggedIn, (req, res, next) => 
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))
	//gets all the orders for a user
	.get('/:id/orders', mustBeLoggedIn, (req, res, next) => 
		Order.findAll({where: {user_id: req.params.id}})
		.then(listOforders => res.json(listOforders))
		.catch(next))
	//update a user that is passed through req.params
	.put('/:id', mustBeLoggedIn, (req, res, next) => 
		User.findById(req.params.id)
		.then(user => user.update(req.body)
		.then(updatedUser => res.json(updatedUser))
		.catch(next))
	//deletes a user that is selected from req.params
	.delete('/:id', mustBeLoggedIn, (req, res, next) => 
		User.findById(req.params.id)
		.then(userToDestroy => userToDestroy.destroy())
		.then(res.sendStatus(204))
		.catch(next)))
	