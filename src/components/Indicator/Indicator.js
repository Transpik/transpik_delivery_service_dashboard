import React from "react";

function Indicator(props) {
    
    return (
        <div className="fixed top-4 flex justify-center">
            <div className="bg-white w-28 p-5 rounded-lg">
                <div>{props.message}</div>
            </div>
        </div>
        
    );
}

export default Indicator;