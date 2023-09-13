// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchItem, assignItem} = props

  const arrowClick = () => {
    assignItem(searchItem)
  }

  return (
    <li className="search-items">
      <div className="search-item-box">
        <p>{searchItem}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={arrowClick}
          className="arrow-style"
        />
      </div>
    </li>
  )
}

export default SuggestionItem
