import React,{useState} from 'react'



export default function About(props) {
    const [mystyle, setmystyle] = useState({
            color: props.mode==='light'?'black':'white',
            backgroundColor: props.mode==='light'?'white':'#38383a',
            borderColor: props.mode==='light'?'black':'white'

    });


    
    return (
        <div className='container'>
            <h1 className='mx-2' style={{color:props.mode==='light'?'black':'white'}}>About us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne" style={mystyle}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={mystyle}>
                        <div className="accordion-body" >
                            TextUtils gives you a way to analyze your text quickely and efficiently. be it word count, character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  >
                    <h2 className="accordion-header" id="headingTwo" style={mystyle}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={mystyle}>
                        <div className="accordion-body">
                            TextUtils is s free character counter tool that provides instant charaacter count & word count statistics for a given text.TextUtils reports the number of words and characters.thus it is suitable for writing textwith word /character limit. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree" style={mystyle}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle} >
                           <strong>Browser Compatible</strong> 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={mystyle} >
                        <div className="accordion-body" >
                        This word counter software works in any web browsers such as Chrome, Firefox ,Internet Explorer,etc. It suits to count characters in facebook, blog, books,excel document,pdf document,essays,etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
