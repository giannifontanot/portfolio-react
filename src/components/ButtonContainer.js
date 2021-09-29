import React from "react";

export default function ButtonContainer(props){
    let live;
    if(props.live === 'GitHub'){
        live = "GitHub";
    }else if(props.live === 'Heroku'){
        live = "Heroku";
    }

    let btnLive = false;
    if(props.live != 'none'){
        btnLive = true;
    }



    return(
        <div className="button-container">
            <button className="button button-red"
                    onClick={() => window["fOpenRepo"](props.location)}>

                <i className="fab fa-github"></i>GitHub repo
            </button>
            &nbsp;

            {
                (btnLive && <button className="button button-blue"
                                    onClick={() => window["fOpenLive"+live](props.location)}>
                    <i className="fas fa-satellite-dish"></i>Live link
                </button>) || ""
            }

        </div>
    );
}