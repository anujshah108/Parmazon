'use strict'

const db = require('APP/db')
const User = require('./user')
const { expect } = require('chai')


describe('User', () => {
    before('wait for the db', () => db.didSync)

    describe('authenticate(plaintext: String) ~> Boolean', () => {
        it('resolves true if the password matches', () =>
            User.create({ email: "test@email.com", password: 'ok' })
            .then(user => user.authenticate('ok'))
            .then(result => expect(result).to.be.true))

        it("resolves false if the password doesn't match", () =>
            User.create({ email: "test2@email.com", password: 'ok' })
            .then(user => user.authenticate('not ok'))
            .then(result => expect(result).to.be.false))

        it('has the expected schema definition', () => {
            expect(User.attributes.email).to.be.an('object');
        });
    })
    describe('validations', () => {
        // The `email` column should be a required field.
        it('require email', () => {
            const user = User.build();
            return user.validate()
                .then(err => {
                  console.log(err)
                    expect(err).to.be.an('object');
                    console.log(err.errors)
                    expect(err.errors[0].message).to.equal('email cannot be null');
        });

    });


})
})