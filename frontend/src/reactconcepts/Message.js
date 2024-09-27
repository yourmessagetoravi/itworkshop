import React from 'react';

function Message(props) {
    return (
        <div>
            {/* accessing prop and displaying */}
            <h1>{props.content}</h1>
        </div>
    );
}

export default Message;