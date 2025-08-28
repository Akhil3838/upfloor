import React from 'react'

function SidebarProperty() {
  return (
    <>
                    <div className="col-xl-4 col-lg-5">
  <div className="widget-sidebar fixed-sidebar">
    <div className="flat-tab flat-tab-form widget-filter-search widget-box">
      <ul className="nav-tab-form" role="tablist">
        <li className="nav-tab-item" role="presentation">   
          <a href="#forRent" className="nav-link-item active" data-bs-toggle="tab">For Rent</a>
        </li>
        <li className="nav-tab-item" role="presentation">
          <a href="#forSale" className="nav-link-item" data-bs-toggle="tab">For Sale</a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade active show" role="tabpanel">
          <div className="form-sl">
            <form method="post">
              <div className="wd-filter-select">
                <div className="inner-group">
                  <div className="box">
                    <div className="form-style">
                      <input type="text" className="form-control" placeholder="Type keyword...." defaultValue="" name="s" title="Search for" required />
                    </div>
                    <div className="form-style">
                      <div className="group-ip ip-icon">
                        <input type="text" className="form-control" placeholder="Location" defaultValue="" name="s" title="Search for" required />
                        <a href="#" className="icon-right icon-location"></a>
                      </div>
                    </div>
                    <div className="form-style">
                      <div className="group-select">
                        <div className="nice-select" tabIndex="0">
                          <span className="current">Property type</span>
                          <ul className="list">                                                       
                            <li data-value="villa" className="option">Villa</li>
                            <li data-value="studio" className="option">Studio</li>
                            <li data-value="office" className="option">Office</li>
                          </ul>
                        </div>
                      </div>                                                    
                    </div>
                    <div className="form-style box-select">
                      <div className="nice-select" tabIndex="0">
                        <span className="current">Room</span>
                        <ul className="list"> 
                          <li data-value="2" className="option">1</li>
                          <li data-value="2" className="option selected">2</li>
                          <li data-value="3" className="option">3</li>
                          <li data-value="4" className="option">4</li>
                          <li data-value="5" className="option">5</li>
                          <li data-value="6" className="option">6</li>
                          <li data-value="7" className="option">7</li>
                          <li data-value="8" className="option">8</li>
                          <li data-value="9" className="option">9</li>
                          <li data-value="10" className="option">10</li>
                        </ul>
                      </div>
                    </div>
                    <div className="form-style box-select">
                      <div className="nice-select" tabIndex="0">
                        <span className="current">Bathrooms</span>
                        <ul className="list"> 
                          <li data-value="all" className="option">All</li>
                          <li data-value="1" className="option">1</li>
                          <li data-value="2" className="option">2</li>
                          <li data-value="3" className="option">3</li>
                          <li data-value="4" className="option selected">4</li>
                          <li data-value="5" className="option">5</li>
                          <li data-value="6" className="option">6</li>
                          <li data-value="7" className="option">7</li>
                          <li data-value="8" className="option">8</li>
                          <li data-value="9" className="option">9</li>
                          <li data-value="10" className="option">10</li>
                        </ul>
                      </div>
                    </div>
                    <div className="form-style box-select">
                      <div className="nice-select" tabIndex="0">
                        <span className="current">Bedroomsrooms</span>
                        <ul className="list"> 
                          <li data-value="1" className="option">All</li>
                          <li data-value="1" className="option">1</li>
                          <li data-value="2" className="option">2</li>
                          <li data-value="3" className="option">3</li>
                          <li data-value="4" className="option selected">4</li>
                          <li data-value="5" className="option">5</li>
                          <li data-value="6" className="option">6</li>
                          <li data-value="7" className="option">7</li>
                          <li data-value="8" className="option">8</li>
                          <li data-value="9" className="option">9</li>
                          <li data-value="10" className="option">10</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="form-style widget-price">
                      <div className="box-title-price">
                        <span className="title-price fw-6">Price:</span>
                        <div className="caption-price">
                          <span id="slider-range-value1" className="fw-6"></span>
                          <span className="fw-6">-</span>
                          <span id="slider-range-value2" className="fw-6"></span>
                        </div>
                      </div>
                      <div id="slider-range"></div>
                      <div className="slider-labels">
                        <input type="hidden" name="min-value" defaultValue="" />
                        <input type="hidden" name="max-value" defaultValue="" />                                                                                  
                      </div>
                    </div>
                    <div className="form-style widget-price wd-price-2">
                      <div className="box-title-price">
                        <span className="title-price fw-6">Size:</span>
                        <div className="caption-price">
                          <span id="slider-range-value01" className="fw-6"></span>
                          <span className="fw-6">to</span>
                          <span id="slider-range-value02" className="fw-6"></span>
                        </div>
                      </div>
                      <div id="slider-range2"></div>
                      <div className="slider-labels">
                        <input type="hidden" name="min-value2" defaultValue="" />
                        <input type="hidden" name="max-value2" defaultValue="" />      
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="form-style wd-amenities">
                      <div className="group-checkbox">
                        <h6 className="title text-black-2">Amenities:</h6>
                        <div className="group-amenities">
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb1" defaultChecked /> 
                            <label htmlFor="cb1" className="text-cb-amenities">Air Condition</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb2" /> 
                            <label htmlFor="cb2" className="text-cb-amenities">Disabled Access</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb3" /> 
                            <label htmlFor="cb3" className="text-cb-amenities">Ceiling Height</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb4" defaultChecked /> 
                            <label htmlFor="cb4" className="text-cb-amenities">Floor</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb5" /> 
                            <label htmlFor="cb5" className="text-cb-amenities">Heating</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb6" /> 
                            <label htmlFor="cb6" className="text-cb-amenities">Renovation</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb7" /> 
                            <label htmlFor="cb7" className="text-cb-amenities">Window Type</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb8" /> 
                            <label htmlFor="cb8" className="text-cb-amenities">Cable TV</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb9" defaultChecked /> 
                            <label htmlFor="cb9" className="text-cb-amenities">Elevator</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb10" /> 
                            <label htmlFor="cb10" className="text-cb-amenities">Furnishing</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb11" /> 
                            <label htmlFor="cb11" className="text-cb-amenities">Intercom</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb12" /> 
                            <label htmlFor="cb12" className="text-cb-amenities">Security</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb13" /> 
                            <label htmlFor="cb13" className="text-cb-amenities">Search property</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb14" /> 
                            <label htmlFor="cb14" className="text-cb-amenities">Ceiling Height</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb15" /> 
                            <label htmlFor="cb15" className="text-cb-amenities">Fence</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb16" /> 
                            <label htmlFor="cb16" className="text-cb-amenities">Fence</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb17" defaultChecked /> 
                            <label htmlFor="cb17" className="text-cb-amenities">Garage</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb18" /> 
                            <label htmlFor="cb18" className="text-cb-amenities">Parking</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb19" /> 
                            <label htmlFor="cb19" className="text-cb-amenities">Swimming Pool</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb20" /> 
                            <label htmlFor="cb20" className="text-cb-amenities">Construction Year</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb21" /> 
                            <label htmlFor="cb21" className="text-cb-amenities">Fireplace</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb22" /> 
                            <label htmlFor="cb22" className="text-cb-amenities">Garden</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb23" /> 
                            <label htmlFor="cb23" className="text-cb-amenities">Pet Friendly</label>
                          </fieldset>
                          <fieldset className="amenities-item">
                            <input type="checkbox" className="tf-checkbox style-1" id="cb24" /> 
                            <label htmlFor="cb24" className="text-cb-amenities">WiFi</label>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-style">
                    <button type="submit" className="tf-btn btn-view primary hover-btn-view">Find Properties <span className="icon icon-arrow-right2"></span></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="widget-box box-latest-property">
      <h5 className="fw-6 title">Latest Properties</h5>
      <ul>
        <li className="latest-property-item">
          <a href="property-details-v4.html" className="images-style">
            <img src="images/home/house-8.jpg" alt="img" />
          </a>
          <div className="content">
            <div className="text-capitalize text-btn"><a href="property-details-v4.html" className="link">Casa Lomas de Machalí Machas</a></div>
            <ul className="meta-list mt-6">
              <li className="item">
                <i className="icon icon-bed"></i>
                <span className="text-variant-1">Beds:</span>
                <span className="fw-6">3</span>
              </li>
              <li className="item">
                <i className="icon icon-bath"></i>
                <span className="text-variant-1">Baths:</span>
                <span className="fw-6">2</span>
              </li>
              <li className="item">
                <i className="icon icon-sqft"></i>
                <span className="text-variant-1">Sqft:</span>
                <span className="fw-6">1150</span>
              </li>
            </ul>
            <div className="mt-10 text-btn">$7250,00</div>
          </div>
        </li>
        <li className="latest-property-item">
          <a href="property-details-v4.html" className="images-style">
            <img src="images/home/house-3.jpg" alt="img" />
          </a>
          <div className="content">
            <div className="text-capitalize text-btn"><a href="property-details-v4.html" className="link">Casa Lomas de Machalí Machas</a></div>
            <ul className="meta-list mt-6">
              <li className="item">
                <i className="icon icon-bed"></i>
                <span className="text-variant-1">Beds:</span>
                <span className="fw-6">3</span>
              </li>
              <li className="item">
                <i className="icon icon-bath"></i>
                <span className="text-variant-1">Baths:</span>
                <span className="fw-6">2</span>
              </li>
              <li className="item">
                <i className="icon icon-sqft"></i>
                <span className="text-variant-1">Sqft:</span>
                <span className="fw-6">1150</span>
              </li>
            </ul>
            <div className="mt-10 text-btn">$7250,00</div>
          </div>
        </li>
        <li className="latest-property-item">
          <a href="property-details-v4.html" className="images-style">
            <img src="images/home/house-28.jpg" alt="img" />
          </a>
          <div className="content">
            <div className="text-capitalize text-btn"><a href="property-details-v4.html" className="link">Casa Lomas de Machalí Machas</a></div>
            <ul className="meta-list mt-6">
              <li className="item">
                <i className="icon icon-bed"></i>
                <span className="text-variant-1">Beds:</span>
                <span className="fw-6">3</span>
              </li>
              <li className="item">
                <i className="icon icon-bath"></i>
                <span className="text-variant-1">Baths:</span>
                <span className="fw-6">2</span>
              </li>
              <li className="item">
                <i className="icon icon-sqft"></i>
                <span className="text-variant-1">Sqft:</span>
                <span className="fw-6">1150</span>
              </li>
            </ul>
            <div className="mt-10 text-btn">$7250,00</div>
          </div>
        </li>
        <li className="latest-property-item">
          <a href="property-details-v4.html" className="images-style">
            <img src="images/home/house-29.jpg" alt="img" />
          </a>
          <div className="content">
            <div className="text-capitalize text-btn"><a href="property-details-v4.html" className="link">Casa Lomas de Machalí Machas</a></div>
            <ul className="meta-list mt-6">
              <li className="item">
                <i className="icon icon-bed"></i>
                <span className="text-variant-1">Beds:</span>
                <span className="fw-6">3</span>
              </li>
              <li className="item">
                <i className="icon icon-bath"></i>
                <span className="text-variant-1">Baths:</span>
                <span className="fw-6">2</span>
              </li>
              <li className="item">
                <i className="icon icon-sqft"></i>
                <span className="text-variant-1">Sqft:</span>
                <span className="fw-6">1150</span>
              </li>
            </ul>
            <div className="mt-10 text-btn">$7250,00</div>
          </div>
        </li>
        <li className="latest-property-item">
          <a href="property-details-v4.html" className="images-style">
            <img src="images/home/house-19.jpg" alt="img" />
          </a>
          <div className="content">
            <div className="text-capitalize text-btn"><a href="property-details-v4.html" className="link">Casa Lomas de Machalí Machas</a></div>
            <ul className="meta-list mt-6">
              <li className="item">
                <i className="icon icon-bed"></i>
                <span className="text-variant-1">Beds:</span>
                <span className="fw-6">3</span>
              </li>
              <li className="item">
                <i className="icon icon-bath"></i>
                <span className="text-variant-1">Baths:</span>
                <span className="fw-6">2</span>
              </li>
              <li className="item">
                <i className="icon icon-sqft"></i>
                <span className="text-variant-1">Sqft:</span>
                <span className="fw-6">1150</span>
              </li>
            </ul>
            <div className="mt-10 text-btn">$7250,00</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

    </>
  )
}

export default SidebarProperty