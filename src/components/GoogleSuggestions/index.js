// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  assignItem = searchItem => {
    this.setState({searchInput: searchItem})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const newSuggestionList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="google-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="google-img"
        />
        <div className="search-Item">
          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search Icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-bar"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
          <ul className="search-list-container">
            {newSuggestionList.map(eachItem => (
              <SuggestionItem
                searchItem={eachItem.suggestion}
                key={eachItem.id}
                assignItem={this.assignItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
