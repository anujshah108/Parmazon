import React, { Component } from 'react';
import Rating from 'react-rating-system';
import axios from 'axios'

export default class Reviews extends Component {

  constructor(props) {
        super(props);
    }

  render() {
    let user = this.props.user
    let reviews = this.props.reviews.map(function(review){
      return (
        <div key={review.id}>
        <div>
       <h5>{review.title}</h5>
        </div>
        <div>
        {review.body}
        </div>
        <div>
       <Rating image='https://raw.githubusercontent.com/enzoferey/react-rating-system/master/dist/star.png' fillBG="gold" initialBG="white" initialValue={review.stars} editable={false} containerStyle={{ maxWidth: '125px' }}/>
        </div>
        <br/>
        <br/>
         </div>
        )
    })

      if(!user.id) {
        return ( <div>
       {reviews}
       </div>)
      }
      else{
        return (
      <div>
       {reviews}
       <form onSubmit={event => {
      event.preventDefault()
      axios.post(`/api/products/review`, {
      title: event.target.title.value,
      body: event.target.body.value,
      stars: event.target.rating.value,
      product_id: this.props.product.id,
      author_id: this.props.user.id
    })} }>
          <div> Add A Review </div>
            <div className="form-group">
              <label>TItle</label>
              <input
                name="title"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Body</label>
              <input
                name="body"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Rating 1-5</label>
              <input
                name="rating"
                type="number"
                className="form-control"
                required
              />
      </div>
       <input type="submit" value="Submit" />
        </form>
     </div>
    )
  }
  }
}
