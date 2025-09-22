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
                                  <p className="description mt-20">  {properties.location}</p>
                                  <h6 className="price">₹{properties.price}</h6>
                                </div>
                              </div>
    

    </>
  )
}

export default GridCard