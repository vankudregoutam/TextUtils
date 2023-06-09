import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!', 'success')
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase!', 'success')
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleClear = (event) => {
        setText('');
        props.showAlert('Cleared!', 'success')
    }

    const handleCopy = () => {
        // var text = document.getElementById('myBox');
        // text.select();
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert('Copied text!', 'success')
    }

    // regexp of javascript is used
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(' '));
        props.showAlert('Extra spaces revomed!', 'success')
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{
                        backgroundColor:
                            props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black'
                    }}
                        id="myBox" rows="8" onChange={handleChange}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Change to Upper Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Change to Lower Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Revome Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.08 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <p>{text.split('.').filter((element)=>{return element.length!==0}).length} sentences</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the above textbox to preview'}</p>
            </div>
        </>
    )
}
