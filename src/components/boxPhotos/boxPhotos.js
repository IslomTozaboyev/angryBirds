import React from 'react'
import "./boxPhotos.css";

class BoxPhotos extends React.Component{
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <div className="container boxPhotos">
            {this.state.children}
        </div>
    }
}

export default BoxPhotos;