import React from "react";

export default function ImgWork(props){
    return(
        <div className="col-6 col-6-md col-10-sm text-center vertical-center">

                <img alt="" className="img-thumbnail imgProject" src={props.src} />

        </div>
    );
}
