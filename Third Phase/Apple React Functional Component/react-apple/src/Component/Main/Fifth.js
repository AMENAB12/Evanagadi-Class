import React from 'react'
import banker from '../../commonResource/images/home/banker.png';
import apple_logo from '../../commonResource/images/icons/apple-tv-logo.png';
import watch from '../../commonResource/images/icons/watch-series5-logo.png';
export default function Fifth() {
  return (
    <div>

<section className="fifth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={apple_logo} alt="apple_logo" />
							</div>
						</div>

						<div className="tvshow-logo-wraper">
							<img src={banker} alt= "banker" />
						</div>

						<div className="watch-more-wrapper">
							<a href="/">Watch now on the Apple TV App</a>
						</div>
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={watch} alt="watch" />
							</div>
						</div>
						<div className="description-wraper">
							With the Always-On Retina display.<br/>
							You’ve never seen a watch like this.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="/">Learn more</a></li>
								<li><a href="/">Buy</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>

    </div>
  )
}
