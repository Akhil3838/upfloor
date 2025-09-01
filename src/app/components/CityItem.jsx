'use client'
import React, { useEffect, useState } from 'react'
import { CityApi } from '../services/allApi'

function CityItem() {
  const [cityitem, setCityitem] = useState([])

  const city = async () => {
    try {
      const res = await CityApi()
      console.log(res.data.data.cities)
      setCityitem(res.data.data.cities)
    } catch (err) {
      console.error("Error fetching cities:", err)
    }
  }

  useEffect(() => {
    city()
  }, []) // ✅ prevent infinite loop

  return (
    <>
      {cityitem?.map((c, index) => (
        <div className="swiper-slide" key={index}>
          <div className="box-location">
            <a href="/propertyList" className="image img-style">
              <img
                className="lazyload"
                src={c.thumbnail}
                alt={c.city}
                style={{
                  width: "360px",
                  height: "300px",
                  objectFit: "cover",
                //   borderRadius: "8px"
                }}
              />
            </a>
            <div className="content">
              <div className="inner-left">
                <span className="sub-title fw-6">{c.property_count} Properties</span>
                <h6 className="title text-line-clamp-1 link">{c.city}</h6>
              </div>
              <a href="/propertyList" className="box-icon line w-44 round">
                <i className="icon icon-arrow-right2"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CityItem
