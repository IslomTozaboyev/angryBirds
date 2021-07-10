import React from 'react';
import "./Enterprice.css";
import f1 from "../../components/img/f1.png";
import f2 from "../../components/img/f2.png";
import f3 from "../../components/img/f3.png";

class Enterprice extends React.Component{
    render() {
        return <div className="enterprice">
            <div className="container">
                <div className="row text-center mt-5  text-white">
                    <div className="col-md-12">
                        <h1>Framer is for teams, too.</h1>
                        <p>Join a growing list of companies who use Framer to make all the products you know and love.</p>
                        <button className="btn btn-light py-2 p-5 mt-4">
                        <b>Learn about Enterprise</b>
                        </button>
                    </div>
                    <div className="col-12 mt-5">
                        <img className="xero" src={f1} alt="rasm" />
                        <img className="xero" src={f2} alt="rasm" />
                        <img className="xero" src={f3} alt="rasm" />
                        <img className="xero" src={f1} alt="rasm" />
                        <img className="xero" src={f2} alt="rasm" />
                        <img className="xero" src={f3} alt="rasm" />
                        <img className="xero" src={f1} alt="rasm" />
                        <img className="xero" src={f2} alt="rasm" />
                        <img className="xero" src={f3} alt="rasm" />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Enterprice;