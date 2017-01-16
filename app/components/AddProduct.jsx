import React, { Component } from 'react';


export default class AddProduct extends Component {

	constructor(props){
		super(props)
		this.state = {};
		this.handleSubmitCreate = this.handleSubmitCreate.bind();
	}

	handleSubmitCreate(event){
		event.preventDefault();
		axios.post('/api/products', this.getState()).then();
	}

	render(){
		return (
			<div className="row">
			  <form id='productEditForm' className="col s6" onSubmit={this.handleSubmitCreate}>
			    <div className="row">
			      <div className="input-field col s12">
			        <label className="active" htmlFor="productName">Product Name</label>
			        <input id="productName" onChange={e => this.setState({ name: e.target.value })} type="text" className="validate" />
			      </div>
			    </div>
			    <div className="row">
			      <div className="input-field col s12">
			        <label className="active" htmlFor="productImage">Product Image</label>
			        <input id="productImage" onChange={e => this.setState({ imageURL: e.target.value })} type="text" className="validate"/>
			      </div>
			    </div>
			    <div className="row">
			        <div className="input-field col s12">
			          <label className="active" htmlFor="productPrice">Price</label>
			          <input id="productPrice" type="text" onChange={e => this.setState({ price: e.target.value })} className="validate"/>
			        </div>
			    </div>
			    <div className="row">
			          <div className="input-field col s12">
			            <label className="active" htmlFor="productStock">Stock</label>
			            <input id="productStock" type="text" onChange={e => this.setState({ stockQuantity: e.target.value })} className="validate"/>
			          </div>
			    </div>
			    <div className="row">
			      <div className="input-field col s12">
			        <label className="active" htmlFor="productDescription">Description</label>
			        <input id="productDescription" onChange={e => this.setState({ description: e.target.value })} type="text" className="validate"/>
			      </div>
			    </div>
			    <div className="row">
			      <div className="input-field col s12">
			        <label className="active" htmlFor="productSummary">Summary</label>
			        <input id="productSummary" onChange={e => this.setState({ summary: e.target.value })} type="text" className="validate"/>
			      </div>
			    </div>
			    <div className="row">
			      <div className="input-field col s12">
			        <label className="active" htmlFor="productName">Location</label>
			        <input id="productLocation" onChange={e => this.setState({ location: e.target.value })} type="text" className="validate"/>
			      </div>
			    </div>
			    <div className="row">
			      <div className="input-field col s12">
			        <label className="active" htmlFor="productName"> Age</label>
			        <input id="productAge" onChange={e => this.setState({ age: e.target.value })} type="text" className="validate"/>
			      </div>
			    </div>
			    <div className="row">
			      <div className="input-field col s12">
			        <label className="active" htmlFor="productName">Milk Type</label>
			        <input id="productMilkType" onChange={e => this.setState({ milkType: e.target.value })} type="text" className="validate"/>
			      </div>
			    </div>
			    <button type="submit" className="btn btn-success">edit</button>
			  </form>
			</div>

			)
	}

}