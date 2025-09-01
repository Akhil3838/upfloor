'use client'
import React, { useEffect, useState } from 'react'
import { blogApi } from '../services/allApi'
import { imageUrl } from '../services/serverUrl'

function BlogItem() {
  const [blogs, setBlogs] = useState([])

  const bloglist = async () => {
    try {
      const res = await blogApi()
      console.log(res.data.data.blogs)
      setBlogs(res.data.data.blogs)
    } catch (err) {
      console.error("Error fetching blogs:", err)
    }
  }

  useEffect(() => {
    bloglist()
  }, []) // ✅ add [] dependency so it doesn't loop infinitely

  return (
    <>
      {blogs?.map((blog) => (
        <div className="swiper-slide" key={blog.id}>
          <a href={`/#`} className="flat-blog-item hover-img">
            <div className="img-style">
<img
  className="lazyload"
  src={`https://upfloor.xyz/public/blog/image/${blog.blog_image}`}
  alt={blog.blog_title}
  style={{
    width: "615px",
    height: "405px",
    objectFit: "cover",   // ensures image fills nicely without distortion
    borderRadius: "8px"   // optional, gives smooth rounded corners
  }}
/>
              <span className="date-post">
                {new Date(blog.blog_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </span>
            </div>
            <div className="content-box">
              <div className="post-author">
                <span className="fw-6">Admin</span>
                <span>Blog</span>
              </div>
              <h5 className="title link">{blog.blog_title}</h5>
              <p className="description">
                {/* You can add excerpt from API if available, else keep blank */}
              </p>
            </div>
          </a>
        </div>
      ))}
    </>
  )
}

export default BlogItem
