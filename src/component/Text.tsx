import React, { ChangeEventHandler } from "react";

interface childProps {
    direction: number;
    interval: string;
    changeInterval: ChangeEventHandler<HTMLInputElement>;
}

const Text: React.FC<childProps> = (props) => {
    const { direction, interval, changeInterval } = props;
    let value = interval;
    return (
        <div className="textContent">
            <span className="text">
                方向{direction === 1 ? "下" : "上"},时间间隔
            </span>
            <input
                className="input"
                type="text"
                value={value}
                onChange={(e) => changeInterval(e)}
            />
        </div>
    );
};

export default Text;
