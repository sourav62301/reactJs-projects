// import React, {useState} from 'react'
import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white',
    // })


    let myStyle = {
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'black':'white',
        border : props.mode==='dark'?'1px solid white':'1px solid black',
    }



    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border : '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    // }
    
    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item m-2" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count.
                </div>
                </div>
            </div>
            <div className="accordion-item m-2" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils is a free charcter counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item m-2" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Comaptible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This word counter software works in any web browsers such as Chrome, FireFox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
            </div>
            {/* <div className="container my-3 p-2">
                <button onClick={toggleStyle} type="button" className="btn btn-danger">{btnText}</button>
            </div> */}
        </div>
    )
}