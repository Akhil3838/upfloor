import React from 'react';

function BlogCard({ blog }) {
  return (
    <a href={`/blog/${blog.id}`} className="flat-blog-item hover-img">
      <div className="img-style">
        <img
          className="lazyload"
          src={blog.blog_image}
          alt={blog.blog_title}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <span className="date-post">{blog.blog_date}</span>
      </div>
      <div className="content-box">
        <div className="post-author">
          <span className="fw-6">{blog.author || "Admin"}</span>
          <span>{blog.category || "General"}</span>
        </div>
        <h5 className="title link">{blog.blog_title}</h5>
        <p className="description">
          {blog.description || "Click to read more..."}
        </p>
      </div>
    </a>
  );
}

export default BlogCard;
