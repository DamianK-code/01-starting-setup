import React, {useState, useEffect} from "react";

import "./NailConfigurator.css";
import {PhotoshopPicker, SketchPicker} from "react-color";

const NailConfigurator = (props) => {
    const [enteredColor, setColor] = useState("");
    const [color, setColors] = useState();

    useEffect(() => {
        console.log(props.nailColor);
        setColors(props.nailColor);
    }, [props.nailColor])
    // npm install
    return (
        <div className="nail-configurator-panel">
            <label>Color</label>
            <PhotoshopPicker
                color={color}
                currentColor={color}
                onAccept={() => {
                    setColor(color);
                    props.changeColorHandler(color, props.nail);
                }}
                onChangeComplete={color => {
                    setColors(color.hex);
                }}
            />
        </div>
    );
};

export default NailConfigurator;
