import React, { useState } from 'react'


export default function TextForm(props) {
    const handeltoUP = () => {
        let newVal = text.toUpperCase();
        setText(newVal);
        props.showalert("Convert to Upper case","Success");
    }
    const handletochange = (event) => {
        setText(event.target.value);

    }
    const handeltodown=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("Convert to Lower case","Success");

    }
    const handeltoclear=()=>{
        setText('');
        props.showalert("Clear Text","Success");

    }
    const handelcopy=() =>{
        // var seltext=document.getElementById('mybox');
        // seltext.select();
        // navigator.clipboard.writeText(seltext.value);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showalert("Copy the Text","Success");

    }

    const handeltoRspace=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert("Remove all the Spaces ","Success");

    }

    const [text, setText] = useState('')
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}} >
                <h2 >Enter the text here</h2>
                <div className="mb-3">
                    {/* <label for="mybox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#38383a',color: props.mode==='dark'?'white':'black'}} onChange={handletochange} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className={`btn btn-${props.btn} mx-2 my-2`} onClick={handeltoUP}>Convert to Uppercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.btn} mx-2 my-2`} onClick={handeltodown}>Convert to Lowercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.btn} mx-2 my-2`} onClick={handeltoclear}>Clear</button>
                <button disabled={text.length===0} className={`btn btn-${props.btn} mx-2 my-2`} onClick={handeltoRspace}>Remove space</button>
                <button disabled={text.length===0} className={`btn btn-${props.btn} mx-2 my-2`} onClick={handelcopy}>CopyText</button>
                
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Character</p>
                <p>{(text.split(" ").filter((element)=>{return element.length!==0}).length)* 0.008} Minutes to read</p>
                <h2>Preview Summary</h2>
                <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>
                
            </div>
        </>
    ) 
}
