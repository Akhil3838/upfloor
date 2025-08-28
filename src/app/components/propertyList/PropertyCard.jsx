import Link from 'next/link'
import React from 'react'

const PropertyCard = ({ properties }) => {
  return (
      <div className="homelengo-box">
        <div className="archive-top">
          <Link href={'/propertyDetails'} className="images-group">
            <div className="images-style">
<img 
  className="lazyload" 
  src={properties.image} 
  alt={properties.sub_type} 
/>
            </div>
            <div className="top">
              <ul className="d-flex gap-6">
                <li className="flag-tag primary">Featured</li>
                <li className="flag-tag style-1">For Sale</li>
              </ul>
            </div>
            <div className="bottom">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 7C10..." stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {properties.location}
            </div>
          </Link>
        </div>
<div className="archive-bottom">
  <div className="content-top">
    <h6 className="text-capitalize">
      <a href="property-details-v1.html" className="link">{properties.sub_type}</a>
    </h6>

    {properties.property_type?.toLowerCase() === "residential" ? (
      <ul className="meta-list">
        {properties.bed && (
          <li className="item">
            <i className="icon icon-bed"></i> Beds: <span className="fw-6">{properties.bed}</span>
          </li>
        )}
        {properties.bath && (
          <li className="item">
            <i className="icon icon-bath"></i> Baths: <span className="fw-6">{properties.bath}</span>
          </li>
        )}
        <li className="item">
          <i className="icon icon-sqft"></i> Sqft: <span className="fw-6">{properties.sqrfeet}</span>
        </li>
      </ul>
    ) : (
      <ul className="meta-list">
        {properties.plot_facing && (
          <li className="item">
            <i className="icon icon-bed"></i> Plot Facing: <span className="fw-6">{properties.plot_facing}</span>
          </li>
        )}
        {properties.no_of_open_sides && (
          <li className="item">
            <i className="icon icon-bath"></i> Open Sides: <span className="fw-6">{properties.no_of_open_sides}</span>
          </li>
        )}
        <li className="item">
          <i className="icon icon-sqft"></i> Cent: <span className="fw-6">{properties.cent}</span>
        </li>
      </ul>
    )}
  </div>
          <div className="content-bottom">
            <div className="d-flex gap-8 align-items-center">
              <div className="avatar avt-40 round">
                <img src="images/avatar/avt-png1.png" alt="agent" />
              </div>
              <span>{properties.agent}</span>
            </div>
            <h6 className="price">₹{properties.price}</h6>
          </div>
        </div>
      </div>
  )
}

export default PropertyCard