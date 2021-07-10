import { faPlug, faVideo, faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "./Title.css"

class Title extends React.Component{
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return  <div className="title row justify-content-center">
                <div className="col-sm-8 col-md-6">
                      <h1 className="text-center mb-4">{ this.state.heading}</h1>
                <p className="text-center">{this.state.subtitle}</p>
                <div className="d-flex justify-content-center align-items-center"> 
                    <input className="w-100 p-2" type="text" placeholder="Email"/>
                    <button className="h-100">Start your trial</button>
                </div>
                <div className="text-center mt-5 ">
                    <FontAwesomeIcon className="text-primary mt-1 me-2" icon={faVideo}/>
                    <a className="text-decoration-none text-center" href="#">Wath intro video</a>
               </div>
                </div>
            </div>
    }
}
export default Title; 