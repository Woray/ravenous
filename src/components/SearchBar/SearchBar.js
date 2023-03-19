import React from "react"
import "./SearchBar.css"

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    }
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    }
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  } //Constructor ends here

  handleSearch(event) {
    //method handles clicking the 'let's go' button event
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    )
    event.preventDefault()
  }

  handleTermChange(event) {
    //method handles chnages in search business terms
    this.setState({
      term: event.target.value,
    })
  }

  handleLocationChange(event) {
    //method handles changes in business location terms
    this.setState({
      location: event.target.value,
    })
  }

  getSortByClass(sortByOption) {
    //method handles visual clues on search sorting options
    if (sortByOption === this.state.sortBy) {
      return "active"
    } else {
      return ""
    }
  }

  handleSortByChange(sortByOption) {
    //method handles the change of state of the sortBy object key
    this.setState({
      sortBy: sortByOption,
    })
  }
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption]
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
          {sortByOption}
        </li>
      )
    })
  }
  render() {
    return (
      <div className="SearchBar">
        {this.props.searchYelp}
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange}
          />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}> Let's Go </a>
        </div>
      </div>
    )
  }
}

export default SearchBar
