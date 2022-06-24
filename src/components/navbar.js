import React from 'react'

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="#" className="navbar-brand"><b>MySports</b></a>  		
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
            <div className="navbar-nav">
              <a href="#" className="nav-item nav-link">Home</a>
              <a href="#" className="nav-item nav-link">About</a>			
              <div className="nav-item dropdown">
                <a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle">Sports</a>
                <div className="dropdown-menu">					
                  <a href="#" className="dropdown-item">Cricket</a>
                  <a href="#" className="dropdown-item">Football</a>
                  <a href="#" className="dropdown-item">Tennis</a>
                  <a href="#" className="dropdown-item">Field Hockey</a>
                  <a href="#" className="dropdown-item">Volleyball</a>
                  <a href="#" className="dropdown-item">Baseball</a>
                </div>
              </div>
              <a href="#" className="nav-item nav-link active">Video</a>
              <a href="#" className="nav-item nav-link">Live TV</a>
              <a href="#" className="nav-item nav-link">Contact</a>
            </div>
            <form className="navbar-form form-inline">
              <div className="input-group search-box">								
                <input type="text" id="search" className="form-control" placeholder="Search here..." />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="material-icons"></i>
                  </span>
                </div>
              </div>
            </form>
            <div className="navbar-nav ml-auto action-buttons">
              <div className="nav-item dropdown">
                <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle mr-4">Login</a>
                <div className="dropdown-menu action-form">
                  <form action="/examples/actions/confirmation.php" method="post">
                    <p className="hint-text">Sign in with your social media account</p>
                    <div className="form-group social-btn clearfix">
                      <a href="#" className="btn btn-secondary facebook-btn float-left"><i className="fa fa-facebook" /> Facebook</a>
                      <a href="#" className="btn btn-secondary twitter-btn float-right"><i className="fa fa-twitter" /> Twitter</a>
                    </div>
                    <div className="or-seperator"><b>or</b></div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Username" required="required" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password" required="required" />
                    </div>
                    <input type="submit" onclick="validation()" className="btn btn-primary btn-block" defaultValue="Login" />
                    <div className="text-center mt-2">
                      <a href="#">Forgot Your password?</a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" data-toggle="dropdown" className="btn btn-primary dropdown-toggle sign-up-btn">Sign up</a>
                <div className="dropdown-menu action-form">
                  <form action="index.html" method="post">
                    <p className="hint-text">Fill in this form to create your account!</p>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Username" required="required" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password" required="required" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Confirm Password" required="required" />
                    </div>
                    <div className="form-group">
                      <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms &amp; Conditions</a></label>
                    </div>
                    <input type="submit" onclick="validation()" className="btn btn-primary btn-block" defaultValue="Sign up" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </nav>
  )
}

export default navbar