const db = require('APP/db')
const Review = require('../db/models/review')
const {expect} = require('chai')


describe('Review Model', () => {

	describe('definition', () => {

		it('has expected Title definition', () => {
			expect(Review.attributes.title).to.be.an('object');
		});

		it('has expected body definition', () => {
			expect(Review.attributes.body).to.be.an('object');
		});

		it('has expected stars definition', () => {
			expect(Review.attributes.stars).to.be.an('object');
		});

	});

})