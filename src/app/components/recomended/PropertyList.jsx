import React from "react";
import PropertyCard from "./PropertyCard";

function PropertyList({ properties }) {
  return (
    <div className="row">
      {properties.map((p, index) => (
        <PropertyCard key={index} {...p} />
      ))}
      <div className="text-center">
        <a href="/propertyList" className="tf-btn btn-view primary size-1 hover-btn-view">
          View All Properties <span className="icon icon-arrow-right2"></span>
        </a>
      </div>
    </div>
  );
}

export default PropertyList;
