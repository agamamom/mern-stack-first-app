import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faHeart, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.css'


const Navbar = () => {


    return (
        <div className='n-container'>
            <div className="n-row">
                <div className="n-col">
                    <span className='n-email'>ricpewebcode@gmail.com</span>
                </div>
                <div className="n-col">
                    <div className="socials">
                        <a href="/"><img src="/images/socials/facebook.png" alt="" /></a>
                        <a href="/"><img src="/images/socials/instagram.png" alt="" /></a>
                        <a href="/"><img src="/images/socials/twitter.png" alt="" /></a>
                        <a href="/"><img src="/images/socials/youtube.png" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="n-row">
                <div className="n-col">
                    <img src="/images/logo/logo.png" className='logo' alt="" />
                </div>
                <div className="n-col">
                    <div className="icons">
                        <span> <FontAwesomeIcon icon={faArrowRightToBracket} /> Login</span>
                        <span><FontAwesomeIcon icon={faHeart} />Wish</span>
                        <span><FontAwesomeIcon icon={faShoppingBag} />Cart</span>
                    </div>
                </div>
            </div>
            <div className="n-row">
                <nav className="nav">
                    <ul className="items">
                        <li className="list"><a href="/" activeClassName="active">Home</a></li>
                        <li className="list"><a href="/shop" activeClassName="active">Shop</a></li>
                        <li className="list"><a href="/about" activeClassName="active">About</a></li>
                        <li className="list"><a href="/contact" activeClassName="active">Contact</a></li>
                    </ul>
                    <button className='btn'>BTN</button>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
