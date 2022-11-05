import React from 'react'

export default function Alert(props) {
    // const capatilzed=(word)=>{
    //     const lower=word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() +lower.slice(1); 
    // }
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div className="alert alert-success" role="alert">
               <strong>{props.alert.type}</strong>: {props.alert.msg}
            </div>}

        </div>
    )
}
