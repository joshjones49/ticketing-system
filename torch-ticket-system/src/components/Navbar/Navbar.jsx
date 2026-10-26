import './Navbar.css'

import { ImSearch } from "react-icons/im";

import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      

      <div className='nav-divs'>
        <Link className='repair-link' to='/repairs'>
          <h1>Need Repairs?</h1>
        </Link>
      </div>

        <div className='nav-divs'>
          <div className='search'>
            <input type='search' placeholder='Search Products' />
          <button><ImSearch className='search-glass' /></button>
          </div>
        </div>
        
        <div className='nav-divs'>RIGHT DIV</div>
    </div>
  )
}

export default Navbar
