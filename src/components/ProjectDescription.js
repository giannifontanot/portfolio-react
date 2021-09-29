import React from "react";

export default function ProjectDescription(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <h2>{props.subtitle}</h2>
            <p>{props.content}</p>
        </div>

    );
}