import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
  }

  onChangesearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const filteredhistory = historyList.filter(
      eachhistory => eachhistory.id !== id,
    )
    this.setState({
      historyList: filteredhistory,
    })
  }

  render() {
    const {searchInput, historyList} = this.state
    const {initialHistoryList} = this.props
    const searchresults = initialHistoryList.filter(eachHist =>
      eachHist.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <div className="searchiconbox">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search"
              />
            </div>
            <input
              type="search"
              className="inputbox"
              placeholder="Search History"
              onChange={this.onChangesearchInput}
              value={searchInput}
            />
          </div>
        </div>
        <div className="footer">
          <ul className="list-container">
            {searchresults.map(eachHistory => (
              <HistoryItem
                historyDetails={eachHistory}
                key={eachHistory.id}
                deleteHistory={this.deleteHistory}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
