import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className='links'>
                <div class="firstHeader">
                    
                    <div class="firstHeader-left">
                        <h1>PLANET C</h1>
                    </div>

                
                    <div class="firstHeader-right">
                        <Link classname='link' to='/'>
                            Home
                        </Link>
                        <Link classname='link' to='/subscribe'>
                            Subscribe
                        </Link>

                    </div>

                </div>
            </div>

        </nav>

     );
}
 
export default Navbar;