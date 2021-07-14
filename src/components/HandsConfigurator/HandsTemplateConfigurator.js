import React, {useState} from "react";
import Card from "../UI/Card";
import HandsConfigurator from "./HandsConfigurator";
import "./HandsTemplateConfigurator.css";
import NailConfigurator from "../Hands/NailConfigurator";

function HandsTemplateConfigurator(props) {
    const initialFingerConfigurations = [
        {
            fingers: [
                {label: "maly", color: '#f00'},
                {label: "serdeczny", color: '#f00'},
                {label: "srodkowy", color: '#f00'},
                {label: "wskazujacy", color: '#f00'},
                {label: "kciuk", color: '#f00'},
            ],
            hand: 'left'
        },
        {
            fingers: [
                {label: "maly", color: '#f00'},
                {label: "serdeczny", color: '#f00'},
                {label: "srodkowy", color: '#f00'},
                {label: "wskazujacy", color: '#f00'},
                {label: "kciuk", color: '#f00'},
            ],
            hand: 'right'
        },
    ];
    const [fingerConfigurations, setFingers] = useState(initialFingerConfigurations);
    const [selectedNail, setNail] = useState(null);
    const [currentColor, setCurrentColor] = useState(null);

    const saveNailHandler = (nailData) => {
        console.log(nailData);
    };

    const handleSelectNail = (hand, finger) => {
        setNail(hand + ' ' + finger);
    }

    const handleChangeColor = (color, handfinger) => {
        console.log("CLR : " + color);
        const arr = handfinger.split(' ');

        const hand = arr[0];
        const finger = arr[1];
        setCurrentColor(color);

        console.log("hand : " + hand + " finger: " + finger);
        for (var i =0; i< fingerConfigurations.length ; i++){
            var singleHand = fingerConfigurations[i];
            if(singleHand.hand === hand){
                for (var j =0; j< singleHand.fingers.length ; j++){
                    var singleFinger = singleHand.fingers[j];
                    if(singleFinger.label === finger){
                        singleFinger.color = color;
                    }
                }
            }
        }
        setFingers(fingerConfigurations);
    }

    const getCurrentColor = () => {
        return currentColor;
    }

    return (
        <div>
            <Card className="configurator">
                <HandsConfigurator
                    initialFingers={fingerConfigurations}
                    selectNail={handleSelectNail}
                />
                {
                    selectedNail != null ?
                        (<NailConfigurator
                            nail={selectedNail}
                            saveHandler={saveNailHandler}
                            changeColorHandler={handleChangeColor}
                        />) : (<div/>)
                }
            </Card>
        </div>
    );
}

export default HandsTemplateConfigurator;
