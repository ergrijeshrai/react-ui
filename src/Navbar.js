import React from 'react'

export const Navbar = () => {
  return (
    <div>
<div className="container-fluid bg-success text-white">
    <div className="row">
      <div className="col-10 mx-auto">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="javascript:void(0)">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="javascript:void(0)">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="javascript:void(0)">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="javascript:void(0)">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="javascript:void(0)">Conatct</a>
        </li>
       </ul>
         </div>
          </div>
            </nav>
               </div>
                </div>
            </div>
        </div>
    )
}


