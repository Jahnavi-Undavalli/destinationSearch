// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'
import './index.css'

// eslint-disable-next-line no-unused-vars
class DestinationSearch extends Component {
  state = {
    searchInput: '',
    // eslint-disable-next-line no-undef
    destinationList: destinationsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, destinationList} = this.state
    const searchResults = destinationList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Destination Search</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <DestinationItem destinationDetails={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

// eslint-disable-next-line no-undef
export default App
