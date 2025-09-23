import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function page() {
  return (
    <>
    <div id="wrapper">
        <div id="pagee" class="clearfix">

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
          <a href="/" className="text-white">
            Home
          </a>
        </li>
        <li className="text-white">/ Pages</li>
        <li className="text-white">/ Service Policy</li>
      </ul>
      <h1 className="text-center text-white title">Service Policy</h1>
    </div>
  </div>
</section>
{/* End Page Title */}

            <section className="flat-section flat-wrapper-privacy">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 wrapper-privacy">
  <div className="box-item mb-30">
    <h4 className="mb-30">Service Policies</h4>
    <h6 className="mb-20">Last update: Jan 21, 2024</h6>
    <p className="mb-20">
      These service policies ("Agreement") govern the services provided by Akatsa LLP ("Company") through its real estate mobile platform "UpFloor". By engaging the Company's services, property buyers, sellers, rental owners, and tenants ("Client") agree to the terms outlined in this Agreement.
    </p>
    <p className="mb-20">
      At Akatsa LLP, we prioritize fostering a respectful, inclusive, and secure environment for all users. By engaging with our services, you contribute to maintaining a fair and trustworthy marketplace.
    </p>
    <p className="mb-20">
      By purchasing any plan or service, you agree to these terms and conditions, including the collection and use of your data per our Privacy Policy.
    </p>
    <br />

    <ol className="text-size-18p list-default">
      <li>
        <b>Property Eligibility</b>
        <ul className="text-size-18p list-default">
          <li>Properties listed must comply with our terms and conditions for accuracy and authenticity.</li>
          <li>Ineligible or falsely represented properties may be removed without a refund.</li>
        </ul>
      </li>
      <br />

      <li>
        <b>Commission Policy</b>
        <ol>
          <li>
            <b>For Sellers Free Plan:</b>
            <ul className="text-size-18p list-default">
              <li>Commission Rate: 2.5% of the Selling Price.</li>
              <li>Condition: Applicable if the property is sold within the free plan timeline.</li>
              <li>
                Example:
                <ul>
                  <li>Selling Price: ₹50,00,000</li>
                  <li>Commission: ₹1,25,000 (calculated as ₹50,00,000 × 2.5%).</li>
                </ul>
              </li>
            </ul>
            <p>
              <b>Paid Plan:</b>
            </p>
            <ul className="text-size-18p list-default">
              <li>
                <b>Commission Rate:</b> 1.5% of the Selling Price.
              </li>
              <li>
                <b>Additional Note:</b> The paid plan fee is deducted from the commission amount at the time of deal closure.
              </li>
              <li>
                <b>Example:</b>
                <ul>
                  <li>Selling Price: ₹50,00,000</li>
                  <li>Commission: ₹75,000 (calculated as ₹50,00,000 × 1.5%).</li>
                  <li>
                    <b>Paid Plan Fee Deduction:</b>
                    <ul>
                      <li>Paid Plan Fee: ₹2,000</li>
                      <li>Final Commission: ₹73,000 (₹75,000 - ₹2,000).</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
      </li>
      <br />

      <li>
        <b>For Buyers</b>
        <ul className="text-size-18p list-default">
          <b>Free Plans:</b>
          <ul>
            <li>If the property which is listed in UpFloor is bought.</li>
            <li>
              Commission: <b>(Final Selling Price / 200)</b>
            </li>
            <li>
              Example: For a final selling price of ₹35,00,000, the commission is ₹17,500 (₹35,00,000 / 200).
            </li>
          </ul>
          <b>Paid Plans:</b>
          <ul>
            <li>We don't charge any property commission from buyers if they avail any of our paid package services.</li>
          </ul>
        </ul>
      </li>
      <br />

      <li>
        <b>For Rental owners</b>
        <ul className="text-size-18p list-default">
          <li>
            <b>Free Plans:</b>
            <ul>
              <li>
                Commission:<b> 20 % of the property security deposit</b>
              </li>
              <li>Example: For a rental property with a security deposit of ₹30,000, the commission is ₹6,000.</li>
            </ul>
          </li>
          <li>
            <b>Paid Plans:</b>
            <ul>
              <li>
                Commission: <b>20 % of the property security deposit</b>
              </li>
              <li>Additional Note: The paid plan fee will be deducted from the commission amount at the time of deal closure.</li>
              <li>
                <b>Example:</b>
                <br />
                i. Security deposit: ₹50,000 <br />
                ii. Commission: ₹10,000 (calculated as ₹50,000 × 20%). <br />
                iii. <b>Paid Plan Fee Deduction:</b>
                <br />
                <ol>
                  <li>Paid Plan Fee: ₹2,000</li>
                  <li>Final Commission: ₹8,000 (₹10,000 - ₹2,000).</li>
                </ol>
              </li>
            </ul>
          </li>
        </ul>
        <br />

        <li>
          <b>For Rental property seekers</b>
          <ul className="text-size-18p list-default">
            <b>Security Deposit:</b>
            <li>A refundable security deposit of ₹2,000 is required before visiting the property, either virtually or physically.</li>
            <li>
              If you decide not to proceed with the property, 60% of the security deposit will be refunded. The remaining 40% will be retained as a service charge.
            </li>
          </ul>
          <ul>
            <b>Commission Fee:</b>
            <li>
              If the property is booked, we charge <b>50% of the first month's rent</b> as our commission fee.
            </li>
            <li>The security deposit of ₹2,000 will be <b>deducted from the commission.</b></li>
            <li>
              <b>Example:</b>
              <ul>
                <li>Rent : ₹10,000</li>
                <li>Commission: ₹5,000 (calculated as ₹10,000 × 50%).</li>
                <li>
                  <b>Paid Plan Fee Deduction:</b>
                  <ul>
                    <li>Paid Plan Fee: ₹2,000</li>
                    <li>Final Commission: ₹3,000 (₹5,000 - ₹2,000).</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </li>
      <br />

      <li>
        <b>Payment Terms</b>
        <ul className="text-size-18p list-default">
          <li>The commission is due at the time of the property token amount transaction or property registration, whichever occurs earlier.</li>
          <li>Payments must be sent to the details provided by the Company at the time of the transaction.</li>
        </ul>
      </li>
      <br />

      <li>
        <b>Plan Validity and Services</b>
        <br />
        <b>Free Plans for seller and rental owners </b>
        <ul className="text-size-18p list-default">
          <b>Listing Duration:</b>
          <li>
            Properties listed under the Free Plan are valid for a <b>4-month period.</b>
          </li>
          <li>After this period, the property cannot be re-listed for free.</li>
        </ul>
        <br />

        <ul>
          <b>Renewal Options:</b>
          <li>Users must either <b>upgrade to a paid plan</b> or allow the listing to expire.</li>
          <li>If no action is taken, the listing will be removed completely after 30 days of non-renewal.</li>
        </ul>
        <br />
        <ul>
          <b>Property Limit:</b>
          <li>
            Only <b>one property</b> can be listed for free per user.
          </li>
          <li>
            Additional properties from the same user are <b>not eligible</b> for the Free Plan.
          </li>
        </ul>
        <br />
        <b>Paid Plans for all services</b>
        <ul className="text-size-18p list-default">
          <li>Listing durations vary by plan, with renewals available for a fee.</li>
          <li>Paid plans allow sellers and buyers to upgrade anytime by paying the difference in price.</li>
        </ul>
      </li>
      <br />

      <li>
        <b>Refund Policy</b>
        <ol>
          <li>
            <b>Sellers</b>
            <br />
            <b>Listing Plans:</b>
            <ul className="text-size-18p list-default">
              <li>60% refund is guaranteed if no genuine leads are generated within the result timeline.</li>
              <li>The basic plan can be canceled within 24 hours for a full refund. After 24 hours, only 60% of the total amount paid is refundable.</li>
            </ul>
            <b>Dissatisfaction Claims:</b> Must be raised within 7 days of service completion for resolution or partial refunds.
          </li>
          <li>
            <b>Buyers</b>
            <ul className="text-size-18p list-default">
              <b>Packages</b>
              <li>Buyers can cancel a package within 24 hours of purchase.</li>
              <li>No refunds will be provided after the 24-hour cancellation window has passed.</li>
            </ul>
            <br />
            <ul className="text-size-18p list-default">
              <b>Package Criteria</b>
              <li>The service is available only after the buyer provides the property details for inspection.</li>
              <li>
                A <b>No Objection Certificate (NOC)</b> from the seller is mandatory for the quality inspection of the property.
              </li>
              <ul>
                <li>The NOC will be provided by the company.</li>
                <li>Buyers must get the NOC signed by the seller and upload the signed document to our company.</li>
              </ul>
              <li>Buyers must ensure all parties are in full agreement with the inspection process.</li>
              <li>
                We recommend availing of this service only if you are <b>genuinely interested in purchasing the property</b>. Use this service as a <b>final quality check</b> to confirm the property’s worthiness before buying.
              </li>
            </ul>
            <br />
            <ul className="text-size-18p list-default">
              <b>Dissatisfaction Claims</b>
              <li>Any dissatisfaction with the service must be reported within <b>7 days</b> of the service's completion.</li>
              <li>Claims raised after this period will not be entertained.</li>
            </ul>
          </li>
          <br />
          <li>
            <b>Rental Owners</b>
            <ul className="text-size-18p list-default">
              <b>Listing Plans:</b>
              <li>60% refund is guaranteed if no genuine leads are generated within the result timeline.</li>
              <li>The Booster plan can be canceled within 24 hours for a full refund. After 24 hours, only 60% of the total amount paid is refundable.</li>
            </ul>
            <ul>
              <b>Dissatisfaction Claims: </b>Must be raised within 7 days of service completion for resolution or partial refunds.
            </ul>
          </li>
        </ol>
      </li>

      <li>
        <b>Lead Guarantees and Professional Inspections</b>
        <ul className="text-size-18p list-default">
          <li>Leads provided under Paid Plans for sellers are genuine but do not guarantee deal closure.</li>
          <li>Reports and evaluations for property buyers are prepared by certified professionals with expertise in construction and real estate.</li>
        </ul>
      </li>

      <li>
        <b>Discounts and Offers</b>
        <ul className="text-size-18p list-default">
          <li>Discounts apply only to payments made within the offer deadline.</li>
          <li>Offers cannot be combined unless explicitly stated.</li>
        </ul>
      </li>

      <li>
        <b>Privacy and Data Usage</b>
        <ul className="text-size-18p list-default">
          <li>Data shared by users will be handled in accordance with our Privacy Policy.</li>
          <li>Personal and property information will only be used for service delivery and not shared without consent.</li>
        </ul>
      </li>

      <li>
        <b>Termination and Disputes</b>
        <ul className="text-size-18p list-default">
          <li>UpFloor reserves the right to terminate listings for non-compliance or suspected fraudulent activities.</li>
        </ul>
      </li>

      <li>
        <b>Contact informational</b>
        <br />
        <ul className="text-size-18p list-default">
          For any queries or concerns regarding this Agreement:
          <li>Phone: 7736572630, 7736277630</li>
          <li>Email: admin@akatsa.in</li>
        </ul>
      </li>
    </ol>

    <p>
      By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
    </p>
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