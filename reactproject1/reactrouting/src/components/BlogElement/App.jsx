import './index.css'
const BlogElement = props => {
	const {blogInfo} = props
	const {title, imageUrl, avatarUrl, author, topic} = blogInfo
	return (
		<li className="blog-element-container">
			<img src={imageUrl} alt={title} className="blog-image" />
			<div className="blog-info">
				<p className="topic">{topic}</p>
				<h1 className="blog-title">{title}</h1>
				<div className="author-info">
					<img src={avatarUrl} alt={author} className="author-image" />
					<p className="author-name">{author}</p>
				</div>
				
			</div>
		</li>
	)
}
export default BlogElement	