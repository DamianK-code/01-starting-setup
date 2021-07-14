import React from "react";
import HandConfigurator from "../Hands/HandConfigurator";
import "./HandsConfigurator.css";

const HandsConfigurator = props => {

        return (<div className="hands_configurator">
            {props.initialFingers.map((configuration) => (
                <HandConfigurator
                    key={configuration.hand}
                    hand={configuration.hand}
                    fingers={configuration.fingers}
                    selectNail={props.selectNail}>
                </HandConfigurator>
            ))}
        </div>)

    }
;

export default HandsConfigurator;