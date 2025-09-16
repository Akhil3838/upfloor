import React from 'react'
import BlogCard from '../blog/BlogCard'

function bloglist({blogs}) {
  return (
    <>
        <div className="row">
    { blogs?.map((b, index) => (<div key={b.id} className="col-lg-4 col-md-6">
        <BlogCard  blog={b}/>
      </div>)) }

      {/* Repeat same structure for all other posts... */}

      {/* <div className="col-12 text-center pt-26 line-t">
        <ul className="justify-content-center wd-navigation">
          <li>
            <a href="#" className="nav-item">
              <i className="icon icon-arr-l"></i>
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              1
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              2
            </a>
          </li>
          <li>
            <a href="#" className="nav-item active">
              3
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              4
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              ...
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <i className="icon icon-arr-r"></i>
            </a>
          </li>
        </ul>
      </div> */}
      
    </div>

    </>
  )
}

export default bloglist