'use client'
import React, { useEffect, useState } from 'react'
import { ListingApi } from '../services/allApi'
import { imageUrl } from '../services/serverUrl'

function LatestProperties() {
  const [latestProperties, setLatestProperties] = useState([])

  // Fetch latest properties
  const fetchLatestProperties = async () => {
    try {
      const res = await ListingApi({ page: '1' })
      const listing = res?.data?.data?.propertylisting || res?.data?.propertylisting || []
      setLatestProperties(listing.slice(0, 5)) // only 5 latest
    } catch (error) {
      console.error("Error fetching latest properties:", error)
    }
  }

  useEffect(() => {
    fetchLatestProperties()
  }, [])

  return (
    <div className="box-latest-property">
      <h5 className="fw-6 title">Latest Properties</h5>
      <ul>
        {latestProperties.map((p, idx) => (
          <li className="latest-property-item" key={idx}>
            <a href={`/property/${p?._id}`} className="images-style">
              <img 
                // src={p?.image || "images/home/default.jpg"} 
                  src={`${imageUrl}/${p.image}`} 
                
                alt={p?.sub_type || "property"} 
              />
            </a>

            <div className="content">
              <div className="text-capitalize text-btn">
                <a href={`/property/${p?._id}`} className="link">
                  {p?.sub_type}
                </a>
              </div>

              {p?.property_type?.toLowerCase() === "residential" ? (
                <ul className="meta-list mt-6">
                  {p?.bed && (
                    <li className="item">
                      <i className="icon icon-bed"></i>
                      <span className="text-variant-1">Beds:</span>
                      <span className="fw-6">{p?.bed}</span>
                    </li>
                  )}
                  {p?.bath && (
                    <li className="item">
                      <i className="icon icon-bath"></i>
                      <span className="text-variant-1">Baths:</span>
                      <span className="fw-6">{p?.bath}</span>
                    </li>
                  )}
                  <li className="item">
                    <i className="icon icon-sqft"></i>
                    <span className="text-variant-1">Sqft:</span>
                    <span className="fw-6">{p?.sqrfeet}</span>
                  </li>
                </ul>
              ) : (
                <ul className="meta-list mt-6">
                  {p?.plot_facing && (
                    <li className="item">
                      <i className="icon icon-bed"></i>
                      <span className="text-variant-1">Plot Facing:</span>
                      <span className="fw-6">{p?.plot_facing}</span>
                    </li>
                  )}
                  {p?.no_of_open_sides && (
                    <li className="item">
                      <i className="icon icon-bath"></i>
                      <span className="text-variant-1">Open Sides:</span>
                      <span className="fw-6">{p?.no_of_open_sides}</span>
                    </li>
                  )}
                  <li className="item">
                    <i className="icon icon-sqft"></i>
                    <span className="text-variant-1">Cent:</span>
                    <span className="fw-6">{p?.cent}</span>
                  </li>
                </ul>
              )}

              <div className="mt-10 text-btn">
                ₹{p?.price}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LatestProperties
