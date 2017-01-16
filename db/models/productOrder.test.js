const db = require('APP/db')
const ProductOrder = require('./productOrder')
const {expect} = require('chai')


describe('ProductOrder Model', () => {

	describe('definition', () => {

		it('has expected product definition', () => {
			expect(ProductOrder.attributes.name).to.be.an('object');
		});

		it('has expected quantity definition', () => {
			expect(ProductOrder.attributes.quantity).to.be.an('object');
		});

	});

	describe('validations', () => {

		it('defaults quantity to 1', () => {
			// .build creates an instance of a model
			// without saving the represented data to the database.
			const productOrder = ProductOrder.build();
			expect(productOrder.quantity).to.be.equal(1);
		});
	})
})