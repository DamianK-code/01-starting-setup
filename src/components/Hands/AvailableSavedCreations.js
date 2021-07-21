import React, {useEffect, useState} from "react";

import "./AvailableSavedCreations.css";

const AvailableSavedCreations = (props) => {
    const [creations, setCreations] = useState([]);

    useEffect(() => {
        console.log('Refreshing: ' + props.creations);
        setCreations(props.creations);
    }, [props.creations]);

    return (
        <div>
            <div className="allowed-configurations">
                <div className="single-creation-header">
                    <div className="single-creation-header-column">Identifier</div>
                    <div className="single-creation-header-column">Name</div>
                </div>
                {
                    creations.map((creation, index) => {
                        return (<div className="single-creation"
                                     key={creation.name + '-' + index}
                                     onClick={() => {
                                         console.log("Passing " + creation.identifier);
                                         props.onChangedCreation(creation.identifier);
                                     }}>
                            <div className="single-creation-column">
                                {creation.identifier}
                            </div>
                            <div className="single-creation-column">
                                {creation.name}
                            </div>
                        </div>)
                    })
                    }
                    </div>
                    </div>
                    );
                }
                    ;

                    export default AvailableSavedCreations;
