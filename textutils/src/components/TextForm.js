import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked.." + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    
    const handleLoClick = ()=>{
        // console.log("LowerCase was clicked.." + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared all text","success");
    }
    
    const handleCopy = ()=>{
        // let text = document.getElementById("myBox"); 
        // text.select();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to ClipBoard","success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed","success");
    }
    
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // text = "new Text"  // -----> wrong way to change the state
    // setText("new Text")  // -----> Correct way to change the state

    return (
        <>
        <div className='container'>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'? 'black':'white', color:props.mode === 'dark'? 'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-info m-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-info m-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-info m-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-info m-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-info m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3">
            <h2>Your text summary..</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to Preview!!"}</p>
        </div>

        </>
    )
}
