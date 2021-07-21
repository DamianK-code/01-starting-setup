import React, {useEffect, useState} from "react";
import Card from "../UI/Card";
import HandsConfigurator from "./HandsConfigurator";
import "./HandsTemplateConfigurator.css";
import NailConfigurator from "../Hands/NailConfigurator";
import instance from "../../axios";
import AvailableSavedCreations from "../Hands/AvailableSavedCreations";

function HandsTemplateConfigurator(props) {
    const initialFingerConfigurations = null;
    const allFingerConfigurations = [];

    const [allAvailableFingerConfigurations, setConfigurations] = useState(allFingerConfigurations);
    const [fingerConfigurations, setFingers] = useState(initialFingerConfigurations);
    const [selectedNail, setNail] = useState(null);
    const [currentColor, setCurrentColor] = useState(null);

    useEffect(() => {
        instance
            .get('http://localhost:8080/api/creation')
            .then(response => {
                console.log(response.data);
                setConfigurations(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onChooseDifferent = (identifier) => {
        console.log("Clicked different: "+ identifier);
        instance
            .get('http://localhost:8080/api/creation/'+identifier)
            .then(response => {
                console.log(response.data);
                setFingers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

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

        var singleHand = fingerConfigurations[hand.toLowerCase()]
        for (var j = 0; j < singleHand.fingers.length; j++) {
            var singleFinger = singleHand.fingers[j];
            console.log(singleFinger)
            if (singleFinger.label === finger) {
                singleFinger.color = color;
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
                {
                    fingerConfigurations != null ?
                        (<HandsConfigurator
                            initialFingers={fingerConfigurations}
                            selectNail={handleSelectNail}
                        />) : (<div/>)
                }
                {
                    selectedNail != null ?
                        (<NailConfigurator
                            nail={selectedNail}
                            saveHandler={saveNailHandler}
                            changeColorHandler={handleChangeColor}
                        />) : (<div/>)
                }
            </Card>
            <Card className="configurator">
                <AvailableSavedCreations
                    creations={allAvailableFingerConfigurations}
                    onChangedCreation={onChooseDifferent}
                />
            </Card>

        </div>
    );
}

export default HandsTemplateConfigurator;
