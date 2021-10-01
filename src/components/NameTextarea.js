import React, { useState } from "react";


export default function NameInputs (props)  {
    const [name, setName] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isBlur, setIsBlur] = useState(false);

    // Handling input onChange event
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    // Handling input onFocus event
    const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocus(true);
        setIsBlur(false);

        // Do something with event
        console.log(event);
    };

    // Handling input onBlur event
    const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocus(false);
        setIsBlur(true);

        // Validate entered name
        if(name.match(/^[a-z][a-z\s]*$/i)){
            setIsValid(true);
        } else {
            setIsValid(false);
        }

        // Do something with event
        console.log(event);
    };

    return (
        <div className="container">
            <div className="">
            <div className="pure-control-group">
                <label htmlFor={props.id}>{props.InputName}</label>
                <textarea
                    id={props.id}
                    // type="textarea"
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    value={name}
                    onChange={changeHandler}
                    className="input"

                >{props.placeholder}</textarea>

            {isFocus && (<span className="pure-form-message-inline hint">Only letters and spaces are acceptable.</span>)}
            {isBlur && !isValid && <p className="pure-form-message-inline error">The name you entered is required.</p>}
            {isBlur && isValid && <p className="pure-form-message-inline success">The name you entered looks good.</p>}
            </div>
        </div>
        </div>
    );
};