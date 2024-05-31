import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const reset = () => {
        setText(" ");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleSymbol = () => {
        let newText = text.replace(/[^\w\s:]/g, "");
        setText(newText);
    };




    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>

                <h2 className=" text-center text-primary">{props.heading}</h2>
                <div className="mb-3 my-3 mx-2">
                    <textarea className="form-control mx-auto " placeholder='Enter Your Paragraph' id="mybox" value={text} onChange={handleOnChange} rows="5"></textarea>
                </div>
                <div>
                    <button className='btn btn-primary  p-1 m-1 mx-2' onClick={handleUpclick}>Convert Upper</button>
                    <button className='btn btn-primary  p-1 m-1 mx-2' onClick={handleLowclick}>Convert Lower</button>
                    <button className='btn btn-primary  p-1 m-1 mx-2' onClick={reset}>Reset </button>
                    <button className='btn btn-primary  p-1 m-1 mx-2' onClick={handleCopy}>Copy Text</button>
                    <button className='btn btn-primary  p-1 m-1 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button className='btn btn-primary  p-1 m-1 mx-2' onClick={handleSmbol}>Remove Symbols</button>
                </div>
            </div>
            <div className='container my-2 mt-5 ' >
                <h3 className='text-center'>Your Text Summary is here</h3>
                <p className='text-center'>In the above sentances <b>{text.split(" ").length - 1} </b> Words And <b>{text.length} </b> Character</p>
                <p className='text-center'>Above Paragraph Can Be Read in <b>{0.008 * text.split(" ").length} </b>  Minutes </p>

            </div>

            <div>
                <hr />
                <h2 className='text-center'>Preview Paragraph</h2>
                <p className='pb-1 text-center border p-1 border-lg'>{text}</p>
            </div>
        </>


    )
}
