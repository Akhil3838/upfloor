'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { BlogDetailsApi } from '@/app/services/allApi';
import Head from 'next/head';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function blogDetails() {

      const { slug } = useParams(); // ✅ works in client components
       const [blog,setBlog]=useState()
       const[featured,setFeatured]=useState([])
       const blogDetails = async () => {
        try {
          const res = await BlogDetailsApi(slug)
          console.log(res);
          setBlog(res.data.data)
          setFeatured(res.data.featured_blogs)
        } catch (err) {
          console.error("Error fetching blogs:", err)
        }
       }

       useEffect(() => {
        blogDetails()
       }, [])
    console.log(featured);

 const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blog?.blog_title || "Check this out!")}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(blog?.blog_title + " " + currentUrl)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(blog?.blog_image)}&description=${encodeURIComponent(blog?.blog_title)}`
  };
    
  return (
    <>
      <Head>
        <title>{blog?.blog_title || "Blog Details"}</title>
        <meta property="og:title" content={blog?.blog_title} />
        <meta property="og:description" content={blog?.short_description} />
        <meta property="og:image" content={blog?.blog_image} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog?.blog_title} />
        <meta name="twitter:description" content={blog?.short_description} />
        <meta name="twitter:image" content={blog?.blog_image} />
      </Head>
    <div id='wrapper'>
        <div id='pagee' className='clearfix'>

            <Header/>
{/* Page Title */}
<section
  className="flat-title-page"
  style={{ backgroundImage: "url(images/banner/bannerlast.png)" }}
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
        <li className="text-white">/ Blog details</li>
      </ul>
      <h1 className="text-center text-white title">Blog details</h1>
    </div>
  </div>
</section>
{/* End Page Title */}
<section className='flat-section'>
    <div className="container">
        <div className="row">
            <div className='col-lg-8'>
                <div className='flat-blog-detail'>

                    <div className="mb-30 pb-30 line-b">
  <h3 className="title fw-8">
   {blog?.blog_title}
  </h3>
  <ul className="meta-blog">
    <li className="item">
      <svg
        className="icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9883 12.4831C11.5225 11.8664 10.9198 11.3662 10.2278 11.022C9.53575 10.6779 8.77324 10.4991 8.00033 10.4998C7.22743 10.4991 6.46492 10.6779 5.77288 11.022C5.08084 11.3662 4.47816 11.8664 4.01233 12.4831M11.9883 12.4831C12.8973 11.6746 13.5384 10.6088 13.8278 9.4272C14.1172 8.24555 14.0405 7.00386 13.608 5.86679C13.1754 4.72972 12.4075 3.75099 11.4059 3.0604C10.4044 2.36982 9.21656 2 8 2C6.78344 2 5.59562 2.36982 4.59407 3.0604C3.59252 3.75099 2.82455 4.72972 2.39202 5.86679C1.95949 7.00386 1.88284 8.24555 2.17221 9.4272C2.46159 10.6088 3.10333 11.6746 4.01233 12.4831M11.9883 12.4831C10.891 13.4619 9.47075 14.0019 8.00033 13.9998C6.52969 14.0021 5.10983 13.4621 4.01233 12.4831M10.0003 6.4998C10.0003 7.03024 9.78962 7.53894 9.41455 7.91402C9.03948 8.28909 8.53077 8.4998 8.00033 8.4998C7.4699 8.4998 6.96119 8.28909 6.58612 7.91402C6.21105 7.53894 6.00033 7.03024 6.00033 6.4998C6.00033 5.96937 6.21105 5.46066 6.58612 5.08559C6.96119 4.71052 7.4699 4.4998 8.00033 4.4998C8.53077 4.4998 9.03948 4.71052 9.41455 5.08559C9.78962 5.46066 10.0003 5.96937 10.0003 6.4998Z"
          stroke="#A3ABB0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-primary fw-6">{blog?.blog_author || "Admin"}</span>
    </li>
    <li className="item">
      <svg
        className="icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 8.5V8C1.5 7.60218 1.65804 7.22064 1.93934 6.93934C2.22064 6.65804 2.60218 6.5 3 6.5H13C13.3978 6.5 13.7794 6.65804 14.0607 6.93934C14.342 7.22064 14.5 7.60218 14.5 8V8.5M8.70667 4.20667L7.29333 2.79333C7.20048 2.70037 7.09022 2.62661 6.96886 2.57628C6.84749 2.52595 6.71739 2.50003 6.586 2.5H3C2.60218 2.5 2.22064 2.65804 1.93934 2.93934C1.65804 3.22064 1.5 3.60218 1.5 4V12C1.5 12.3978 1.65804 12.7794 1.93934 13.0607C2.22064 13.342 2.60218 13.5 3 13.5H13C13.3978 13.5 13.7794 13.342 14.0607 13.0607C14.342 12.7794 14.5 12.3978 14.5 12V6C14.5 5.60218 14.342 5.22064 14.0607 4.93934C13.7794 4.65804 13.3978 4.5 13 4.5H9.414C9.14887 4.49977 8.89402 4.39426 8.70667 4.20667Z"
          stroke="#A3ABB0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-primary fw-6">Furniture</span>
    </li>
    <li className="item">
      <svg
        className="icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.75 6.5C5.75 6.56631 5.72366 6.62989 5.67678 6.67678C5.62989 6.72366 5.5663 6.75 5.5 6.75C5.4337 6.75 5.37011 6.72366 5.32322 6.67678C5.27634 6.62989 5.25 6.56631 5.25 6.5C5.25 6.4337 5.27634 6.37011 5.32322 6.32322C5.37011 6.27634 5.4337 6.25 5.5 6.25C5.5663 6.25 5.62989 6.27634 5.67678 6.32322C5.72366 6.37011 5.75 6.4337 5.75 6.5ZM5.75 6.5H5.5M8.25 6.5C8.25 6.56631 8.22366 6.62989 8.17678 6.67678C8.12989 6.72366 8.0663 6.75 8 6.75C7.9337 6.75 7.87011 6.72366 7.82322 6.67678C7.77634 6.62989 7.75 6.56631 7.75 6.5C7.75 6.4337 7.77634 6.37011 7.82322 6.32322C7.87011 6.27634 7.9337 6.25 8 6.25C8.0663 6.25 8.12989 6.27634 8.17678 6.32322C8.22366 6.37011 8.25 6.4337 8.25 6.5ZM8.25 6.5H8M10.75 6.5C10.75 6.56631 10.7237 6.62989 10.6768 6.67678C10.6299 6.72366 10.5663 6.75 10.5 6.75C10.4337 6.75 10.3701 6.72366 10.3232 6.67678C10.2763 6.62989 10.25 6.56631 10.25 6.5C10.25 6.4337 10.2763 6.37011 10.3232 6.32322C10.3701 6.27634 10.4337 6.25 10.5 6.25C10.5663 6.25 10.6299 6.27634 10.6768 6.32322C10.7237 6.37011 10.75 6.4337 10.75 6.5ZM10.75 6.5H10.5M1.5 8.50667C1.5 9.57333 2.24867 10.5027 3.30467 10.658C4.02933 10.7647 4.76133 10.8467 5.5 10.904V14L8.28933 11.2113C8.42744 11.0738 8.61312 10.9945 8.808 10.99C10.1091 10.958 11.407 10.8471 12.6947 10.658C13.7513 10.5027 14.5 9.574 14.5 8.506V4.494C14.5 3.426 13.7513 2.49733 12.6953 2.342C11.1406 2.11381 9.57135 1.99951 8 2C6.40533 2 4.83733 2.11667 3.30467 2.342C2.24867 2.49733 1.5 3.42667 1.5 4.494V8.506V8.50667Z"
          stroke="#A3ABB0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-variant-1">0 comment</span>
    </li>
    <li className="item">
      <svg
        className="icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 2V3.5M11.5 2V3.5M2 12.5V5C2 4.60218 2.15804 4.22064 2.43934 3.93934C2.72064 3.65804 3.10218 3.5 3.5 3.5H12.5C12.8978 3.5 13.2794 3.65804 13.5607 3.93934C13.842 4.22064 14 4.60218 14 5V12.5M2 12.5C2 12.8978 2.15804 13.2794 2.43934 13.5607C2.72064 13.842 3.10218 14 3.5 14H12.5C12.8978 14 13.2794 13.842 13.5607 13.5607C13.842 13.2794 14 12.8978 14 12.5M2 12.5V7.5C2 7.10218 2.15804 6.72064 2.43934 6.43934C2.72064 6.15804 3.10218 6 3.5 6H12.5C12.8978 6 13.2794 6.15804 13.5607 6.43934C13.842 6.72064 14 7.10218 14 7.5V12.5"
          stroke="#A3ABB0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-variant-1">{blog?.blog_date}</span>
    </li>
  </ul>
</div>

<div className="pb-30 line-b">
  <p className="text-black-2 fw-6">
    {blog?.short_description}
  </p>
  <div className="my-30 round-30 o-hidden">
    <img
      className="lazyload w-100"
      data-src={blog?.blog_image}
      src={blog?.blog_image}
      alt="img-blog"
    />
  </div>
<div
  dangerouslySetInnerHTML={{ __html: blog?.blog_description }}
/></div>

<div className="mt-16 d-flex justify-content-between flex-wrap gap-16">
  <div className="d-flex flex-wrap align-items-center gap-12">
    <span className="text-black fw-6">Tag:</span>
    <ul className="d-flex flex-wrap gap-9">
      <li>
        <a href="#" className="blog-tag">Furniture</a>
      </li>
      <li>
        <a href="#" className="blog-tag">Interior</a>
      </li>
    </ul>
  </div>

<div className="d-flex flex-wrap align-items-center gap-16">
  <span className="font-rubik text-variant-1">Share this post:</span>
  <ul className="d-flex flex-wrap gap-12">
    <li>
      <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="box-icon line w-44 round">
        <i className="icon icon-fb"></i>
      </a>
    </li>
    <li>
      <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="box-icon line w-44 round">
        <i className="icon icon-x"></i>
      </a>
    </li>
    <li>
      <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="box-icon line w-44 round">
        <i className="icon icon-in"></i>
      </a>
    </li>
    <li>
      <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="box-icon line w-44 round">
        <i className="icon icon-instargram"></i>
      </a>
    </li>
  </ul>
</div>
</div>


{/* <div className="wrap-review">
  <div className="pb-12 line-b mb-0">
    <h5 className="text-black-2">Comment (4)</h5>
  </div>
  <ul className="box-review">
    {[
      {
        avatar: "images/avatar/avt-2.jpg",
        name: "Kathryn Murphy",
        text: "It's really easy to use and it is exactly what I am looking for. A lot of good looking templates & it's highly customizable. Live support is helpful, solved my issue in no time."
      },
      {
        avatar: "images/avatar/avt-3.jpg",
        name: "Brooklyn Simmons",
        text: "It's really easy to use and it is exactly what I am looking for. A lot of good looking templates & it's highly customizable. Live support is helpful, solved my issue in no time."
      },
      {
        avatar: "images/avatar/avt-4.jpg",
        name: "Robert Fox",
        text: "It's really easy to use and it is exactly what I am looking for. A lot of good looking templates & it's highly customizable. Live support is helpful, solved my issue in no time."
      }
    ].map((comment, i) => (
      <li className="list-review-item" key={i}>
        <div className="avatar avt-60">
          <img src={comment.avatar} alt="avatar" />
        </div>
        <div className="content">
          <div className="name">{comment.name}</div>
          <p>{comment.text}</p>
          <div className="action mt-12">
            <div className="d-flex align-items-center gap-6">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
              <span className="font-rubik">Useful</span>
            </div>
            <div className="d-flex align-items-center gap-6">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
              <span className="font-rubik">Not helpful</span>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div> */}


{/* <div className="wrap-form-comment">
  <h5 className="text-black-2">Leave A comment</h5>
  <p className="text-variant-1 mt-8">
    Your email address will not be published. Required fields are marked *
  </p>
  <div id="comments" className="comments">
    <div className="respond-comment">
      <form
        id="contactform"
        className="comment-form form-submit"
        method="post"
        action="./contact/contact-process.php"
        acceptCharset="utf-8"
        noValidate
      >
        <div className="form-wg group-ip">
          <fieldset>
            <label className="sub-ip">Name</label>
            <input
              type="text"
              className="form-control"
              name="text"
              placeholder="Your name"
              required
            />
          </fieldset>
          <fieldset>
            <label className="sub-ip">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Your email"
              required
            />
          </fieldset>
        </div>

        <fieldset className="form-wg">
          <label className="sub-ip">Review</label>
          <textarea
            id="comment-message"
            name="message"
            rows="4"
            placeholder="Write comment"
            aria-required="true"
          ></textarea>
        </fieldset>

        <button
          className="form-wg tf-btn primary w-100"
          name="submit"
          type="submit"
        >
          <span>Post Comment</span>
        </button>
      </form>
    </div>
  </div>
</div>
 */}





                </div>
            </div>
          <div className="col-lg-4">
  <aside className="sidebar-blog fixed-sidebar">
    {/* Search */}
    <div className="widget-search">
      <h5 className="text-black-2 text-capitalize">Search Blog</h5>
      <div className="search-box">
        <input className="search-field" type="text" placeholder="Search..." />
        <a href="#" className="icon icon-search"></a>
      </div>
    </div>

    {/* Categories */}
    {/* <div className="widget-box categories">
      <h5 className="text-black-2 text-capitalize">Categories</h5>
      <ul className="mt-20">
        <li>
          <a href="#" className="categories-item">
            <span>Market Updates</span>
            <span>(50)</span>
          </a>
        </li>
        <li>
          <a href="#" className="categories-item">
            <span>Buying Tips</span>
            <span>(34)</span>
          </a>
        </li>
        <li>
          <a href="#" className="categories-item current">
            <span>Interior Inspiration</span>
            <span>(69)</span>
          </a>
        </li>
        <li>
          <a href="#" className="categories-item">
            <span>Investment Insights</span>
            <span>(25)</span>
          </a>
        </li>
        <li>
          <a href="#" className="categories-item">
            <span>Home Construction</span>
            <span>(12)</span>
          </a>
        </li>
        <li>
          <a href="#" className="categories-item">
            <span>Legal Guidance</span>
            <span>(12)</span>
          </a>
        </li>
        <li>
          <a href="#" className="categories-item">
            <span>Community Spotlight</span>
            <span>(69)</span>
          </a>
        </li>
      </ul>
    </div> */}

    {/* Featured listings */}
    <div className="widget-box recent">
      <h5 className="text-black-2 text-capitalize">Featured listings</h5>
      <ul>
<ul>
  {featured && featured.length > 0 ? (
    featured.map((post) => (
      <li key={post.id}>
        <a href={`/blog/${post.id}`} className="recent-post-item not-overlay hover-img">
          <div className="img-style">
            <img src={post.blog_image} alt={post.blog_title} />
          </div>
          <div className="content">
            <div className="title">{post.blog_title}</div>
            <div className="subtitle">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 2.5V4M11.5 2.5V4M2 13V5.5C2 5.10218 2.15804 4.72064 2.43934 4.43934C2.72064 4.15804 3.10218 4 3.5 4H12.5C12.8978 4 13.2794 4.15804 13.5607 4.43934C13.842 4.72064 14 5.10218 14 5.5V13M2 13C2 13.3978 2.15804 13.7794 2.43934 14.0607C2.72064 14.342 3.10218 14.5 3.5 14.5H12.5C12.8978 14.5 13.2794 14.342 13.5607 14.0607C13.842 13.7794 14 13.3978 14 13M2 13V8C2 7.60218 2.15804 7.22064 2.43934 6.93934C2.72064 6.65804 3.10218 6.5 3.5 6.5H12.5C12.8978 6.5 13.2794 6.65804 13.5607 6.93934C13.842 7.22064 14 7.60218 14 8V13"
                  stroke="#7C818B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>
                {new Date(post.blog_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </a>
      </li>
    ))
  ) : (
    <p>No recent posts available.</p>
  )}
</ul>
      </ul>
    </div>

    {/* Newsletter */}
    <div className="widget-box newsletter">
      <h5 className="text-black-2 text-capitalize">Join our newsletter</h5>
      <p className="caption-2 text-variant-1 mt-20">
        Signup to be the first to hear about exclusive deals, special offers and upcoming collections
      </p>
      <div className="search-box mt-20">
        <input className="search-field" type="text" placeholder="Enter your email" />
        <a href="#" className="icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.00035 7.99998L2.17969 2.08398C6.53489 3.35043 10.6419 5.35118 14.3237 7.99998C10.6422 10.6492 6.53541 12.6504 2.18035 13.9173L4.00035 7.99998ZM4.00035 7.99998H9.00035"
              stroke="#1563DF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>

    {/* Popular Tag */}
    <div className="widget-box tag">
      <h5 className="text-black-2 text-capitalize">Popular Tag</h5>
      <ul className="mt-20">
        <li><a href="#" className="tag-item">Property</a></li>
        <li><a href="#" className="tag-item">Office</a></li>
        <li><a href="#" className="tag-item">Finance</a></li>
        <li><a href="#" className="tag-item">Legal</a></li>
        <li><a href="#" className="tag-item">Market</a></li>
        <li><a href="#" className="tag-item">Invest</a></li>
        <li><a href="#" className="tag-item">Renovate</a></li>
      </ul>
    </div>
  </aside>
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

export default blogDetails