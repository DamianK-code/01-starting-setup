import React, {useEffect, useState} from "react";
import Card from "../UI/Card";
import HandsConfigurator from "./HandsConfigurator";
import "./HandsTemplateConfigurator.css";
import NailConfigurator from "../Hands/NailConfigurator";
import instance from "../../axios";
import AvailableSavedCreations from "../Hands/AvailableSavedCreations";
import SavedCreationForm from "../Hands/SavedCreationForm";

function HandsTemplateConfigurator(props) {
    const EMPTY_CONFIGURATION = {
        identifier: null,
        name: 'new',
        right: {
            identifier: null,
            handSide: 'RIGHT',
            fingers: [
                {identifier: null, label: "THUMB", color: '#f00'},
                {identifier: null, label: "POINTING_FINGER", color: '#f00'},
                {identifier: null, label: "MIDDLE_FINGER", color: '#f00'},
                {identifier: null, label: "RING_FINGER", color: '#f00'},
                {identifier: null, label: "LITTLE_FINGER", color: '#f00'},
            ]
        },
        left: {
            identifier: null,
            handSide: 'LEFT',
            fingers: [
                {identifier: null, label: "THUMB", color: '#f00'},
                {identifier: null, label: "POINTING_FINGER", color: '#f00'},
                {identifier: null, label: "MIDDLE_FINGER", color: '#f00'},
                {identifier: null, label: "RING_FINGER", color: '#f00'},
                {identifier: null, label: "LITTLE_FINGER", color: '#f00'},
            ]
        }
    };
    const initialFingerConfigurations = null;
    const allFingerConfigurations = [];

    const [allAvailableFingerConfigurations, setConfigurations] = useState(allFingerConfigurations);
    const [fingerConfigurations, setFingers] = useState(initialFingerConfigurations);
    const [selectedNail, setNail] = useState(null);
    const [currentColor, setCurrentColor] = useState(null);

    useEffect(() => {
        loadConfigurations();
    }, []);

    const loadConfigurations = () => {
        instance
            .get('http://localhost:8080/api/creation')
            .then(response => {
                console.log(response.data);
                setConfigurations(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const onChooseDifferent = (identifier) => {
        console.log("Clicked different: " + identifier);
        instance
            .get('http://localhost:8080/api/creation/' + identifier)
            .then(response => {
                console.log(response.data);
                setFingers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function saveHand(hand) {
        instance
            .post('http://localhost:8080/api/hand', hand)
            .then(response => {
                hand.fingers.forEach((finger) =>{
                    saveFinger(finger);
                })
            }).catch((error) => {console.log(error);});
    }

    const saveFinger = (finger) => {
        instance
            .post('http://localhost:8080/api/finger', finger)
            .then(response => {
                console.log(response.data);
            }).catch((error) => {console.log(error);});
    }

    const saveConfigurationOnServer = (name) => {
        fingerConfigurations.name = name;
        instance
            .post('http://localhost:8080/api/creation', fingerConfigurations)
            .then(response => {
                setFingers(response.data);
                saveHand(fingerConfigurations.right);
                saveHand(fingerConfigurations.left);
                loadConfigurations();
            }).catch((error) => {console.log(error);});
    };

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

    const newConfiguration = () => {
        setFingers(EMPTY_CONFIGURATION);
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
            {
                fingerConfigurations != null ?
                    (<Card className="configurator-save-panel">
                        <SavedCreationForm
                            creation={fingerConfigurations}
                            onSaveConfiguration={saveConfigurationOnServer}
                        />
                    </Card>) : (<div/>)
            }
            <Card className="configurator-save-panel">
                <AvailableSavedCreations
                    creations={allAvailableFingerConfigurations}
                    onChangedCreation={onChooseDifferent}
                />
            </Card>
            <Card className="configurator-save-panel">
                <button onClick={newConfiguration} className="my-new-configuration-button">Create new, empty configuration</button>
            </Card>
        </div>
    );
}

export default HandsTemplateConfigurator;
