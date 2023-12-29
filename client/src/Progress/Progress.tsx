import { useState } from "react"

const Progress = () => {
    const [percent, setPercent] = useState(0);
    return (
        <div className="flex justify-center flex-col items-center gap-2 m-4">
            <h1>Progress Bar</h1>
            <div className="w-80 h-8 bg-slate-300">
                <div className={`w-[${percent}%] h-8 bg-blue-800`}></div>
            </div>
            <div className="flex gap-16">
                <button className="border-2 p-1 border-black rounded-md" onClick={() => {
                    setPercent(percent == 0 ? 0 : percent - 25);
                }}>prev</button>
                <button className="border-2 p-1 border-black rounded-md" onClick={() => {
                    setPercent(percent == 100 ? 100 : percent + 25);
                }}>next</button>
            </div>
        </div>
    )
}

export default Progress