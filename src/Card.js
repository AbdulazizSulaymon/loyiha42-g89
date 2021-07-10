import React from 'react'
import "./Card.css"

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return <div className="bg-dark  text-white rounded shadow p-3">
            <img src={this.state.img} className="w-100 mb-3" alt="" />
            <p className="fw-bold">
                {this.state.title}
            </p>
            <p>
                {this.state.subtitle}
            </p>
        </div>
    }
}

export default Card;