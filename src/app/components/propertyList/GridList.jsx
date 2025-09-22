import React from 'react'
import GridCard from './GridCard'

function GridList({ properties }) {
  return (
    <>
      {properties?.map((p, index) => (
 <div key={index} className="col-md-12">
 <GridCard properties={p}/>

     </div>
                             ))}


    </>
  )
}

export default GridList