import React from 'react'

function GridCard({ properties }) {
  return (
    <>
                <div className="homelengo-box list-style-1 list-style-2 line">
                                <div className="archive-top">
                                  <a href={`/property/${properties.id}`}className="images-group">
                                    <div className="images images-style">
                                      <img className="lazyload"src={properties.image}  alt={properties.sub_type} 
                                      style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }}/>
                                    </div>
                                  </a>
                                </div>
                                <div className="archive-bottom">
                                  <h6 className="text-capitalize">
                                    <a href="property-details-v4.html" className="link">Example Property</a>
                                  </h6>
                                  <p className="description mt-20 mb-3">  {properties.location}</p>
                                  <h6 className="price">₹{properties.price}</h6>

                                      {properties.property_type?.toLowerCase() === "residential" ? (
      <ul className="meta-list" style={{ marginTop: "30px" }}>
        {properties.bed && (
          <li className="item mb-3">
            <i className="icon icon-bed"></i> Beds: <span className="fw-6">{properties.bed}</span>
          </li>
        )}
        {properties.bath && (
          <li className="item mb-3">
            <i className="icon icon-bath"></i> Baths: <span className="fw-6">{properties.bath}</span>
          </li>
        )}
        <li className="item mb-3">
          <i className="icon icon-sqft"></i> Sqft: <span className="fw-6">{properties.sqrfeet}</span>
        </li>
      </ul>
    ) : (
      <ul className="meta-list" style={{ marginTop: "30px"}}>
        {properties.plot_facing && (
          <li className="item mb-3">
            <i className="icon icon-bed"></i> Plot Facing: <span className="fw-6">{properties.plot_facing}</span>
          </li>
        )}
        {properties.no_of_open_sides && (
          <li className="item mb-3">
            <i className="icon icon-bath"></i> Open Sides: <span className="fw-6">{properties.no_of_open_sides}</span>
          </li>
        )}
        <li className="item mb-3">
          <i className="icon icon-sqft"></i> Cent: <span className="fw-6">{properties.cent}</span>
        </li>
      </ul>
    )}

                                </div>
                                              <div className="avatar avt-40 round">
                <img src="images/avatar/short.png" alt="agent" />
              </div>
              {/* <span>Upfloor</span> */}

                                
                              </div>
    

    </>
  )
}

export default GridCard