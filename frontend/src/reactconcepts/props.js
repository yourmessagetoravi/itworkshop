import React from "react";
import Message from "./Message";


const Props = () =>{
    const message = "Hello, students! Welcome to learning React props.";
    return(
        <div className="container">
            <h1>Example of prop</h1>
            <Message content={message} />
        </div>
     
    )
}

export default Props;