import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        try {
            let newText = text.toUpperCase();
            setText(newText)
            props.showAlert("Converted to uppercase", "success");
        } catch (error) {
            props.showAlert("Error converting to uppercase", "error");
        }
    }

    const handleLoClick = () => {
        try {
            let newText = text.toLowerCase();
            setText(newText)
            props.showAlert("Converted to lowercase", "success");
        } catch (error) {
            props.showAlert("Error converting to lowercase", "error");
        }
    }

    const handleClearClick = () => {
        setText("")
        props.showAlert("Text cleared", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        try {
            navigator.clipboard.writeText(text);
            props.showAlert("Text copied to clipboard", "success");
        } catch (error) {
            props.showAlert("Error copying to clipboard", "error");
        }
    }

    const handleExtraSpaces = () => {
        try {
            let newText = text.split(/[ ]+/).join(" ").trim();
            setText(newText)
            props.showAlert("Extra spaces removed", "success");
        } catch (error) {
            props.showAlert("Error removing extra spaces", "error");
        }
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>        
                <h1 className='mb-1'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        value={text} 
                        onChange={handleOnChange} 
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }} 
                        id="myBox" 
                        rows="8" 
                        placeholder="Enter your text here"
                        aria-label="Text input area"
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Text Summary</h2>
                <p>
                    {text.split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters
                    <br />
                    {(0.008 * text.split(/\s+/).filter(word => word.length > 0).length).toFixed(2)} minutes read time
                </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter text above to preview here'}</p>
            </div>
        </> 
    )
}
