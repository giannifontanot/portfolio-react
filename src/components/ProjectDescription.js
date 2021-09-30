import React from "react";

export default function ProjectDescription(props) {
    return (
        <div className="ProjectDescription">
            <div><h1>{props.title}</h1></div>
            <div><h2>{props.subtitle}</h2></div><br />
            <div><p>{props.content}</p></div>
        </div>

    );
}