import{Link} from 'react-router-dom'

import './index.css'

const Header = () => (
	<nav className='nav-container'>
		<Link to='/' className='nav-item'>
		<div className='nav-logo-container'>
			<img src='https://assets.ccbp.in/frontend/react-js/wave-logo-img.png' alt='logo' className='nav-logo'/>
			<h1 className='nav-heading'>Wave</h1> 				
		</div>
		</Link> 
		<ul className='	nav-menu'>

			<li>
				<Link to='/' className='nav-item'>Home</Link></li>
			<li>
				<Link to='/about' className='nav-item'>About</Link></li>
			<li>
				<Link to='/contact'className='nav-item' >Contact</Link></li>
		</ul>
	</nav>
)

export default Header