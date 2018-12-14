import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: ''
    };
  }

  resetState = () => {
    this.setState({
      text: '',
      emoji: ''
    });
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { text } = this.state;

    if (text === '') return;

    this.props.addCardCallback(this.state);
    this.resetState();
  }

  generateSelectEmojis = () => {
    const emojiOptions = EMOJI_LIST.map((thisEmoji, index) => {
      return <option key={index} value={thisEmoji}>{emoji.getUnicode(thisEmoji)}</option>
    });
    return <select className="new-card-form__form-select" name="emoji" value={this.state.emoji} onChange={this.onFormChange}>
    {emojiOptions}
    </select>
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} name="new-card-form__form" id="new-card-form" className="new-card-form">
      <div className="new-card-form__header">Add a new Card</div>
      <div>
      <label className="new-card-form__form-label" htmlFor="text">Text</label>
      <input className="new-card-form__form-textarea" name="text" placeholder="text" onChange={this.onFormChange} value={this.state.text}/>
      </div>
      <div>
      <label>
      Select an Emoji:
      {this.generateSelectEmojis()}
      </label>
      </div>
      <input className="new-card-form__form-button" type="submit" name="submit" value="Add a Card" />
      </form>
    );
  }


}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;
