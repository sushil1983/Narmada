import React  from 'react'
import { Link } from 'react-router-dom';


class Project extends React.Component  {

	

  render(){
  return (






<div class="main-wrapper ">
<section class="page-title bg-1">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <span class="text-white">Latest works</span>
          <h1 class="text-capitalize mb-4 text-lg">Portfolio</h1>
          <ul class="list-inline">
            <li class="list-inline-item"><Link to={'/'} class="text-white">Home</Link></li>
            <li class="list-inline-item"><span class="text-white">/</span></li>
            <li class="list-inline-item"><Link to ={"/project"} class="text-white-50">Latest works</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="section portfolio pb-0">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-7 text-center">
				<div class="section-title">
					<span class="h6 text-color">Our works</span>
					<h2 class="mt-3 content-title ">We have done lots of works, lets check some</h2>
				</div>
			</div>
		</div>
	</div>

	<div class="container-fluid">
		<div class="row portfolio-gallery">
			<div class="col-lg-4 col-md-6">
				<div class="portflio-item position-relative mb-4">
					<a href="images/portfolio/1.jpg" class="popup-gallery">
						<img src="./images/portfolio/1.jpg" alt="" onclick="myFunction(this)" class="img-fluid w-100"/>

						<i class="ti-plus overlay-item"></i>
						<div class="portfolio-item-content">
							<h3 class="mb-0 text-white">Project california</h3>
							<p class="text-white-50">Web Development</p>
						</div>
					</a>
				</div>
			</div>

			<div class="col-lg-4 col-md-6">
				<div class="portflio-item position-relative mb-4">
					<a href="images/portfolio/2.jpg" class="popup-gallery">
						<img src="./images/portfolio/2.jpg" alt="" class="img-fluid w-100"/>

						<i class="ti-plus overlay-item"></i>
						<div class="portfolio-item-content">
							<h3 class="mb-0 text-white">Project california</h3>
							<p class="text-white-50">Web Development</p>
						</div>
					</a>
				</div>
			</div>

			<div class="col-lg-4 col-md-6">
				<div class="portflio-item position-relative mb-4">
					<a href="images/portfolio/3.jpg" class="popup-gallery">
						<img src="./images/portfolio/3.jpg" alt="" class="img-fluid w-100"/>

						<i class="ti-plus overlay-item"></i>
						<div class="portfolio-item-content">
							<h3 class="mb-0 text-white">Project california</h3>
							<p class="text-white-50">Web Development</p>
						</div>
					</a>
				</div>
			</div>

			<div class="col-lg-4 col-md-6">
				<div class="portflio-item position-relative mb-4">
					<a href="images/portfolio/4.jpg" class="popup-gallery">
						<img src="./images/portfolio/4.jpg" alt="" class="img-fluid w-100"/>

						<i class="ti-plus overlay-item"></i>
						<div class="portfolio-item-content">
							<h3 class="mb-0 text-white">Project california</h3>
							<p class="text-white-50">Web Development</p>
						</div>
					</a>
				</div>
			</div>

			<div class="col-lg-4 col-md-6">
				<div class="portflio-item position-relative  mb-4">
					<a href="images/portfolio/5.jpg" class="popup-gallery">
						<img src="./images/portfolio/5.jpg" alt="" class="img-fluid w-100"/>

						<i class="ti-plus overlay-item"></i>
						<div class="portfolio-item-content">
							<h3 class="mb-0 text-white">Project california</h3>
							<p class="text-white-50">Web Development</p>
						</div>
					</a>
				</div>
			</div>

			<div class="col-lg-4 col-md-6">
				<div class="portflio-item position-relative mb-4">
					<a href="images/portfolio/6.jpg" class="popup-gallery">
						<img src="./images/portfolio/6.jpg" alt="" class="img-fluid w-100"/>
						
						<i class="ti-plus overlay-item"></i>
						<div class="portfolio-item-content">
							<h3 class="mb-0 text-white">Project california</h3>
							<p class="text-white-50">Web Development</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>


</div>



 );
}
}
export default Project;
