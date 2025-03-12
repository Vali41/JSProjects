import { useState ,useEffect} from 'react'

import BlogElement from '../BlogElement/App.jsx'

import './index.css'

const BlogInfo=()=>{
  const [blogInfo, setBlogInfo] = useState([])
    
  useEffect(() => {	
	const fetchBlogInfo = async () => {
		const response = await fetch('https://apis.ccbp.in/blogs')
		const data = await response.json()
		const updatedData = data.map(eachItem => ({
			id: eachItem.id,
			title: eachItem.title,
			imageUrl: eachItem.image_url,
			avatarUrl: eachItem.avatar_url,
			author: eachItem.author,
			topic: eachItem.topic,
		}))
		setBlogInfo(updatedData)
	}
	fetchBlogInfo()
  },[])	
console.log(blogInfo)
  return (
	<div className="blog-info-container">
	  <ul className="blog-info-list">
		{blogInfo.map(eachItem => (
			<BlogElement blogInfo={eachItem} key={eachItem.id} />
		))}
	  </ul>
	</div>
  )

}
export default BlogInfo