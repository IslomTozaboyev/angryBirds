import React from 'react';
import "./Footer.css";

class Footer extends React.Component{

     constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-2 mt-5">
                        <ul>
                            <li className="fw-bold mb-3 text-white">Framer</li> 
                            <li className="text-secondary mt-2">Pricing</li>
                            <li className="text-secondary mt-2">Enterprise</li>
                            <li className="text-secondary mt-2">Education</li>
                            <li className="text-secondary mt-2">Updates</li>
                            <li className="text-secondary my-2">Beta</li>
                         </ul>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-2 mt-5">
                        <ul>
                            <li className="fw-bold mb-3 text-white">Features</li> 
                            <li className="text-secondary mt-2">Overview</li>
                            <li className="text-secondary mt-2">Design</li>
                            <li className="text-secondary mt-2">Code</li>
                            <li className="text-secondary mt-2">Collaborate</li>
                         </ul>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-2 mt-5">
                        <ul>
                            <li className="fw-bold mb-3 text-white">Get Started</li> 
                            <li className="text-secondary mt-2">Tutorials</li>
                            <li className="text-secondary mt-2">Resources</li>
                            <li className="text-secondary mt-2">Guides</li>
                            <li className="text-secondary mt-2">Examples</li>
                            <li className="text-secondary my-2">Docs</li>
                         </ul>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-2 mt-5">
                        <ul>
                            <li className="fw-bold mb-3 text-white">About</li>  
                            <li className="text-secondary mt-2">Blog</li>
                            <li className="text-secondary mt-2">Jobs</li>
                            <li className="text-secondary mt-2">Brand Assets</li>
                            <li className="text-secondary mt-2">Community</li>
                            <li className="text-secondary my-2">Help Center</li>
                         </ul>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-2 mt-5">
                        <ul>
                            <li className="fw-bold mb-3 text-white">Platforms</li>
                            <li className="text-secondary mt-2">Design for iOS</li>
                            <li className="text-secondary mt-2">Design for Android</li>
                         </ul>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-2 mt-5">
                        <ul>
                            <li className="fw-bold mb-3 text-white">UI Kits</li> 
                            <li className="text-secondary mt-2">Voyage</li>
                            <li className="text-secondary mt-2">Fiber</li>
                         </ul>
                    </div>
                  
                </div>
            </div>
        </div>
    }
}

export default Footer;