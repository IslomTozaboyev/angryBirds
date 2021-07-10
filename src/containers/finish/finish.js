import React from 'react';
import "./finish.css";
import finish from "../../components/img/finish.png"

class Finish extends React.Component{

     constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <div className="finish">
            <div className="container text-center">
                <div className="row text-center">
                    <div className="col-md-12">
                    <img className="w-100" src={finish} alt="rasm" />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Finish;