import React from 'react'
import "./container.css";

class Container extends React.Component{
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <div className="container myContainer">
            {this.state.children}
        </div>
    }
}

export default Container;