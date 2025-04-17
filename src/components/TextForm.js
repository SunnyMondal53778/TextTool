import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to uppercase","success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Coverted to lowercase","success");
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared","success");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();        
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard","success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces ","success");
    }
    const [text, setText] = useState('');
    // text = "new text"; Wrong way to change the state
    // setText("new text"); //Correct way to change the state
    return (
        <>
        <div className = "container" style={{color: props.mode === 'dark'?'white':'black'}}>        
            <h1 className='mb-1'> {props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#ced4da':'white',color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8" placeholder ="Enter Your Text Here" ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lower Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: 'Nothing to Preview'}</p>
        </div>
        </> 
    )
}
