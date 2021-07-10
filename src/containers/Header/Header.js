import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import logo from "../../components/img/logo.png"

class Header extends React.Component{
    state ={hideHeader: true}

    toggleHeader = () => {
        this.setState((state) => {
            console.log(state);
           return { hideHeader: !state.hideHeader}
       })
    }

    render() {
        return <header className="header__section">
            <div className="container d-flex flex-wrap justify-content-between align-items-center pt-3">
                    <div>
                        <img className="w-100" src={logo} alt="rasm" />
                    </div>
                <div className="d-flex align-items-center">
                    <ul className="d-none d-lg-flex align-items-center m-0">
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Get started</a>
                        </li>
                        <li>
                            <a href="#">Community</a>
                        </li>
                        <li>
                            <a href="#">blog</a>
                        </li>
                        <li>
                            <a href="#">Enterprice</a> 
                        </li>
                        <li>
                            <a href="#">Pricing</a> 
                        </li>
                        <li>
                            <button className="btn btn-primary">
                                <FontAwesomeIcon className="me-3" icon={faDownload}/>
                                Free trial
                           </button>
                        </li>
                    </ul>
                </div>

                <div className="d-none d-flex align-items-center">
                    <a className="btn text-primary fw-bold" href="#">Login</a>
                    <a className="btn text-primary fw-bold" href="#">Become a member</a>
                </div>

                <div className="d-block d-lg-none">
                 <button className="btn me-2"  onClick={this.toggleHeader}>
                        <FontAwesomeIcon className="" icon={faBars}/>
                    </button>
                </div>
                <Slide direction="down" className={`menu-mobile d-lg-none w-100 ${this.state.hideHeader && "d-none" || ""}`}>
                <ul className="menu  mt-5">
                        <li className="my-4">
                            <a href="#">Features</a>
                        </li>
                        <li className="my-4">
                            <a href="#">Get started</a>
                        </li>
                        <li className="my-4">
                            <a href="#">Community</a>
                        </li>
                        <li className="my-4">
                            <a href="#">blog</a>
                        </li>
                        <li className="my-4">
                            <a href="#">Enterprice</a>
                        </li>
                        <li className="my-4">
                            <a href="#">Pricing</a>
                        </li>
                    </ul>
                </Slide>
            </div>
            <hr />
        </header>
    }
}

export default Header;