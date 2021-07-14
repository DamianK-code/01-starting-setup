import React from "react";
import HandConfigurator from "../Hands/HandConfigurator";
import "./HandsConfigurator.css";

const HandsConfigurator = props => {
        const initialFingerConfigurations = [
            {
                fingers: [
                    {label: "maly", color: '#FFEBC8FF'},
                    {label: "serdeczny", color: '#FFEBC8FF'},
                    {label: "srodkowy", color: '#FFEBC8FF'},
                    {label: "wskazujacy", color: '#FFEBC8FF'},
                    {label: "kciuk", color: '#FFEBC8FF'},
                ],
                hand: 'left'
            },
            {
                fingers: [
                    {label: "maly", color: '#FFEBC8FF'},
                    {label: "serdeczny", color: '#FFEBC8FF'},
                    {label: "srodkowy", color: '#FFEBC8FF'},
                    {label: "wskazujacy", color: '#FFEBC8FF'},
                    {label: "kciuk", color: '#FFEBC8FF'},
                ],
                hand: 'right'
            },
        ];

        return (<div className="hands_configurator">
            {initialFingerConfigurations.map((configuration) => (
                <HandConfigurator
                    key={configuration.hand}
                    hand={configuration.hand}
                    fingers={configuration.fingers}>
                </HandConfigurator>
            ))}
        </div>)

    }
;

export default HandsConfigurator;