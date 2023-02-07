import { useState } from "react";

export default function TextArea() {
    const handelUPclick = () =>{
        const newText = text.toUpperCase();
        setText(newText);
        // console.log("UP was clicked");
        
    }
    const handelLPclick = () =>{
        const newText = text.toLowerCase();
        setText(newText);
        // console.log("UP was clicked");
        
    }
    const handelTrimclick = () =>{
        const newText = text.replace(/ /g,'');
        setText(newText);
        // console.log("UP was clicked");
        
    }
    const handelClearclick = () =>{
        const newText = "";
        setText(newText);
        // console.log("UP was clicked");
        
    }
    const handelOnChange = (event) => {
        // console.log("Changed");
        setText(event.target.value)
    }
    const zero = 0;
    const [text, setText] = useState("")
    return (
        <>
        <div className="container">
            <h1>Enter text here: </h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="8"
                    value={text}
                    placeholder="Enter your Text"
                    onChange={handelOnChange}
                ></textarea>
                <button className="btn btn-primary my-3 mx-3" onClick={handelUPclick}>Change to UPPERCASE</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handelLPclick}>Change to lowercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handelTrimclick}>Remove Sapces</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handelClearclick}>Clear Text</button>
            </div>
        </div>
        <div className="container">
            <h2>Your text summary: </h2>
            <p> <strong>{text.split(" ").length}</strong> words and <strong>{text.length}</strong> characters</p>
            <h3>Preview: </h3>
            <p>{text}</p>
        </div>
        </>
    );
}
