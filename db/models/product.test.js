const db = require('APP/db')
const Product = require('./product')
const { expect } = require('chai')


  describe('Product Model', () => {

      describe('definition', () => {

          // *Assertion translation*:
          // This assertion expects that the Product model will
          // put a `price` column in the messages table.
          it('has expected subject definition', () => {
              expect(Product.attributes.price).to.be.an('object');
          });

          // *Assertion translation*:
          // This assertion expects that the Product model will
          // put a `description` column in the Products table.
          it('has expected description definition', () => {
              expect(Product.attributes.description).to.be.an('object');
          });

      });

      describe('validations', () => {

          it('defaults milkType to "cow"', () => {
              // .build creates an instance of a model
              // without saving the represented data to the database.
              const product = Product.build();
              expect(product.milkType).to.be.equal('cow');
          });

          it('requires a description', () => {
              const product = Product.build();
              return product.validate()
                  .then(err => {
                      expect(err).to.be.an('object');
                      let descriptionError
                        err.errors.forEach(function(err){
                        if(err.path == 'description') descriptionError = err
                      })
                      expect(descriptionError.message).to.equal('description cannot be null')
                  });
          });

      });
      })