import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
// import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      errorMessage: ""
    };
  }

  componentDidMount() {
    axios.get(this.props.url + this.props.boardName + "/cards")
    .then((response) => {
      const cards = response.data.map((card) => {
        const newCard = {
          ...card.card
        }
        return newCard
      })

      this.setState({
        cards: cards
      })
    })
    .catch((error) => {
      this.setState({
        errorMessage: error.message
      })
    });
  }

  deleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
    let updatedCards = this.state.cards

    updatedCards.forEach((card, index) => {
      if (id === card.id) {
        updatedCards.splice(index, 1);
      }
    });

    this.setState({
      cards: updatedCards,
    })
  }

  makeCardList = (cards) => {
    const cardList = cards.map((card) => {
      return <div key={card.id} className="card">
      <Card
      id={card.id}
      text={card.text}
      emoji={card.emoji}
      deleteCardCallback={this.deleteCard}/>
      </div>
    });
    return cardList
  }


  render() {
    return (
      <div className="board">
      { this.state.cards !== [] && this.makeCardList(this.state.cards)}
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
