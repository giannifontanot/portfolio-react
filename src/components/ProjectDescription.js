import React from "react";

export default function ProjectDescription(props) {
    return (
        <div className="ProjectDescription">
            <div><h1>{props.title}</h1></div>
            <div><h4>{props.subtitle}</h4></div>
            <div><p>{props.content}</p></div>
        </div>

    );
}