import React, { CSSProperties } from "react";
import "../style/style.css";

interface childProps {
    color: number;
}

const TrafficSignalLight: React.FC<childProps> = (props) => {
    const borderStyle: CSSProperties = {
        border: "4px solid black",
    };
    const { color } = props;
    return (
        <div className="trafficLight">
            <div
                style={color === 1 ? borderStyle : undefined}
                className="red"
            ></div>
            <div
                style={color === 2 ? borderStyle : undefined}
                className="yellow"
            ></div>
            <div
                style={color === 3 ? borderStyle : undefined}
                className="green"
            ></div>
        </div>
    );
};

export default TrafficSignalLight;
