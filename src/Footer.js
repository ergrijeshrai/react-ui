import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Product</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Product 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Product 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Plans & Prices</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Frequently asked questions</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Company</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Job postings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">News and articles</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Contact & Support</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">+47 45 80 80 80</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Live chat</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Give feedback</a>
          </li>
        </ul>
      </div>
    </div>

    
    
    <div className="row text-center">
      <div className="col-md-12 text-center box">
        <span className="copyright quick-links">Copyright &copy; Website <script>document.write(new Date().getFullYear())</script>
        </span>
      </div>
   
      
    </div>
  </div>
</footer>
    </div>
  )
}
