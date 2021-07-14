import React from "react";

import Finger from "./Finger";
import "./HandConfigurator.css";

const HandConfigurator = (props) => {

    return (
        <div className={'hand ' + props.hand}>
            {props.fingers.map((finger) => (
                <Finger
                    key={finger.label + '-' + props.hand}
                    color={finger.color}
                    name={finger.label}
                    hand={props.hand}
                    clickHandler={props.selectNail}
                />
            ))}
        </div>
    );
};

export default HandConfigurator;
