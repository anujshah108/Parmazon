import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const db = require('APP/db')
const Order = require('../db/models/order')
const { expect } = require('chai')

describe('Order Model', () => {

      describe('definition', () => {

          // *Assertion translation*:
          // This assertion expects that the Order model will
          // put a `status` column in the order table.
          it('has expected status definition', () => {
              expect(Order.attributes.status).to.be.an('object');
          });

          // *Assertion translation*:
          // This assertion expects that the Order model will
          // put a `description` column in the Orders table.




          it('allows valid enum options', () => {
              const order = Order.build({status: 'pending'});

                    expect(order.status).to.equal('pending');
          });

      });

      // describe('validations', () => {

      //     it('defaults milkType to "cow"', () => {
      //         // .build creates an instance of a model
      //         // without saving the represented data to the database.
      //         const order = Order.build();
      //         expect(order.milkType).to.be.equal('cow');
      //     });

      //     it('requires a description', () => {
      //         const order = Order.build();
      //         return order.validate()
      //             .then(err => {
      //                 expect(err).to.be.an('object');
      //                 let descriptionError
      //                   err.errors.forEach(function(err){
      //                   if(err.path == 'description') descriptionError = err
      //                 })
      //                 expect(descriptionError.message).to.equal('description cannot be null')
      //             });
      //     });

      // });
      })