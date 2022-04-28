import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="././images/Banner_1.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="././images/Banner_2.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="././images/Banner_3.webp" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="container">
  <div className="row align-items-start">
    <div className="col">
    <div className="card justify-content-end" style={{width: '18rem'}}>
  <div className="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg>
    <h5 className="card-title">Laptop</h5>
    <h6 className="card-subtitle mb-2 text-muted">Up to 20% off</h6>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card justify-content-end" style={{width: '18rem'}}>
  <div className="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
    <h5 className="card-title">Mobile</h5>
    <h6 className="card-subtitle mb-2 text-muted">Up to 30% off</h6>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card justify-content-end" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Sign in for your best experience</h5>
    <Link to = '/login' style={{ textDecoration: 'none' }}>
    <button type="button" className="btn btn-primary">Sign in securely</button>
    </Link>
  </div>
</div>
    </div>
    
  </div>
  </div>
    </>
  )
}

export default Home