import { imageUrl } from "@/app/services/serverUrl";
import React from "react";

function PropertyCard({ image, sub_type, location, bed, bath, sqrfeet, price, agent,property_type,cent,plot_facing,no_of_open_sides,id }) {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="homelengo-box">
        <div className="archive-top">
          <a href={`/property/${id}`} className="images-group">
            <div className="images-style">
<img 
  className="lazyload" 
  src={image} 
  alt={sub_type} 
  style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }} 
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
              {location}
            </div>
          </a>
        </div>
<div className="archive-bottom">
  <div className="content-top">
    <h6 className="text-capitalize">
      <a href="property-details-v1.html" className="link">{sub_type}</a>
    </h6>

    {property_type?.toLowerCase() === "residential" ? (
      <ul className="meta-list">
        {bed && (
          <li className="item">
            <i className="icon icon-bed"></i> Beds: <span className="fw-6">{bed}</span>
          </li>
        )}
        {bath && (
          <li className="item">
            <i className="icon icon-bath"></i> Baths: <span className="fw-6">{bath}</span>
          </li>
        )}
        <li className="item">
          <i className="icon icon-sqft"></i> Sqft: <span className="fw-6">{sqrfeet}</span>
        </li>
      </ul>
    ) : (
      <ul className="meta-list">
        {plot_facing && (
          <li className="item">
            <i className="icon icon-bed"></i> Plot Facing: <span className="fw-6">{plot_facing}</span>
          </li>
        )}
        {no_of_open_sides && (
          <li className="item">
            <i className="icon icon-bath"></i> Open Sides: <span className="fw-6">{no_of_open_sides}</span>
          </li>
        )}
        <li className="item">
          <i className="icon icon-sqft"></i> Cent: <span className="fw-6">{cent}</span>
        </li>
      </ul>
    )}
  </div>
          <div className="content-bottom d-flex justify-content-between">
            <div className="d-flex gap-8 align-items-center">
              <div className="avatar avt-40 round">
                <img src="images/avatar/short.png" alt="agent" />
              </div>
              <span>Upfloor</span>
            </div>
            <h6 className="price">₹{price}</h6>
          </div>
        </div>
      </div>
      </div>

   
  );
}

export default PropertyCard;
