import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {

    return (
      <div className="card">
        <div className="card__content">
          <p className="card__content-text">
          {this.props.text}
          { this.props.emoji && <span className="card__content-emoji">  { emoji.getUnicode(this.props.emoji) }</span>}
          </p>
        </div>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
