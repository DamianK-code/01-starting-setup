import React from "react";

import "./Finger.css";

const Finger = (props) => {
    const colorHandler = (color) => {
        console.log("Changed color to: " + color);
    }

    return (
        <div className={'finger ' + props.name + '-' + props.hand}>
            <div className={'nail'} style={{backgroundColor: props.color}}
                 onClick={() => {
                     props.clickHandler(props.hand, props.name, colorHandler);
                 }}
            />
        </div>
    );
};

export default Finger;
