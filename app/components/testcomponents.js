<div className='col s6'>
  <div className ='row'>
 <div className="col-lg-8">

            <div className="row">
                <div className="col-md-12">

                    <div className="product-wrapper">

                        <div className="view overlay hm-white-light z-depth-1-half">
                            <img src={this.state.imageURL || product.imageURL} className="img-fluid " height='500'/>
                            <div className="mask">
                            </div>
                            <h5 className="price"><span>{`$ ${this.state.price || product.price}`}</span></h5>
                        </div>

                        <br/>

                        <h2 className="h2-responsive">{this.state.name || product.name}</h2>
                        <hr/>
                        <p>{`${this.state.description || product.description}`}</p>
                        <p><h5>Rating: </h5>{'★ ' + (this.state.rating || this.props.rating.stars)}</p>
                        <p><h5>Summary: </h5>{`${this.state.summary || product.summary}`}</p>
                        <p><h5>Location: </h5>{`${this.state.location || product.location}`}</p>
                        <p><h5>Age: </h5>{`${this.state.age || product.age}`}</p>
                        <p><h5>Milk Type: </h5>{`${this.state.milkType || product.milkType}`}</p>
                    </div>

                </div>
                <br/>
                 <br/>
                 <div>Quantity</div>
                 <span className='row'><input onChange={e => this.setState({ quantity: e.target.value })} className='col s3' type='number'/></span>
                 <br/>
                 <button onClick={this.handleSubmitAddToCart} className='waves-effect waves-light btn-small'>Add To Cart</button>
                 <br/>
                 <br/>
                 <div className="reviews">
                    <h2 className="h2-responsive">Reviews</h2>
                     <Reviews reviews={this.props.reviews}/>
                </div>
                 <br/>
                 <br/>
                 <br/>
                 <br/>
                 <br/>
                </div>