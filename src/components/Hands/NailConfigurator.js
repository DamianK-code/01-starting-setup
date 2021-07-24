import React, {useState} from "react";

import "./NailConfigurator.css";
import {PhotoshopPicker} from "react-color";

const NailConfigurator = (props) => {
    const availableColors = ['#fff', '#f00', '#0f0', '#00f', '#000'];
    const [enteredColor, setColor] = useState("");

    const colorChengeHandler = (color, event) => {
        setColor(color.hex);
        props.changeColorHandler(color.hex, props.nail);
    };

    // npm install
    return (
        <div className="nail-configurator-panel">
            <label>Color</label>
            <PhotoshopPicker onChange={colorChengeHandler} hex={enteredColor}
                             height="368px"/>
        </div>
    );
};

export default NailConfigurator;
