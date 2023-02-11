import { List, X } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom"
import { Button } from "./Button";
import './Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handelClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    return (<>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    SMS SAREE   <i className="fab fa-typo3" />
                </Link>
                <div className="menu-icon" onClick={handelClick}>

                    {click ? <X size={32} /> : <List size={32} />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu} >
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products

                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
                            SignUp
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>)
}

export default Navbar;