import React from 'react'
import PropertyCard from './PropertyCard'

function PropertyList({ properties }) {
  return (
    <div className="row">
      {properties?.map((p, index) => (
        <div key={index} className="col-md-4">
          <PropertyCard properties={p} />
        </div>
      ))}
    </div>
  )
}

export default PropertyList
