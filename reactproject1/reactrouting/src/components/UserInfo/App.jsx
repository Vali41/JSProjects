import './index.css'

const UserInfo=()=>{
	return(
		<div className='user-info'>
			<img src='https://assets.ccbp.in/frontend/react-js/profile-img.png' alt='profile-image' className='user-info-avatar'/>
			<h1 className='user-info-name'>Shaik shavali</h1>
			<p className='user-info-designation'>Full Stack Developer</p>
			<p className='user-info-description'>I love to code and learn new things</p>
		</div>
	)
}
export default UserInfo