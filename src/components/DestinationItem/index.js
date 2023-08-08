// Write your code here

import './index.css'

const DestinationItem = props => {
  // eslint-disable-next-line no-unused-vars
  const {destinationDetails, key} = props
  // eslint-disable-next-line no-unused-vars
  const {id, name, imgUrl} = destinationDetails

  return (
    <li className="user-card-container">
      <img src={imgUrl} className="pic" alt="search icon" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
      </div>
    </li>
  )
}

export default DestinationItem
