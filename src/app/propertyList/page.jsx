'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GotoTop from '../components/GotoTop'
import PropertyList from '../components/propertyList/PropertyList'
import Pagination from '../components/propertyList/Pagination'
import SidebarProperty from '../components/propertyList/SidebarProperty'
import { ListingApi } from '../services/allApi'
import { useEffect, useState } from 'react'

function PropertyListPage() {
  const [properties, setProperties] = useState([])
  const [reqBody, setReqBody] = useState({
    page: '1'
  })

  const allproperty = async (reqBody) => {
    try {
      const res = await ListingApi(reqBody)
      console.log("API response:", res)

      // Adjust this based on actual API structure
      const listing = res?.data?.data?.propertylisting || res?.data?.propertylisting || []
      setProperties(listing)
    } catch (error) {
      console.error("Error fetching properties:", error)
    }
  }

  useEffect(() => {
    allproperty(reqBody)
  }, [reqBody])

  return (
    <>
      <div className='wrapper'>
        <div id='pagee' className='clearfix'>
          {/* header */}
          <Header />
          {/* header end */}

          <section className='flat-section flat-recommended flat-sidebar'>
            <div className='container'>
              <div className="box-title-listing">
                <div className="box-left">
                  <h3 className="fw-8">Property Listing</h3>
                  <p className="text">There are currently 164,814 properties.</p>
                </div>
                <div className="box-filter-tab">
                  <ul className="nav-tab-filter" role="tablist">
                    <li className="nav-tab-item" role="presentation">
                      <a
                        href="#gridLayout"
                        className="nav-link-item active"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-selected="true"
                      >
                        Grid
                      </a>
                    </li>
                    <li className="nav-tab-item" role="presentation">
                      <a
                        href="#listLayout"
                        className="nav-link-item"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-selected="false"
                        tabIndex="-1"
                      >
                        List
                      </a>
                    </li>
                  </ul>
                  <div className="nice-select select-filter list-page" tabIndex="0">
                    <span className="current">Show: 50</span>
                    <ul className="list">
                      <li data-value="1" className="option">Show: 50</li>
                      <li data-value="2" className="option">Show: 30</li>
                      <li data-value="3" className="option selected">Show: 10</li>
                    </ul>
                  </div>
                  <div className="nice-select select-filter list-sort" tabIndex="0">
                    <span className="current">Sort by (Default)</span>
                    <ul className="list">
                      <li data-value="default" className="option selected">Sort by (Default)</li>
                      <li data-value="new" className="option">Newest</li>
                      <li data-value="old" className="option">Oldest</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row">
                {/* <SidebarProperty /> */}
              
                <div className="col-xl-12 col-lg-12 flat-animate-tab ">
                  <div className="tab-content">
                    <div className="tab-pane active show" id="gridLayout" role="tabpanel">
                      {/* Property Grid */}
                      <PropertyList properties={properties} />

                      {/* Pagination */}
                      <Pagination />
                    </div>

                    <div className="tab-pane" id="listLayout" role="tabpanel">
                      {/* Example static list view - replace with API mapping if needed */}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="homelengo-box list-style-1 list-style-2 line">
                            <div className="archive-top">
                              <a href="property-details-v4.html" className="images-group">
                                <div className="images images-style">
                                  <img className="lazyload" src="images/home/house-sm-11.jpg" alt="img-property" />
                                </div>
                              </a>
                            </div>
                            <div className="archive-bottom">
                              <h6 className="text-capitalize">
                                <a href="property-details-v4.html" className="link">Example Property</a>
                              </h6>
                              <p className="description mt-20">Description goes here...</p>
                              <h6 className="price">$7250,00</h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ul className="wd-navigation mt-20">
                        <li><a href="#" className="nav-item">1</a></li>
                        <li><a href="#" className="nav-item">2</a></li>
                        <li><a href="#" className="nav-item">3</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* footer */}
          <Footer />
        </div>
      </div>
      <GotoTop />
    </>
  )
}

export default PropertyListPage
