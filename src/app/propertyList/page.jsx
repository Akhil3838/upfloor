'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GotoTop from '../components/GotoTop'
import PropertyList from '../components/propertyList/PropertyList'
import Pagination from '../components/propertyList/Pagination'
import SidebarProperty from '../components/propertyList/SidebarProperty'
import { ListingApi } from '../services/allApi'
import { useEffect, useState } from 'react'
import GridList from '../components/propertyList/GridList'

function PropertyListPage() {
  const [properties, setProperties] = useState([])
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false) // 👈 New loading state

  const [reqBody, setReqBody] = useState({
    page: '1',
    show: '',
    sort: ''
  })

  const allproperty = async (reqBody) => {
    try {
      setLoading(true) // 👈 Show loader before API call
      const res = await ListingApi(reqBody)
      console.log("API response:", res)

      const listing = res?.data?.data?.propertylisting || res?.data?.propertylisting || []
      setProperties(listing)
      setTotal(res?.data?.data?.total_pages)
      setCount(res?.data?.data?.count)
    } catch (error) {
      console.error("Error fetching properties:", error)
    } finally {
      setLoading(false) // 👈 Hide loader after API call
    }
  }

  useEffect(() => {
    allproperty(reqBody)
  }, [reqBody])

  const handlePageChange = (page) => {
    setReqBody((prev) => ({ ...prev, page }))
  }

  const handleShowChange = (value) => {
    setReqBody((prev) => ({ ...prev, show: value, page: '1' }))
  }

  const handleSortChange = (value) => {
    setReqBody((prev) => ({ ...prev, sort: value, page: '1' }))
  }

  return (
    <>
      {/* Loader Section */}
      {loading && (
        <div className="preload preload-container">
          <div className="preload-logo">
            <div className="spinner"></div>
            <span className="icon icon-villa-fill"></span>
          </div>
        </div>
      )}

      <div className={`wrapper ${loading ? 'blur-sm pointer-events-none' : ''}`}>
        <div id='pagee' className='clearfix'>
          {/* header */}
          <Header />
          {/* header end */}

          <section className='flat-section flat-recommended flat-sidebar'>
            <div className='container'>
              <div className='box-title-listing'>
                <div className='box-left'>
                  <h3 className='fw-8'>Property Listing</h3>
                  <p className='text'>There are currently {count} properties.</p>
                </div>

                <div className='box-filter-tab'>
                  <ul className='nav-tab-filter' role='tablist'>
                    <li className='nav-tab-item' role='presentation'>
                      <a
                        href='#gridLayout'
                        className='nav-link-item active'
                        data-bs-toggle='tab'
                        role='tab'
                        aria-selected='true'
                      >
                        Grid
                      </a>
                    </li>
                    <li className='nav-tab-item' role='presentation'>
                      <a
                        href='#listLayout'
                        className='nav-link-item'
                        data-bs-toggle='tab'
                        role='tab'
                        aria-selected='false'
                        tabIndex='-1'
                      >
                        List
                      </a>
                    </li>
                  </ul>

                  {/* Show filter */}
                  <div className='nice-select select-filter list-page' tabIndex='0'>
                    <span className='current'>Show: {reqBody.show || 50}</span>
                    <ul className='list'>
                      <li onClick={() => handleShowChange(50)} className='option'>Show: 50</li>
                      <li onClick={() => handleShowChange(30)} className='option'>Show: 30</li>
                      <li onClick={() => handleShowChange(10)} className='option'>Show: 10</li>
                    </ul>
                  </div>

                  {/* Sort filter */}
                  <div className='nice-select select-filter list-sort' tabIndex='0'>
                    <span className='current'>
                      {reqBody.sort === 'new'
                        ? 'Newest'
                        : reqBody.sort === 'old'
                          ? 'Oldest'
                          : 'Sort by (Default)'}
                    </span>
                    <ul className='list'>
                      <li onClick={() => handleSortChange('default')} className='option'>Sort by (Default)</li>
                      <li onClick={() => handleSortChange('new')} className='option'>Newest</li>
                      <li onClick={() => handleSortChange('old')} className='option'>Oldest</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-xl-12 col-lg-12 flat-animate-tab'>
                  <div className='tab-content'>
                    <div className='tab-pane active show' id='gridLayout' role='tabpanel'>
                      <PropertyList properties={properties} />
                      <Pagination total={total} onPageChange={handlePageChange} />
                    </div>

                    <div className='tab-pane' id='listLayout' role='tabpanel'>
                      <div className='row'>
                        <GridList properties={properties} />
                      </div>
                      <Pagination total={total} onPageChange={handlePageChange} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>

      <GotoTop />
    </>
  )
}

export default PropertyListPage
