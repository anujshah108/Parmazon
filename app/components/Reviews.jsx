import React, { Component } from 'react';

export default class Reviews extends Component {

  constructor(props) {
        super(props);
    }

  render() {
    let reviews = this.props.reviews.map(function(review){
      return (
        <div>
        <div>
        Title: {review.title}
        </div>
        <div>
        {review.body}
        </div>
        <div>
        Stars: {`★ ${review.stars}`}
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
