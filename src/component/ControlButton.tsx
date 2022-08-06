import React from "react";

interface childProps {
    status: boolean;
    changeStatus: () => void;
}

const ControlButton: React.FC<childProps> = (props) => {
    const { status, changeStatus } = props;
    return (
        <div>
            <button className="CButton" onClick={(e) => changeStatus()}>
                {status ? "暂停" : "开始"}
            </button>
        </div>
    );
};

export default ControlButton;
