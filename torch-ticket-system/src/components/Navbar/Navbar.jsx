import './Navbar.css'

import { ImSearch } from "react-icons/im";

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className='nav-divs'>
          <div className='search'>
            <input type='search' placeholder='Search' />
          <button><ImSearch className='search-glass' /></button>
          </div>
          
        </div>
        <div className='nav-divs'>MID DIV</div>
        <div className='nav-divs'>RIGHT DIV</div>
    </div>
  )
}

export default Navbar
