import React  from 'react'
import { Link } from 'react-router-dom';


class Header extends React.Component  {



  render(){
  return (
    <header className="navigation">
	<div className="header-top ">
		<div className="container">
			<div className="row justify-content-between align-items-center">
				<div className="col-lg-2 col-md-4">
					<div className="header-top-socials text-center text-lg-left text-md-left">
          <Link to={'https://www.facebook.com/'}   target="_blank"><i className="ti-facebook"></i></Link>
          <Link to={'https://www.twitter.com/'}  target="_blank"><i className="ti-twitter"></i></Link>
          <Link to={'https://www.linkedin.com/'}  target="_blank"><i className="ti-linkedin"></i></Link>
					</div>
				</div>
				<div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
					<div className="header-top-info">
						<a href="tel:+23-345-67890">Call Us : <span>+23-345-67890</span></a>
						<a href="mailto:support@gmail.com" ><i className="fa fa-envelope mr-2"></i><span>support@gmail.com</span></a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<nav className="navbar navbar-expand-lg  py-4" id="navbar" >
		<div className="container"style={{'background':'white'}}>
		  <a className="navbar-brand" href=" " onClick={'/'}>
		  <img src="images/logoNS.png" alt="Logo" />
		  </a>

		  <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
			<span className="fa fa-bars"></span>
		  </button>
	  
		  <div className="collapse navbar-collapse text-center" id="navbarsExample09"  >
			<ul className="navbar-nav ml-auto">
			  <li className="nav-item active"  >
				< Link className="nav-link" style={{"color":"red"}} to={'/'}>Home <span className="sr-only">(current)</span></ Link>
			  </li>
			  <li className="nav-item dropdown">
        <Link to ="#" className="nav-link dropdown-toggle" style={{"color":"red"}} id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</Link>
					<ul className="dropdown-menu" aria-labelledby="dropdown03">
						<li> <Link to={'/about'}style={{"color":"red"}} className="dropdown-item" >Our company</Link></li>
						{/* <li> <Link to={'/pricing'} className="dropdown-item" >Pricing</Link></li> */}
					</ul>
			  </li>
			   <li  className="nav-item"><Link to ={'/service'} style={{"color":"red"}} className="nav-link" >Services</Link></li>
			   <li className="nav-item"><Link to ={'/project'}style={{"color":"red"}} className="nav-link" >Portfolio</Link></li>
			   
			   <li className="nav-item"><Link to ={'/contact'} style={{"color":"red"}}className="nav-link" >Contact</Link></li>
			</ul>

			<form className="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
         <Link to ={'/contact'}style={{"color":"green"}} className="btn btn-solid-border btn-round-full">Get a Quote</Link>
			</form>
		  </div>
		</div>
	</nav>
</header>
  );
}
}
export default Header;
