import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="history">
        <p className="timeAccessed">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="logo" />
        <p className="title">{title}</p>
        <a className="domainUrl" href={domainUrl}>
          {domainUrl}
        </a>
      </div>
      <button className="butt" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
