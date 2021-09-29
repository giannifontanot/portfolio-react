import React from "react";
import ImgWork from "./ImgWork";
import ContentsProject from "./ContentsProject";

export default function Project(props){
    return(
        <div>
            <div className="flex-grid tenths work-container" style={{padding:15}}>

                <ContentsProject title={props.title} subtitle={props.subtitle} location={props.location} live={props.live} content={props.content} />
                <ImgWork src={props.image} />
            </div>
            <br /><br />
        </div>
    );
}