'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GotoTop from '../components/GotoTop'
import Bloglist from '../components/blog/Bloglist'    
import { AllBlogsApi } from '../services/allApi'

function page() {

  const [blogs, setBlogs] = useState([])

  const bloglist = async () => {
    try {
      const res = await AllBlogsApi()
      console.log(res);
      
      // console.log(res.data.data.blogs)
      setBlogs(res.data.data.blogs)
    } catch (err) {
      console.error("Error fetching blogs:", err)
    }
  }

  useEffect(() => {
    bloglist()
  }, [])
  return (
    <>
    <div id='wrapper'>
        <div id='pagee' className='clearfix'>
            <Header/>
          
            {/* Page Title */}
<section
  className="flat-title-page"
  style={{ backgroundImage: "url(images/page-title/page-title-1.jpg)" }}
>
  <div className="container">
    <div className="breadcrumb-content">
      <ul className="breadcrumb">
        <li>
          <a href="index.html" className="text-white">
            Home
          </a>
        </li>
        <li className="text-white">/ Pages</li>
        <li className="text-white">/ Latest News</li>
      </ul>
      <h1 className="text-center text-white title">Latest News</h1>
    </div>
  </div>
</section>
{/* End Page Title */}

{/* Section Blog Grid */}
<section className="flat-section">
  <div className="container">
    <Bloglist blogs={blogs}/>
  </div>
</section>
{/* End Section Blog Grid */}

<Footer/>
<GotoTop/>

        </div>

    </div>

    </>
  )
}

export default page