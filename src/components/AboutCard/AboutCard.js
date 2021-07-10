import React from 'react'
import "./AboutCard.css";


class AboutCard extends React.Component{
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <div className="col-md-12 w-100 h-100">
            <div className="aboutCard h-100 w-100 text-center">
        <div>
                <h2 className="text-center">{ this.state.title}</h2>
                 <p className="text-center">{ this.state.subtitle}</p>
                  <div className="text-center">
                    <button className="btn btn-primary me-3 mt-4">{ this.state.button1}</button>
                      <button className="btn btn-primary ms-3 m-0 mt-4">{ this.state.button2}</button>
            </div>
        </div>
    </div>
        </div>
    }
}

export default AboutCard;