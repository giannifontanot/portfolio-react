import React from "react";

export default function PolaroidImage(props){
    return(
        <div className="polaroid">
            <img className="pure-img img-about" src={props.src} alt="" />
        </div>
    );
}
