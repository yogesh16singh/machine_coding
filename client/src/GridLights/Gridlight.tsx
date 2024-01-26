import { useState } from "react";
const GridLight = () => {
    const config = [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
    ];
    const [activated, setActivated]: any = useState([]);
    const [isdeactivating, setIsdeactivating] = useState(false);
    const activateCell = (index: any) => {
        if (activated.indexOf(index) == -1) {
            const newarr = [...activated, index];
            setActivated(newarr);
            console.log(newarr);
        }
        deactivate();
    };
    const deactivate = () => {
        // console.log(activated.length);
        if (
            activated.length + 1 ==
            config.flat(1).filter((item) => item == 1).length
        ) {
            setIsdeactivating(true);
            const timer = setInterval(() => {
                setActivated((cur: any) => {
                    const newcur = [...cur];
                    newcur.pop();
                    if (newcur.length == 0) {
                        clearInterval(timer);
                        setIsdeactivating(false);
                    }
                    return newcur;
                });
            }, 500);
        }
    };

    return (
        <div className="flex flex-col m-2 items-center">
            <h1 className="bg-green-700 rounded-lg text-white p-2 m-2">Grid Lights</h1>
            <div className="w-52 grid grid-cols-3  ">
                {config.flat(1).map((item, index) => {
                    if (item == 1)
                        return (
                            <button
                                key={index}
                                onClick={() => activateCell(index)}
                                disabled={isdeactivating}
                                className={activated.indexOf(index) == -1 ? "border bg-slate-400 aspect-square" : "border bg-green-600 aspect-square"}
                            ></button>
                        );
                    else return <div key={index}></div>;
                })}
            </div>
        </div>
    );
};
export default GridLight;
