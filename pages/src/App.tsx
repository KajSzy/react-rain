import * as React from "react";
import { Rain } from "./component-lib";

const maxRainElementsCount = 150;

const App = () => {
    const [rainNumber, setRainNumber] = React.useState(10);

    function addRainElement() {
        if (rainNumber <= maxRainElementsCount) {
            setRainNumber(rainNumber + 1);
        }
    }

    function removeRainElement() {
        if (rainNumber > 1) {
            setRainNumber(rainNumber - 1);
        }
    }

    return (
        <div className="App">
            <div>
                <button
                    disabled={rainNumber >= maxRainElementsCount}
                    onClick={addRainElement}
                    style={{ margin: "0 8px" }}
                >
                    Add rain element
                </button>
                <button
                    disabled={rainNumber <= 1}
                    onClick={removeRainElement}
                    style={{ margin: "0 8px" }}
                >
                    Remove rain element
        </button>
            </div>
            <hr />
            <div>
                Current raining elements: {rainNumber}
            </div>
            {new Array(rainNumber).fill("").map((el, index) => (
                <Rain key={index} />
            ))}
        </div>
    );
};

export default App;
