import React from 'react'
import logo from '../../images/icons/logo.png';
import search from '../../images/icons/search-icon.png';
import cart from '../../images/icons/cart.png';
 function header() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light fixed-top header-wrapper">
      <div className="container">
        <a className="logo-link navbar-brand js-scroll-trigger" href="/"
          ><img src={logo} alt="logo Icon"
        /></a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav nav-fill w-100">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/mac/">Mac</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/">iphone</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="//">ipad</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="//">watch</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/">tv</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="www.google.com">Music</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="www.apple.com">Support</a>
            </li>
            <li>
              <a className="search-link nav-link js-scroll-trigger" href="www.youtube.com"
                ><img src={search} alt="search Icon" /></a>
            </li>
            <li>
              <a className="cart-link nav-link js-scroll-trigger" href="/cart/"
                ><img src={cart} alt="cart Icon"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  )
}
export default header