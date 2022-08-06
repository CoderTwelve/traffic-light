import React, { ChangeEventHandler, useEffect, useState } from "react";
import TrafficSignalLight from "./component/TrafficSignalLight";
import Text from "./component/Text";
import ControlButton from "./component/ControlButton";
import ReplaceWhiteSpace from "./component/ReplaceWhiteSpace";

let timer: string | number | NodeJS.Timeout | undefined = "";

const App = () => {
    const [color, setColor] = useState(1);
    const [status, setStatus] = useState(false);
    const [direction, setDirection] = useState(1);
    const [timeInterval, setTimeInterval] = useState("1");
    const [temp, setTemp] = useState(2);

    const changeColor = () => {
        if (color === 3) {
            setColor(color - 1);
            setTemp(1);
        } else if (color === 1) {
            setColor(color + 1);
            setTemp(3);
        } else if (color === 2 && direction === 1) {
            setColor(color + 1);
        } else if (color === 2 && direction === 0) {
            setColor(color - 1);
        }
    };

    const changeStatus = () => {
        clearTimeout(timer);
        setStatus(!status);
    };

    const changeDirection = () => {
        if (temp === 1) {
            setDirection(1);
        }
        if (temp === 3) {
            setDirection(0);
        }
    };

    const changeInterval: ChangeEventHandler<HTMLInputElement> = (e) => {
        setTimeInterval(e.target.value);
        if (!e.target.value) {
            setStatus(false);
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (status) {
            timer = setTimeout(() => {
                changeDirection();
                changeColor();
            }, parseInt(timeInterval) * 1000) as any;
        }
    });

    return (
        <div>
            <TrafficSignalLight color={color} />
            <ControlButton status={status} changeStatus={changeStatus} />
            <Text
                direction={direction}
                interval={timeInterval}
                changeInterval={changeInterval}
            />
            <div>空格替换输出结果：{ReplaceWhiteSpace}</div>
        </div>
    );
};

export default App;
