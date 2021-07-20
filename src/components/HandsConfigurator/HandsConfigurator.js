import React from "react";
import HandConfigurator from "../Hands/HandConfigurator";
import "./HandsConfigurator.css";

const HandsConfigurator = props => {

        return (<div className="hands_configurator">
            <HandConfigurator
                key={props.initialFingers.right.handSide}
                hand={props.initialFingers.right.handSide}
                fingers={props.initialFingers.right.fingers}
                selectNail={props.selectNail}>
            </HandConfigurator>
            <HandConfigurator
                key={props.initialFingers.left.handSide}
                hand={props.initialFingers.left.handSide}
                fingers={props.initialFingers.left.fingers}
                selectNail={props.selectNail}>
            </HandConfigurator>
        </div>)

    }
;

export default HandsConfigurator;