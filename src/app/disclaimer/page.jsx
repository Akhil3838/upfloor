import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function page() {
  return (
    <>
    <div id="wrapper">
        <div id="pagee" className="clearfix">
            <Header/>

            {/* Page Title */}
<section
  className="flat-title-page"
  style={{ backgroundImage: "url(images/page-title/page-title-7.jpg)" }}
>
  <div className="container">
    <div className="breadcrumb-content">
      <ul className="breadcrumb">
        <li>
          <a href="/" className="text-white">Home</a>
        </li>
        <li className="text-white">/ Pages</li>
        <li className="text-white">/ Disclaimer</li>
      </ul>
      <h1 className="text-center text-white title">Disclaimer</h1>
    </div>
  </div>
</section>
{/* End Page Title */}

            <section className="flat-section flat-wrapper-privacy">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 wrapper-privacy">
  <div className="box-item mb-30">
    <h4 className="mb-30">Privacy Policy</h4>
    <h6 className="mb-20">Last update: Jan 16, 2024</h6>
    <p className="mb-20">
      The information provided on the UpFloor mobile platform and through its
      services is for general informational purposes only. Akatsa LLP
      ("Company") makes no representations or warranties of any kind, express
      or implied, about the completeness, accuracy, reliability, suitability, or
      availability of any property listings, services, or related graphics on
      the platform for any purpose. Any reliance you place on such information
      is strictly at your own risk. While we strive to ensure the quality and
      authenticity of all listings and leads, UpFloor does not guarantee deal
      closures, property valuations, or user conduct. Users are advised to
      independently verify all details provided to you, including property
      conditions, pricing, and legal compliance, before making any decisions or
      commitments. The Company is not liable for any losses or damages,
      including without limitation, indirect or consequential losses, arising
      from the use of the platform, its services, or reliance on the information
      provided. This includes, but is not limited to, losses arising from market
      conditions, third-party actions, or user errors. By using UpFloor, you
      agree to comply with all applicable laws and regulations and to use the
      platform responsibly. Akatsa LLP reserves the right to amend or terminate
      services, policies, or listings at its sole discretion, with prior notice
      provided via the contact information associated with your account.
    </p>
    <p>
      For further information, please refer to our{" "}
      <a href="">Service Policies</a> and{" "}
      <a href="">Privacy Policies</a>.
    </p>
    <br />
  </div>
</div>

<div className="col-lg-4">
  <div className="sidebar-privacy">
    <div className="cate-privacy-box">
      <h5 className="mb-20">Categories</h5>
      <ul className="list-cate-privacy">
        <li>
          <a href="#">
            <span>Disclaimer</span>
            <svg
              className="icon"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9375 6.1875L16.75 9M16.75 9L13.9375 11.8125M16.75 9H3.25"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Service Policies</span>
            <svg
              className="icon"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9375 6.1875L16.75 9M16.75 9L13.9375 11.8125M16.75 9H3.25"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>

    <div className="contact-box">
      <h5 className="mb-20">Contact us</h5>
      <p className="desc">
        We're here to support you! Check out our help centre for further
        assistance.
      </p>
      <a href="/contact" className="tf-btn primary">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.6875 8.125C7.6875 8.20788 7.65458 8.28737 7.59597 8.34597C7.53737 8.40458 7.45788 8.4375 7.375 8.4375C7.29212 8.4375 7.21263 8.40458 7.15403 8.34597C7.09542 8.28737 7.0625 8.20788 7.0625 8.125C7.0625 8.04212 7.09542 7.96264 7.15403 7.90403C7.21263 7.84543 7.29212 7.8125 7.375 7.8125C7.45788 7.8125 7.53737 7.84543 7.59597 7.90403C7.65458 7.96264 7.6875 8.04212 7.6875 8.125ZM7.6875 8.125H7.375M10.8125 8.125C10.8125 8.20788 10.7796 8.28737 10.721 8.34597C10.6624 8.40458 10.5829 8.4375 10.5 8.4375C10.4171 8.4375 10.3376 8.40458 10.279 8.34597C10.2204 8.28737 10.1875 8.20788 10.1875 8.125C10.1875 8.04212 10.2204 7.96264 10.279 7.90403C10.3376 7.84543 10.4171 7.8125 10.5 7.8125C10.5829 7.8125 10.6624 7.84543 10.721 7.90403C10.7796 7.96264 10.8125 8.04212 10.8125 8.125ZM10.8125 8.125H10.5M13.9375 8.125C13.9375 8.20788 13.9046 8.28737 13.846 8.34597C13.7874 8.40458 13.7079 8.4375 13.625 8.4375C13.5421 8.4375 13.4626 8.40458 13.404 8.34597C13.3454 8.28737 13.3125 8.20788 13.3125 8.125C13.3125 8.04212 13.3454 7.96264 13.404 7.90403C13.4626 7.84543 13.5421 7.8125 13.625 7.8125C13.7079 7.8125 13.7874 7.84543 13.846 7.90403C13.9046 7.96264 13.9375 8.04212 13.9375 8.125ZM13.9375 8.125H13.625M2.375 10.6333C2.375 11.9667 3.31083 13.1283 4.63083 13.3225C5.53667 13.4558 6.45167 13.5583 7.375 13.63V17.5L10.8617 14.0142C11.0343 13.8422 11.2664 13.7432 11.51 13.7375C13.1363 13.6975 14.7588 13.5589 16.3683 13.3225C17.6892 13.1283 18.625 11.9675 18.625 10.6325V5.6175C18.625 4.2825 17.6892 3.12167 16.3692 2.9275C14.4258 2.64226 12.4642 2.49938 10.5 2.5C8.50667 2.5 6.54667 2.64584 4.63083 2.9275C3.31083 3.12167 2.375 4.28334 2.375 5.6175V10.6325V10.6333Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Visit Help Centre
      </a>
      <h6 className="mb-20">You can also email</h6>
      <a href="mailto:helpdesk@upfloor.in" className="text-mail">
        helpdesk@upfloor.in
      </a>
    </div>
  </div>
</div>

            
        </div>
    </div>
</section>

<Footer/>
        </div>
    </div>
    </>
  )
}

export default page