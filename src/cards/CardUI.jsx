import React from 'react';
import "./card-style.css";

const Card = props =>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="image1" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text secondary">
                   {props.text}
                </p>
    <a href="" className="btn btn-outline-success">know more</a>
            </div>
        </div>

    );
}

export default Card;