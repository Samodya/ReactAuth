import { Outlet, Link } from 'react-router-dom';
import Signin from './signin';

const Navbar = () => {
    return ( 
        <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-light" aria-current="page" to="/signin">signin</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        </div>
     );
}
 
export default Navbar;