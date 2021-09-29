import React from "react";
import ProjectDescription from './ProjectDescription'
import ButtonContainer from './ButtonContainer'

export default function ContentsProject(props){
    return(
        <div className="col-4 col-4-md col-10-sm text-left vertical-center">

            <ProjectDescription
                title={props.title}
                subtitle={props.subtitle}
                content={props.content}
            />

            <ButtonContainer location={props.location} live={props.live} />
        </div>
    );
}