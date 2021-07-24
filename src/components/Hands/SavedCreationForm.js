import React, {useEffect, useState} from "react";

import "./SavedCreationForm.css";

const SavedCreationForm = (props) => {
        const [creation, setCreation] = useState([]);
        const [editedCreationName, setEditedCreationName] = useState('');

        useEffect(() => {
            console.log('Saving: ' + props.creation);
            setCreation(props.creation);
        }, [props.creation]);

        // useEffect(() => {
        //     console.log('Editing creation name: ' + props.creation.name);
        //     setEditedCreationName(props.creation.name);
        // }, [props.creation.name]);

        const changeName = (event) => {
            console.log(event.target.value);
            setEditedCreationName(event.target.value);
        }

        return (
            <div className="save-configuration-form">
                <div className="save-configuration-form-row">
                    <div className="save-configuration-form-label">Identifier</div>
                    <div className="save-configuration-form-input">
                        <input className="my-input" type="number" defaultValue={creation.identifier} readOnly={true}/>
                    </div>
                </div>
                <div className="save-configuration-form-row">
                    <div className="save-configuration-form-label">Name</div>
                    <div className="save-configuration-form-input">
                        <input className="my-input" type="text" defaultValue={creation.name}
                               onChange={changeName}/>
                    </div>
                </div>
                <div className="save-configuration-form-row">
                    <button className="my-button" onClick={() => {
                        props.onSaveConfiguration(editedCreationName);
                    }} type={"submit"}>Prześlij
                    </button>
                </div>
            </div>
        );
    }
;

export default SavedCreationForm;
