import React, { Component } from 'react';
import Rating from 'react-rating-system';

export default class Reviews extends Component {

  constructor(props) {
        super(props);
    }

  render() {
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
        </div>
        )
    })
    return (
      <div>
       {reviews}
      </div>
    )
  }
}
