import React from 'react'

const Pagination = () => {
  return (
    <ul className="wd-navigation mt-20">
      <li><a href="#" className="nav-item"><i className="icon icon-arr-l"></i></a></li>
      <li><a href="#" className="nav-item">1</a></li>
      <li><a href="#" className="nav-item">2</a></li>
      <li><a href="#" className="nav-item active">3</a></li>
      <li><a href="#" className="nav-item">4</a></li>
      <li><a href="#" className="nav-item">...</a></li>
      <li><a href="#" className="nav-item"><i className="icon icon-arr-r"></i></a></li>
    </ul>
  )
}

export default Pagination