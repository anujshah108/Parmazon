'use strict'

const db = require('APP/db')
const User = db.model('users')
const Order = db.model('orders')
const {
	mustBeLoggedIn,
	forbidden,
} = require('./auth.filters')

module.exports = require('express').Router()
	//requesting client must be logged in as an admin
	//sends all of the user instances
	.get('/', (req, res, next) =>
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
	//creates a new user instance on the User table
	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next))
	//gets a specific user
	.get('/:id', (req, res, next) =>
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))
	//gets all the orders for a user
	.get('/:id/orders', (req, res, next) =>
		Order.findAll({
			where: {
				user_id: req.params.id,
				status: 'completed'
			}
		})
		.then(listOforders => res.json(listOforders))
		.catch(next))
	//update a user that is passed through req.params
	.put('/:id', (req, res, next) =>
		User.findById(req.params.id)
		.then(user => user.update(req.body))
			.then(updatedUser => res.json(updatedUser))
			.catch(next))
		//deletes a user that is selected from req.params
	.delete('/:id', (req, res, next) =>
			User.findById(req.params.id)
			.then(userToDestroy => userToDestroy.destroy())
			.then(res.sendStatus(204))
			.catch(next))