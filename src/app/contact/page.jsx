import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsForm from '../components/ContactUsForm'

function page() {
  return (
    <>
    <div id="wrapper">
        <div id="pagee" className="clearfix">
               <Header/>
               {/* Page Title */}

<section
  className="flat-title-page"
  style={{ backgroundImage: "url(images/page-title/page-title-4.jpg)" }}
>
  <div className="container">
    <div className="breadcrumb-content">
      <ul className="breadcrumb">
        <li><a href="/" className="text-white">Home</a></li>
        <li className="text-white">/ Pages</li>
        <li className="text-white">/ Contact Us</li>
      </ul>
      <h1 className="text-center text-white title">Contact Us</h1>
    </div>
  </div>
</section>

{/* End Page Title */}

<section className="flat-section flat-contact">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <ContactUsForm/>
      </div>

      <div className="col-lg-4">
        <div className="contact-info">
          <h4>Contact Us</h4>
          <ul>
            <li className="box">
              <h6 className="title">Address:</h6>
              <p className="text-variant-1">
                PMC XX, M R Complex, Opp. Riyadh Mall, Perumba,
                <br /> Payyanur, Kannur, Kerala - 670307
              </p>
            </li>
            <li className="box">
              <h6 className="title">Infomation:</h6>
              <p className="text-variant-1">
                +91 77362 77630, +91 77365 72630
                <br /> helpdesk@upfloor.in
              </p>
            </li>
            <li className="box">
              <h6 className="title">Opentime:</h6>
              <p className="text-variant-1">
                Monay - Sunday: 10:00 AM - 6:00 PM
                <br />
              </p>
            </li>

            <li className="box">
              <div className="title">Follow Us:</div>
              <ul className="box-social">
                <li>
                  <a
                    href="https://www.facebook.com/weareupfloorian"
                    target="_blank"
                    className="item"
                  >
                    <svg
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.00879 10.125L9.50871 6.86742H6.38297V4.75348C6.38297 3.86227 6.81961 2.99355 8.21953 2.99355H9.64055V0.220078C9.64055 0.220078 8.35102 0 7.11809 0C4.54395 0 2.86137 1.56023 2.86137 4.38469V6.86742H0V10.125H2.86137V18H6.38297V10.125H9.00879Z"
                        fill="#161E2D"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/upfloorlive/"
                    target="_blank"
                    className="item"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.00245 4.38427C6.4484 4.38427 4.38828 6.44438 4.38828 8.99844C4.38828 11.5525 6.4484 13.6126 9.00245 13.6126C11.5565 13.6126 13.6166 11.5525 13.6166 8.99844C13.6166 6.44438 11.5565 4.38427 9.00245 4.38427ZM9.00245 11.9983C7.35195 11.9983 6.00264 10.653 6.00264 8.99844C6.00264 7.34392 7.34794 5.99862 9.00245 5.99862C10.657 5.99862 12.0023 7.34392 12.0023 8.99844C12.0023 10.653 10.653 11.9983 9.00245 11.9983ZM14.8816 4.19552C14.8816 4.79388 14.3997 5.27176 13.8054 5.27176C13.207 5.27176 12.7291 4.78986 12.7291 4.19552C12.7291 3.60118 13.211 3.11928 13.8054 3.11928C14.3997 3.11928 14.8816 3.60118 14.8816 4.19552ZM17.9376 5.28782C17.8694 3.84615 17.5401 2.56912 16.4839 1.51697C15.4318 0.46483 14.1547 0.135534 12.7131 0.0632491C11.2272 -0.021083 6.77368 -0.021083 5.28782 0.0632491C3.85016 0.131518 2.57313 0.460815 1.51697 1.51296C0.460815 2.5651 0.135534 3.84213 0.0632491 5.28381C-0.021083 6.76966 -0.021083 11.2232 0.0632491 12.7091C0.131518 14.1507 0.460815 15.4278 1.51697 16.4799C2.57313 17.532 3.84615 17.8613 5.28782 17.9336C6.77368 18.018 11.2272 18.018 12.7131 17.9336C14.1547 17.8654 15.4318 17.5361 16.4839 16.4799C17.5361 15.4278 17.8654 14.1507 17.9376 12.7091C18.022 11.2232 18.022 6.77368 17.9376 5.28782ZM16.0181 14.3033C15.7048 15.0904 15.0985 15.6968 14.3073 16.0141C13.1227 16.4839 10.3116 16.3755 9.00245 16.3755C7.6933 16.3755 4.87821 16.4799 3.69756 16.0141C2.91046 15.7008 2.30407 15.0944 1.98682 14.3033C1.51697 13.1187 1.6254 10.3076 1.6254 8.99844C1.6254 7.68928 1.52099 4.8742 1.98682 3.69355C2.30006 2.90645 2.90645 2.30006 3.69756 1.98281C4.88223 1.51296 7.6933 1.62139 9.00245 1.62139C10.3116 1.62139 13.1267 1.51697 14.3073 1.98281C15.0944 2.29604 15.7008 2.90243 16.0181 3.69355C16.4879 4.87821 16.3795 7.68928 16.3795 8.99844C16.3795 10.3076 16.4879 13.1227 16.0181 14.3033Z"
                        fill="#161E2D"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCCKFAxfjPviwLuTnuTbSFOw"
                    target="_blank"
                    className="item"
                  >
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.2775 2.16608C19.051 1.31346 18.3839 0.641967 17.5368 0.414086C16.0013 0 9.84445 0 9.84445 0C9.84445 0 3.68759 0 2.15212 0.414086C1.30502 0.642003 0.637857 1.31346 0.411419 2.16608C0 3.71149 0 6.93586 0 6.93586C0 6.93586 0 10.1602 0.411419 11.7056C0.637857 12.5583 1.30502 13.2018 2.15212 13.4296C3.68759 13.8437 9.84445 13.8437 9.84445 13.8437C9.84445 13.8437 16.0013 13.8437 17.5368 13.4296C18.3839 13.2018 19.051 12.5583 19.2775 11.7056C19.6889 10.1602 19.6889 6.93586 19.6889 6.93586C19.6889 6.93586 19.6889 3.71149 19.2775 2.16608ZM7.8308 9.86334V4.00837L12.9767 6.93593L7.8308 9.86334Z"
                        fill="#161E2D"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/upfloor-pro"
                    target="_blank"
                    className="item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#161E2D"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* faq */}
{/* <section className="flat-section">
  <div className="container"> 
    <div className="tf-faq">
      <div
        className="box-title style-1 text-center wow fadeInUpSmall"
        data-wow-delay=".2s"
        data-wow-duration="2000ms"
      >
        <div className="text-subtitle text-primary">Faqs</div>
        <h3 className="title mt-4">Frequently Asked Questions</h3>
      </div>
      <ul className="box-faq" id="wrapper-faq">
        <li className="faq-item">
          <a
            href="#accordion-faq-one"
            className="faq-header collapsed"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="accordion-faq-one"
          >
            Why should I use your services?
          </a>
          <div
            id="accordion-faq-one"
            className="collapse"
            data-bs-parent="#wrapper-faq"
          >
            <p className="faq-body">
              Once your account is set up and you've familiarized yourself with the platform, you are ready to start using our services. Whether it's accessing specific features, making transactions, or utilizing our tools, you'll find everything you need at your fingertips.
            </p>
          </div>
        </li>
        <li className="faq-item active">
          <a
            href="#accordion-faq-two"
            className="faq-header"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="accordion-faq-two"
          >
            How do I get started with your services?
          </a>
          <div
            id="accordion-faq-two"
            className="collapse show"
            data-bs-parent="#wrapper-faq"
          >
            <p className="faq-body">
              Once your account is set up and you've familiarized yourself with the platform, you are ready to start using our services. Whether it's accessing specific features, making transactions, or utilizing our tools, you'll find everything you need at your fingertips.
            </p>
          </div>
        </li>
        <li className="faq-item">
          <a
            href="#accordion-faq-three"
            className="faq-header collapsed"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="accordion-faq-three"
          >
            How secure are your services?
          </a>
          <div
            id="accordion-faq-three"
            className="collapse"
            data-bs-parent="#wrapper-faq"
          >
            <p className="faq-body">
              Once your account is set up and you've familiarized yourself with the platform, you are ready to start using our services. Whether it's accessing specific features, making transactions, or utilizing our tools, you'll find everything you need at your fingertips.
            </p>
          </div>
        </li>
        <li className="faq-item">
          <a
            href="#accordion-faq-four"
            className="faq-header collapsed"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="accordion-faq-four"
          >
            Is there customer support available?
          </a>
          <div
            id="accordion-faq-four"
            className="collapse"
            data-bs-parent="#wrapper-faq"
          >
            <p className="faq-body">
              Once your account is set up and you've familiarized yourself with the platform, you are ready to start using our services. Whether it's accessing specific features, making transactions, or utilizing our tools, you'll find everything you need at your fingertips.
            </p>
          </div>
        </li>
        <li className="faq-item">
          <a
            href="#accordion-faq-five"
            className="faq-header collapsed"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="accordion-faq-five"
          >
            How can I update my account information?
          </a>
          <div
            id="accordion-faq-five"
            className="collapse"
            data-bs-parent="#wrapper-faq"
          >
            <p className="faq-body">
              Once your account is set up and you've familiarized yourself with the platform, you are ready to start using our services. Whether it's accessing specific features, making transactions, or utilizing our tools, you'll find everything you need at your fingertips.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section> */}
{/* /faq */}

{/* banner */}
{/* <section
  className="flat-section pt-0 flat-banner wow fadeInUpSmall"
  data-wow-delay=".2s"
  data-wow-duration="2000ms"
>
  <div className="container">
    <div className="wrap-banner bg-primary-new">
      <div className="box-left">
        <div className="box-title">
          <div className="text-subtitle text-primary">Become Partners</div>
          <h3 className="mt-4 fw-8">
            List your Properties on Homelengo, join Us Now!
          </h3>
        </div>
        <a
          href="contact.html"
          className="tf-btn btn-view primary size-1 hover-btn-view"
        >
          Become A Hosting{" "}
          <span className="icon icon-arrow-right2"></span>
        </a>
      </div>
      <div className="box-right">
        <img src="images/banner/banner.png" alt="image" />
      </div>
    </div>
  </div>
</section> */}
{/* end banner */}
 
 <Footer/>

        </div>
    </div>
    </>
  )
}

export default page