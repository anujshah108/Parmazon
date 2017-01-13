import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import {spy} from 'sinon';


import Products from './Products';

describe('Products component', () => {
  let products, onChangeSpy;

  beforeEach('Create products', () => {
    onChangeSpy = spy()
    products = shallow(<Products onChange={onChangeSpy}/>)
  })

  it('should be wrapped a <div> ', () => {
    expect(products.is('div')).to.be.equal(true);

    // console.log(products.get(0).props);
  })

  xit('calls passed in onChange prop with value of change event', () => {
      products.simulate('change', { target: { value: 13 } });
      expect(onChangeSpy.called).to.be.true;
  });

})