// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedBackSelected: false}

  onClickEmoji = () => this.setState({isFeedBackSelected: true})

  renderFeedbackScreen = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="emoji-btn">
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                />
                <br />
                <span className="emoji-name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBackSelected} = this.state

    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedBackSelected
            ? this.renderThankYouScreen()
            : this.renderFeedbackScreen()}
        </div>
      </div>
    )
  }
}

export default Feedback
