import React from 'react';
import "./textPhotos.css";
import img from "../../components/img/img1.png";
import img2 from "../../components/img/img2.png";

class TextPhotos extends React.Component{
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <div className="container">
            <div className="row">

        <div className="col-md-12">
            <img className="mt-5" src={img} alt="rasm" />
            <img className="mt-5" src={img2} alt="rasm" />
            <img className="mt-5" src={img} alt="rasm" />
            <img className="mt-5" src={img2} alt="rasm" />
            <img className="mt-5" src={img} alt="rasm" />
            <img className="mt-5" src={img2} alt="rasm" />
                    
         </div>

            </div>
        </div>
    }
}
export default TextPhotos;