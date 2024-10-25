import React from 'react'
import NavigationBar from '../components/Navbar'
import News from '../components/News'
import BlogNews from '../components/Blog'
import Contact from '../components/Contact'

const Blog = () => {
  return (
    <div>
        <NavigationBar />

        <div className="py-5 hero-header">
          <h1 className="text-center text-white fw-semibold display-4">BLOG</h1>
        </div>

        <BlogNews />
        <Contact />
      
    </div>
  )
}

export default Blog
