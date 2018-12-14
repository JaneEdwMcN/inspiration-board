import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  onClickDeleteCard = (event) => {
    this.props.deleteCardCallback(this.props.id);
  }
  
  render() {

    return (
      <div className="card__content">
      <p className="card__content-text">
      {this.props.text}
      { this.props.emoji && <span className="card__content-emoji">  { emoji.getUnicode(this.props.emoji) }</span>}
      </p>
      <button className="card__delete" onClick={this.onClickDeleteCard}>Delete</button>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
