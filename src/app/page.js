import Image from "next/image";
import styles from "./page.module.css";
import GotoTop from "./components/GotoTop";
import RecommendedSection from "./components/recomended/RecomendedSection";

export default function Home() {
  
  return (
    <>
    <div id="wrapper">
      <div id="pagee" className="clearfix">

        <header id="header" className="main-header header-fixed fixed-header">
      {/* Header Lower */}
      <div className="header-lower">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner-header">
              <div className="inner-header-left">
                <div className="logo-box flex">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="/images/logo/logo.svg"
                        alt="logo"
                        width="166"
                        height="48"
                      />
                    </a>
                  </div>
                </div>

                <div className="nav-outer flex align-center">
                  {/* Main Menu */}
                  <nav className="main-menu show navbar-expand-md">
                    <div
                      className="navbar-collapse collapse clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation clearfix">
                        <li className="home current">
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="sidebar-grid.html">Property For Sale</a>
                        </li>
                        <li>
                          <a href="seller-service.html">Seller Service</a>
                        </li>
                        <li>
                          <a href="blog-grid.html">Blog</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  {/* Main Menu End */}
                </div>
              </div>

              <div className="inner-header-right header-account">
                <a
                  href="#modalLogin"
                  data-bs-toggle="modal"
                  className="tf-btn btn-line btn-login"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.625 14.375V17.1875C13.625 17.705 13.205 18.125 12.6875 18.125H4.5625C4.31386 18.125 4.0754 18.0262 3.89959 17.8504C3.72377 17.6746 3.625 17.4361 3.625 17.1875V6.5625C3.625 6.045 4.045 5.625 4.5625 5.625H6.125C6.54381 5.62472 6.96192 5.65928 7.375 5.72834M13.625 14.375H16.4375C16.955 14.375 17.375 13.955 17.375 13.4375V9.375C17.375 5.65834 14.6725 2.57417 11.125 1.97834C10.7119 1.90928 10.2938 1.87472 9.875 1.875H8.3125C7.795 1.875 7.375 2.295 7.375 2.8125V5.72834M13.625 14.375H8.3125C8.06386 14.375 7.8254 14.2762 7.64959 14.1004C7.47377 13.9246 7.375 13.6861 7.375 13.4375V5.72834M17.375 11.25V9.6875C17.375 8.94158 17.0787 8.22621 16.5512 7.69876C16.0238 7.17132 15.3084 6.875 14.5625 6.875H13.3125C13.0639 6.875 12.8254 6.77623 12.6496 6.60041C12.4738 6.4246 12.375 6.18614 12.375 5.9375V4.6875C12.375 4.31816 12.3023 3.95243 12.1609 3.6112C12.0196 3.26998 11.8124 2.95993 11.5512 2.69876C11.2901 2.4376 10.98 2.23043 10.6388 2.08909C10.2976 1.94775 9.93184 1.875 9.5625 1.875H8.625"
                      stroke="#035f0a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Quick List Property
                </a>

                <div className="flat-bt-top">
                  <a className="tf-btn primary" href="">
                    Download App
                  </a>
                </div>
              </div>

              <div className="mobile-nav-toggler mobile-button">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Lower */}

      {/* Mobile Menu */}
      <div className="close-btn">
        <span className="icon flaticon-cancel-1"></span>
      </div>

      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <nav className="menu-box">
          <div className="nav-logo">
            <a href="index.html">
              <img
                src="/images/logo/logo@2x.png"
                alt="nav-logo"
                width="174"
                height="44"
              />
            </a>
          </div>
          <div className="bottom-canvas">
            <div className="login-box flex align-center">
              <a href="#modalLogin" data-bs-toggle="modal">
                Login
              </a>
              <span>/</span>
              <a href="#modalRegister" data-bs-toggle="modal">
                Register
              </a>
            </div>
            <div className="menu-outer"></div>
            <div className="button-mobi-sell">
              <a className="tf-btn primary" href="add-property.html">
                Submit Property
              </a>
            </div>
            <div className="mobi-icon-box">
              <div className="box d-flex align-items-center">
                <span className="icon icon-phone2"></span>
                <div>1-333-345-6868</div>
              </div>
              <div className="box d-flex align-items-center">
                <span className="icon icon-mail"></span>
                <div>themesflat@gmail.com</div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>


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
                    <p className="description">Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.</p>
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
                        <p className="description">As a company rooted in Payyanur, Kannur, we bring local knowledge and a personal touch to every transaction. We're not just another real estate service-we're your neighbors, committed to helping you succeed.</p>
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
<footer className="footer">
    <div className="top-footer">
        <div className="container">
            <div className="content-footer-top">
                <div className="footer-logo"><a href="index.html"><img src="images/logo/logo-footer@2x.png" alt="logo" width="166" height="48" /></a></div>
                <div className="wd-social">
                    <span>Follow Us:</span>
                    <ul className="list-social d-flex align-items-center">
                        <li>
                            <a href="https://www.facebook.com/weareupfloorian" target="_blank" className="box-icon w-40 social">
                                <svg className="icon" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.60547 9L8.00541 6.10437H5.50481V4.22531C5.50481 3.43313 5.85413 2.66094 6.97406 2.66094H8.11087V0.195625C8.11087 0.195625 7.07925 0 6.09291 0C4.03359 0 2.68753 1.38688 2.68753 3.8975V6.10437H0.398438V9H2.68753V16H5.50481V9H7.60547Z" fill="white" />
                                </svg>
                            </a>
                        </li>
                        <li><a href="https://www.linkedin.com/company/upfloor-pro" target="_blank" className="box-icon w-40 social">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.58151 16H0.264292V5.31762H3.58151V16ZM1.92111 3.86044C0.860376 3.86044 0 2.98185 0 1.92111C7.59231e-09 1.4116 0.202403 0.92296 0.562681 0.562681C0.92296 0.202403 1.4116 0 1.92111 0C2.43063 0 2.91927 0.202403 3.27955 0.562681C3.63983 0.92296 3.84223 1.4116 3.84223 1.92111C3.84223 2.98185 2.98149 3.86044 1.92111 3.86044ZM15.9968 16H12.6867V10.7999C12.6867 9.56057 12.6617 7.97125 10.962 7.97125C9.23735 7.97125 8.97306 9.31771 8.97306 10.7106V16H5.65941V5.31762H8.84091V6.77479H8.88734C9.33021 5.93549 10.412 5.04976 12.026 5.04976C15.3832 5.04976 16.0004 7.26052 16.0004 10.132V16H15.9968Z" fill="white" />
                            </svg>
                        </a></li>
                        <li><a href="https://www.instagram.com/upfloorlive/" target="_blank" className="box-icon w-40 social">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99812 4.66567C5.71277 4.66567 4.66383 5.71463 4.66383 7C4.66383 8.28537 5.71277 9.33433 6.99812 9.33433C8.28346 9.33433 9.3324 8.28537 9.3324 7C9.3324 5.71463 8.28346 4.66567 6.99812 4.66567ZM13.9992 7C13.9992 6.03335 14.008 5.07545 13.9537 4.11055C13.8994 2.98979 13.6437 1.99512 12.8242 1.17556C12.0029 0.35426 11.01 0.100338 9.88927 0.0460516C8.92263 -0.00823506 7.96475 0.000520879 6.99987 0.000520879C6.03323 0.000520879 5.07536 -0.00823506 4.11047 0.0460516C2.98973 0.100338 1.99508 0.356011 1.17554 1.17556C0.354253 1.99687 0.100336 2.98979 0.0460508 4.11055C-0.00823491 5.0772 0.00052087 6.0351 0.00052087 7C0.00052087 7.9649 -0.00823491 8.92455 0.0460508 9.88945C0.100336 11.0102 0.356004 12.0049 1.17554 12.8244C1.99683 13.6457 2.98973 13.8997 4.11047 13.9539C5.07711 14.0082 6.03499 13.9995 6.99987 13.9995C7.9665 13.9995 8.92438 14.0082 9.88927 13.9539C11.01 13.8997 12.0047 13.644 12.8242 12.8244C13.6455 12.0031 13.8994 11.0102 13.9537 9.88945C14.0097 8.92455 13.9992 7.96665 13.9992 7ZM6.99812 10.5917C5.01056 10.5917 3.40651 8.98759 3.40651 7C3.40651 5.01241 5.01056 3.40832 6.99812 3.40832C8.98567 3.40832 10.5897 5.01241 10.5897 7C10.5897 8.98759 8.98567 10.5917 6.99812 10.5917ZM10.7368 4.10004C10.2728 4.10004 9.89802 3.72529 9.89802 3.26122C9.89802 2.79716 10.2728 2.42241 10.7368 2.42241C11.2009 2.42241 11.5756 2.79716 11.5756 3.26122C11.5758 3.37142 11.5542 3.48056 11.5121 3.58239C11.47 3.68422 11.4082 3.77675 11.3303 3.85467C11.2523 3.93258 11.1598 3.99437 11.058 4.03647C10.9562 4.07858 10.847 4.10018 10.7368 4.10004Z" fill="white" />
                            </svg>
                        </a></li>
                        <li><a href="https://www.youtube.com/channel/UCCKFAxfjPviwLuTnuTbSFOw" target="_blank" className="box-icon w-40 social">
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.6657 1.76024C15.4817 1.06737 14.9395 0.521689 14.2511 0.336504C13.0033 0 8 0 8 0C8 0 2.99669 0 1.7489 0.336504C1.06052 0.521718 0.518349 1.06737 0.334336 1.76024C0 3.01611 0 5.63636 0 5.63636C0 5.63636 0 8.25661 0.334336 9.51248C0.518349 10.2053 1.06052 10.7283 1.7489 10.9135C2.99669 11.25 8 11.25 8 11.25C8 11.25 13.0033 11.25 14.2511 10.9135C14.9395 10.7283 15.4817 10.2053 15.6657 9.51248C16 8.25661 16 5.63636 16 5.63636C16 5.63636 16 3.01611 15.6657 1.76024ZM6.36363 8.01535V3.25737L10.5454 5.63642L6.36363 8.01535Z" fill="white" />
                            </svg>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="inner-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6">
                    <div className="footer-cl-1">
                        <div className="fw-7 text-white footer-heading-mobile">Get in Touch</div>
                        <ul className="mt-12">
                            <li className="mt-12 d-flex align-items-center gap-8">
                                <i className="icon icon-mapPinLine fs-20 text-variant-2"></i>
                                <p className="text-white">PMC XX, M R Complex, Opp. Riyadh Mall, Perumba<br />
                                    Payyanur, Kannur, Kerala - 670307</p>
                            </li>
                            <li className="mt-12 d-flex align-items-center gap-8">
                                <i className="icon icon-phone2 fs-20 text-variant-2"></i>
                                <a href="tel:+91 77362 77630" className="text-white caption-1">+91 77362 77630</a>
                                <a href="tel:+91 77365 72630" className="text-white caption-1">+91 77365 72630</a>
                            </li>
                            <li className="mt-12 d-flex align-items-center gap-8">
                                <i className="icon icon-mail fs-20 text-variant-2"></i>
                                <p className="text-white">helpdesk@upfloor.in</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-cl-2 footer-col-block">
                        <div className="fw-7 text-white footer-heading-mobile">Categories</div>
                        <div className="tf-collapse-content">
                            <ul className="mt-10 navigation-menu-footer">
                                <li> <a href="topmap-list.html" className="caption-1 text-variant-2">Buy Property</a> </li>
                                <li> <a href="seller-service.html" className="caption-1 text-variant-2">Seller Sevice</a> </li>
                                <li> <a href="contact.html" className="caption-1 text-variant-2">Contact Us</a> </li>
                                <li> <a href="blog.html" className="caption-1 text-variant-2">Blog</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="footer-cl-4 footer-col-block">
                        <div className="fw-7 text-white footer-heading-mobile">Newsletter</div>
                        <div className="tf-collapse-content">
                            <p className="mt-12 text-variant-2">Your Weekly/Monthly Dose of Knowledge and Inspiration</p>
                            <form className="mt-12" id="subscribe-form" action="#" method="post" acceptCharset="utf-8" data-mailchimp="true">
                                <div id="subscribe-content">
                                    <input type="email" name="email-form" id="subscribe-email" placeholder="Your email address" />
                                    <button type="button" id="subscribe-button" className="button-subscribe">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.00044 9.99935L2.72461 2.60352C8.16867 4.18685 13.3024 6.68806 17.9046 9.99935C13.3027 13.3106 8.16921 15.8118 2.72544 17.3952L5.00044 9.99935ZM5.00044 9.99935H11.2504" stroke="#1563DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div id="subscribe-msg"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="bottom-footer">
        <div className="container">
            <div className="content-footer-bottom">
                <div className="copyright">© 2025 Akatsa LLP - All rights reserved.</div>
                <ul className="menu-bottom">
                    <li><a href="disclaimer.html">Disclaimer</a> </li>
                    <li><a href="privacy-policy.html">Privacy Policy</a> </li>
                    <li><a href="service-policy.html">Service Policy</a> </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
{/* end footer */}
      </div>
    </div>

    <GotoTop/>

    </>
  );
}
