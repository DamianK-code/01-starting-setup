import React from "react";

import "./Finger.css";

const Finger = (props) => {
    return (
        <div className={'finger ' + props.name + '-' + props.hand} >
            <div className={'nail'}></div>
        </div>
    );
};
export default Finger;
