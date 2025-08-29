import Image from "next/image";
import styles from "./page.module.css";
import GotoTop from "./components/GotoTop";
import RecommendedSection from "./components/recomended/RecomendedSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  
  return (
    <>
    <div id="wrapper">
      <div id="pagee" className="clearfix">

        <Header/>
    {/* Slider */}
<section className="flat-slider home-1">
  <div className="container relative">
    <div className="row">
      <div className="col-lg-12">
        <div className="slider-content">
          <div className="heading text-center">
            <h1 className="title-large text-white animationtext slide">
              Find Your
              <span className="tf-text s1 cd-words-wrapper">
                <span className="item-text is-visible">Dream Home</span>
                <span className="item-text is-hidden">Perfect Home</span>
              </span>
            </h1>
            <p
              className="subtitle text-white body-2 wow fadeInUp"
              data-wow-delay=".2s"
            >
              UpFloor is your trusted real estate partner in Kannur, ensuring
              smooth transactions with personalized support, trusted guidance,
              and expert services tailored to the Kannur and Kasaragod property
              market.
            </p>
          </div>
          <div className="flat-tab flat-tab-form">
<ul className="nav-tab-form style-1 justify-content-center" role="tablist">
  <li className="nav-tab-item" role="presentation">
    <a
      href="#forRent"
      className="nav-link-item active"
      data-bs-toggle="tab"
      role="tab"
      aria-selected="true"
      tabIndex="0"
    >
      For Rent
    </a>
  </li>
  <li className="nav-tab-item" role="presentation">
    <a
      href="#forSale"
      className="nav-link-item"
      data-bs-toggle="tab"
      role="tab"
      aria-selected="false"
      tabIndex="-1"
    >
      For Sale
    </a>
  </li>
</ul>
            <div className="tab-content">
              <div className="tab-pane fade active show" role="tabpanel">
                <div className="form-sl">
                  <form method="post">
                    <div className="wd-find-select">
                      <div className="inner-group">
                        {/* Type */}
                        <div className="form-group-1 search-form form-style">
                          <label>Type</label>
                          <div className="group-select">
                            <div className="nice-select" tabIndex="0">
                              <span className="current">All</span>
                              <ul className="list">
                                <li data-value className="option selected">
                                  All
                                </li>
                                <li data-value="villa" className="option">
                                  Villa
                                </li>
                                <li data-value="studio" className="option">
                                  Studio
                                </li>
                                <li data-value="office" className="option">
                                  Office
                                </li>
                                <li data-value="house" className="option">
                                  House
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* Location */}
                        <div className="form-group-2 form-style">
                          <label>Location</label>
                          <div className="group-ip">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search Location"
                              name="s"
                              title="Search for"
                              required
                            />
                            <a href="#" className="icon icon-location"></a>
                          </div>
                        </div>
                        {/* Keyword */}
                        <div className="form-group-3 form-style">
                          <label>Keyword</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Keyword."
                            name="s"
                            title="Search for"
                            required
                          />
                        </div>
                      </div>
                      <div className="box-btn-advanced">
                        <div className="form-group-4 box-filter">
                          <a className="tf-btn btn-line filter-advanced pull-right">
                            <span className="text-1">Search advanced</span>
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.5 12.375V3.4375M5.5 12.375C5.86467 12.375 6.21441 12.5199 6.47227 12.7777C6.73013 13.0356 6.875 13.3853 6.875 13.75C6.875 14.1147 6.73013 14.4644 6.47227 14.7223C6.21441 14.9801 5.86467 15.125 5.5 15.125M5.5 12.375C5.13533 12.375 4.78559 12.5199 4.52773 12.7777C4.26987 13.0356 4.125 13.3853 4.125 13.75C4.125 14.1147 4.26987 14.4644 4.52773 14.7223C4.78559 14.9801 5.13533 15.125 5.5 15.125M5.5 15.125V18.5625M16.5 12.375V3.4375M16.5 12.375C16.8647 12.375 17.2144 12.5199 17.4723 12.7777C17.7301 13.0356 17.875 13.3853 17.875 13.75C17.875 14.1147 17.7301 14.4644 17.4723 14.7223C17.2144 14.9801 16.8647 15.125 16.5 15.125M16.5 12.375C16.1353 12.375 15.7856 12.5199 15.5277 12.7777C15.2699 13.0356 15.125 13.3853 15.125 13.75C15.125 14.1147 15.2699 14.4644 15.5277 14.7223C15.7856 14.9801 16.1353 15.125 16.5 15.125M16.5 15.125V18.5625M11 6.875V3.4375M11 6.875C11.3647 6.875 11.7144 7.01987 11.9723 7.27773C12.2301 7.53559 12.375 7.88533 12.375 8.25C12.375 8.61467 12.2301 8.96441 11.9723 9.22227C11.7144 9.48013 11.3647 9.625 11 9.625M11 6.875C10.6353 6.875 10.2856 7.01987 10.0277 7.27773C9.76987 7.53559 9.625 7.88533 9.625 8.25C9.625 8.61467 9.76987 8.96441 10.0277 9.22227C10.2856 9.48013 10.6353 9.625 11 9.625M11 9.625V18.5625"
                                stroke="#161E2D"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="tf-btn btn-search primary"
                        >
                          Search <i className="icon icon-search"></i>
                        </button>
                      </div>
                    </div>

                    {/* Advanced search form (Price, Size, Rooms, Amenities etc.) */}
                    {/* KEEP THE REST STRUCTURE SAME – all class → className */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="overlay"></div>
</section>
{/* End Slider */}

{/* Recommended For You */}

<RecommendedSection/>

{/* Recommended For You end */}

{/* Location */}
<section className="flat-location px-10">
    <div className="box-title text-center wow fadeInUp">
        <div className="text-subtitle text-primary">Explore Cities</div>
        <h3 className="mt-4 title">Our Location For You</h3>
    </div>
    <div className="wow fadeInUp" data-wow-delay=".2s">
        <div dir="ltr" className="swiper tf-sw-location" data-preview="6" data-tablet="3" data-mobile-sm="2" data-mobile="1" data-space-lg="8" data-space-md="8" data-space="8" data-pagination="1" data-pagination-sm="2" data-pagination-md="3" data-pagination-lg="3">
            <div className="swiper-wrapper d-flex justify-content-center">
                <div className="swiper-slide">
                    <div className="box-location">
                        <a href="topmap-grid.html" className="image img-style">
                            <img className="lazyload" data-src="images/location/location-1.jpg" src="images/location/location-1.jpg" alt="image-location" />
                        </a>
                        <div className="content">
                            <div className="inner-left">
                                <span className="sub-title fw-6">321 Property</span>
                                <h6 className="title text-line-clamp-1 link">Kannur</h6>
                            </div>
                            <a href="topmap-grid.html" className="box-icon line w-44 round"><i className="icon icon-arrow-right2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="box-location">
                        <a href="topmap-grid.html" className="image img-style">
                            <img className="lazyload" data-src="images/location/location-2.jpg" src="images/location/location-2.jpg" alt="image-location" />
                        </a>
                        <div className="content">
                            <div className="inner-left">
                                <span className="sub-title fw-6">321 Property</span>
                                <h6 className="title text-line-clamp-1 link">Payyanur</h6>
                            </div>
                            <a href="topmap-grid.html" className="box-icon line w-44 round"><i className="icon icon-arrow-right2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="box-location">
                        <a href="topmap-grid.html" className="image img-style">
                            <img className="lazyload" data-src="images/location/location-3.jpg" src="images/location/location-3.jpg" alt="image-location" />
                        </a>
                        <div className="content">
                            <div className="inner-left">
                                <span className="sub-title fw-6">321 Property</span>
                                <h6 className="title text-line-clamp-1 link">Thrikarippur</h6>
                            </div>
                            <a href="topmap-grid.html" className="box-icon line w-44 round"><i className="icon icon-arrow-right2"></i></a>
                        </div>
                    </div>
                </div>                            
                <div className="swiper-slide">
                    <div className="box-location">
                        <a href="topmap-grid.html" className="image img-style">
                            <img className="lazyload" data-src="images/location/location-4.jpg" src="images/location/location-4.jpg" alt="image-location" />
                        </a>
                        <div className="content">
                            <div className="inner-left">
                                <span className="sub-title fw-6">321 Property</span>
                                <h6 className="title text-line-clamp-1 link">Kasaragod</h6>
                            </div>
                            <a href="topmap-grid.html" className="box-icon line w-44 round"><i className="icon icon-arrow-right2"></i></a>
                        </div>
                    </div>
                </div>
                
                <div className="swiper-slide">
                    <div className="box-location">
                        <a href="topmap-grid.html" className="image img-style">
                            <img className="lazyload" data-src="images/location/location-1.jpg" src="images/location/location-1.jpg" alt="image-location" />
                        </a>
                        <div className="content">
                            <div className="inner-left">
                                <span className="sub-title fw-6">321 Property</span>
                                <h6 className="title text-line-clamp-1 link">Thalipparamba</h6>
                            </div>
                            <a href="topmap-grid.html" className="box-icon line w-44 round"><i className="icon icon-arrow-right2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sw-pagination sw-pagination-location text-center"></div>
        </div>
    </div>
</section>
{/* End Location */}

{/* Service  */}
<section className="flat-section">
    <div className="container">
        <div className="box-title text-center wow fadeInUp">
            <div className="text-subtitle text-primary">Our Services</div>
            <h3 className="mt-4 title">What We Do?</h3>
        </div>
        <div className="tf-grid-layout md-col-3 wow fadeInUp" data-wow-delay=".2s">
            <div className="box-service">
                <div className="image">
                    <img className="lazyload" data-src="images/service/home-1.png" src="images/service/home-1.png" alt="image-location" />
                </div>
                <div className="content">
                    <h5 className="title">Buy A New Home</h5>
                    <p className="description">Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>
                    <a href="sidebar-grid.html" className="tf-btn btn-line">Learn More <span className="icon icon-arrow-right2"></span></a>
                </div>
            </div>
            <div className="box-service">
                <div className="image">
                    <img className="lazyload" data-src="images/service/home-2.png" src="images/service/home-2.png" alt="image-location" />
                </div>
                <div className="content">
                    <h5 className="title">Sell a home</h5>
                    <p className="description">Sell confidently with expert guidance and effective strategies, showcasing your propertys best features for a successful sale.</p>
                    <a href="sidebar-grid.html" className="tf-btn btn-line">Learn More <span className="icon icon-arrow-right2"></span></a>
                </div>
            </div>
            <div className="box-service">
                <div className="image">
                    <img className="lazyload" data-src="images/service/home-3.png" src="images/service/home-3.png" alt="image-location" />
                </div>
                <div className="content">
                    <h5 className="title">Rent a home</h5>
                    <p className="description">Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.</p>
                    <a href="sidebar-grid.html" className="tf-btn btn-line">Learn More <span className="icon icon-arrow-right2"></span></a>
                </div>
            </div>
        </div>
    </div>
</section>
{/* End Service */}

<section className="flat-section bg-primary-new">
    <div className="container3">
        <div className="flat-img-with-text-v2">
            <div className="content-left tf-image-box">
                <div className="grid-img-group">
                    <div className="tf-image-wrap item-1">
                        <div className="img-style hover-img-wrap">
                            <img className="lazyload" data-src="images/banner/img-w-text-sm1.jpg" src="images/banner/img-w-text-sm1.jpg" alt="" />
                        </div>
                        <div className="tag-item ani5">
                            <i className="icon icon-check-circle"></i>
                            <span>Proven Expertise</span>
                        </div>
                    </div>
                    <div className="tf-image-wrap item-2">
                        <div className="img-style hover-img-wrap">
                            <img className="lazyload" data-src="images/banner/img-w-text2.jpg" src="images/banner/img-w-text2.jpg" alt="" />
                        </div>
                        <div className="tag-item tag-item-1 ani4">
                            <i className="icon icon-check-circle"></i>
                            <span>Customized Solutions</span>
                        </div>
                        <div className="tag-item tag-item-2 ani5">
                            <i className="icon icon-check-circle"></i>
                            <span>Transparent Partnerships</span>
                        </div>
                    </div>
                    <div className="tf-image-wrap item-3">
                        <div className="img-style hover-img-wrap">
                            <img className="lazyload" data-src="images/banner/img-w-text-sm2.jpg" src="images/banner/img-w-text-sm2.jpg" alt="" />
                        </div>
                        <div className="tag-item ani4">
                            <i className="icon icon-check-circle"></i>
                            <span>Local Area Knowledge</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-right">
                <div className="box-title wow fadeInUpSmall" data-wow-delay=".2s" data-wow-duration="2000ms">
                    <div className="text-subtitle text-primary">Our Benifit</div>
                    <h3 className="title mt-4">Why Choose UpFloor</h3>
                    <p className="desc text-variant-1">Our seasoned team excels in real estate with years of successful market
                        navigation, offering informed decisions and optimal results.</p>
                </div>
                <div className="flat-service">
                    <a href="#" className="box-benefit hover-btn-view">
                        <div className="icon-box">
                            <span className="icon icon-proven"></span>
                        </div>
                        <div className="content">
                            <h5 className="title">Tailored for Kannur’s<br />
                                Real Estate Market</h5>
                            <p className="description">We understand the unique challenges faced by property buyers and sellers in rural and semi-urban areas of Kannur and Kasaragod. Our services are designed specifically to meet the needs of communities like yours including towns like Payyanur and beyond.</p>
                        </div>
                    </a>
                    <a href="#" className="box-benefit hover-btn-view">
                        <div className="icon-box">
                            <span className="icon icon-customize"></span>
                        </div>
                        <div className="content">
                            <h5 className="title">Affordable Solutions for<br />
                                Everyone</h5>
                            <p className="description">With our plans starting as low as ₹2,000, we make high-quality real estate services accessible to everyone. Get the best value for your money with options that fit your budget.</p>
                        </div>
                    </a>
                    <a href="#" className="box-benefit hover-btn-view">
                        <div className="icon-box">
                            <span className="icon icon-partnership"></span>
                        </div>
                        <div className="content">
                            <h5 className="title">Transparency and Trust<br />
                                You Can Rely On</h5>
                            <p className="description">No hidden charges, no surprises. We offer real estate services in Kannur with full transparency-providing clear timelines and detailed breakdowns of every plan. What you see is what you get, with no hidden fees.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
 
 {/* Benefit */}
<section className="mx-5 bg-primary-new radius-30">
    <div className="flat-img-with-text">
        <div className="content-right">
            <div className="flat-service wow fadeInUp" data-wow-delay=".2s">
                <a href="#" className="box-benefit hover-btn-view">
                    <div className="icon-box">
                        <span className="icon icon-proven"></span>
                    </div>
                    <div className="content">
                        <h5 className="title">Expert Support at Every Step of Your Property Journey</h5>
                        <p className="description">From property inspections to documentation assistance, our experienced team offers expert support at every stage of your transaction. We guide you through every step, ensuring a smooth, stress-free experience.</p>
                    </div>
                </a>
                <a href="#" className="box-benefit hover-btn-view">
                    <div className="icon-box">
                        <span className="icon icon-customize"></span>
                    </div>
                    <div className="content">
                        <h5 className="title">Enhanced Property Appeal<br />
                            for Better Results</h5>
                        <p className="description">With features like high-quality photography, walkthrough videos, and drone shoots, we help your property stand out and attract genuine leads.</p>
                    </div>
                </a>
                <a href="#" className="box-benefit hover-btn-view">
                    <div className="icon-box">
                        <span className="icon icon-partnership"></span>
                    </div>
                    <div className="content">
                        <h5 className="title">Local Expertise,<br />
                            Personalized Service</h5>
                        <p className="description">As a company rooted in Payyanur, Kannur, we bring local knowledge and a personal touch to every transaction. Were not just another real estate service-were your neighbors, committed to helping you succeed.</p>
                    </div>
                </a>
            </div>
        </div>
        <div className="content-left img-animation wow">
            <img className="lazyload" data-src="images/banner/img-w-text1.jpg" src="images/banner/img-w-text1.jpg" alt="" />
        </div>
    </div> 
</section>
{/* End Benefit */}

{/* app advertisement */}
<section className="flat-section pt-8 flat-banner wow fadeInUpSmall" data-wow-delay=".2s" data-wow-duration="2000ms">
    <div className="container">
        <br /><br />
        <div className="wrap-banner bg-primary-new">
            <div className="box-left">
                <div className="box-title">
                    <div className="text-subtitle text-primary">Download app now</div>
                    <h3 className="mt-4 fw-8">Ready to Get Started?</h3>
                    <br />
                    <p className="">Download Our App and start listing your property today. Experience seamless selling and buying with UpFloor-the best user friendly real estate app in Kannur and Kasaragod.</p>
                </div>
                <a href="contact.html" className="tf-btn btn-view primary size-1 hover-btn-view">Download App <span className="icon icon-arrow-right2"></span></a>
            </div>
            <div className="box-right">
                <img src="images/banner/banner.png" alt="image" />
            </div>
        </div>
    </div>
</section>
{/* app advertisement end */}

{/* Latest New */}
<section className="flat-section bg-primary-new">
    <div className="container">
        <div className="box-title text-center wow fadeInUp">
            <div className="text-subtitle text-primary">Latest New</div>
            <h3 className="title mt-4">From Our Blog</h3>
        </div>
        <div dir="ltr" className="swiper tf-sw-latest wow fadeInUp" data-wow-delay=".2s" data-preview="3" data-tablet="2" data-mobile-sm="2" data-mobile="1" data-space-lg="30" data-space-md="15" data-space="15">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <a href="blog-detail.html" className="flat-blog-item hover-img">
                        <div className="img-style">
                            <img className="lazyload" data-src="images/blog/blog-10.jpg" src="images/blog/blog-10.jpg" alt="img-blog" />
                            <span className="date-post">January 28, 2024</span>
                        </div>
                        <div className="content-box">
                            <div className="post-author">
                                <span className="fw-6">Jerome Bell</span>
                                <span>Furniture</span>
                            </div>
                            <h5 className="title link">Building gains into housing stocks and how to trade the sector</h5>
                            <p className="description">The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...</p>
                        </div>
                    </a>
                </div>
                <div className="swiper-slide">
                    <a href="blog-detail.html" className="flat-blog-item hover-img">
                        <div className="img-style">
                            <img className="lazyload" data-src="images/blog/blog-11.jpg" src="images/blog/blog-11.jpg" alt="img-blog" />
                            <span className="date-post">January 28, 2024</span>
                        </div>
                        <div className="content-box">
                            <div className="post-author">
                                <span className="fw-6">Jerome Bell</span>
                                <span>Furniture</span>
                            </div>
                            <h5 className="title link">Building gains into housing stocks and how to trade the sector</h5>
                            <p className="description">The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...</p>
                        </div>
                    </a>
                </div>
                <div className="swiper-slide">
                    <a href="blog-detail.html" className="flat-blog-item hover-img">
                        <div className="img-style">
                            <img className="lazyload" data-src="images/blog/blog-12.jpg" src="images/blog/blog-12.jpg" alt="img-blog" />
                            <span className="date-post">January 28, 2024</span>
                        </div>
                        <div className="content-box">
                            <div className="post-author">
                                <span className="fw-6">Jerome Bell</span>
                                <span>Furniture</span>
                            </div>
                            <h5 className="title link">Building gains into housing stocks and how to trade the sector</h5>
                            <p className="description">The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="sw-pagination sw-pagination-latest text-center"></div>
        </div>
    </div>
</section>
{/* End Latest New */}

{/* footer */}
<Footer/>
{/* end footer */}
      </div>
    </div>

    <GotoTop/>

    </>
  );
}
