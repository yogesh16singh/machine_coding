import { useState } from "react";
import Historytable from "./Historytable";

export default function Opundoredo() {
    const [counter, setCounter] = useState(1);
    const [history, setHistory]: any = useState([]);
    const [redohistory, setRedohistory]: any = useState([]);
    let newcounter = 0;
    const calculate = (operation: any) => {
        switch (operation) {
            case "*2":
                newcounter = counter * 2;
                break;
            case "-1":
                newcounter = counter - 1;
                break;
            case "+1":
                newcounter = counter + 1;
                break;
            case "/2":
                newcounter = counter / 2;
                break;
        }
    };
    const updateHistory = (prevcounter: any, operation: any) => {
        setHistory(() => [
            {
                operation: operation,
                prevcounter: prevcounter,
                curcounter: newcounter,
            },
            ...history,
        ]);
        setRedohistory([]);
    };
    const clickoperation = (operation: any) => {
        const prevcounter = counter;
        calculate(operation);
        updateHistory(prevcounter, operation);
        setCounter(newcounter);
    };
    const resetcounter = () => {
        setHistory([]);
        setRedohistory([]);
        setCounter(0);
    };
    const opundo = () => {
        const [latest, ...remaining] = history;
        setCounter(latest.prevcounter);
        setRedohistory([latest, ...redohistory]);
        setHistory(remaining);
    };
    const opredo = () => {
        const [latest, ...remaining] = redohistory;
        setCounter(latest.curcounter);
        setHistory([latest, ...history]);
        setRedohistory(remaining);
    };
    return (
        <div className="text-center m-2">
            <div className="m-2">
                <button className="p-1 m-1 bg-black text-white rounded hover:text-blue-800" onClick={opundo} disabled={history.length == 0}>
                    Undo
                </button>
                <button className="p-1 m-1 bg-black text-white rounded hover:text-blue-800" onClick={opredo} disabled={redohistory.length == 0}>
                    Redo
                </button>
                <button className="p-1 m- bg-black text-white rounded hover:text-blue-800" onClick={resetcounter}>Reset</button>
            </div>
            <hr />
            <div>
                <button className="p-2 m-1 bg-black text-white rounded hover:text-blue-800" onClick={() => clickoperation("*2")}>*2</button>
                <button className="p-2 m-1 bg-black text-white rounded hover:text-blue-800" onClick={() => clickoperation("-1")}>-1</button>
                <span className="m-2 text-2xl text-teal-800">{counter}</span>
                <button className="p-2 m-1 bg-black text-white rounded hover:text-blue-800" onClick={() => clickoperation("+1")}>+1</button>
                <button className="p-2 m-1 bg-black text-white rounded hover:text-blue-800" onClick={() => clickoperation("/2")}>/2</button>
            </div>
            <hr />
            <div className="flex justify-center m-2">
                {history.length > 0 && <Historytable history={history}></Historytable>}
            </div>
        </div>
    );
}
