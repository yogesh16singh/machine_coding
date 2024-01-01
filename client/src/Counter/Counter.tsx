import { useState } from "react"

const Counter = () => {
    const [time, setTime] = useState({
        hour: "00",
        min: "00",
        sec: "00"
    })

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        const newtime = { ...time, [name]: value }
        setTime(newtime);
    }
    let timi: any;
    const starttimer = () => {
        timi = setInterval(() => {
            countdown();
        }, 1000)
    }
    const countdown = () => {
        if (time.hour == "00" && time.min == "00" && time.sec == "00")
            return;
        else
            if (time.min != "00" && time.sec == "00")
                setTime((prev) => {
                    const newMin = String(+prev.min - 1).padStart(2, '0');
                    return { ...prev, min: newMin, sec: "60" };
                });
            else
                // if (time.min == 0 && time.hour != 0) {
                //     setTime((prev) => {
                //         return { ...prev, hour: +(prev.hour - 1), min: 60 }
                //     });
                // }
                // else
                setTime((prev) => {
                    const newSec = String(+prev.sec - 1).padStart(2, '0');
                    return { ...prev, sec: newSec };
                });


        console.log("time", time);
    }

    const stopTimer = () => {
        clearInterval(timi);
    }
    return (
        <div className="flex justify-center flex-col items-center gap-2 m-4">
            <h1>Count Down APP</h1>
            <div className="flex flex-row w-80 justify-between bg-slate-300">
                <div>Hours</div>
                <div>Minutes</div>
                <div>Seconds</div>
            </div>
            <div className="flex flex-row w-80 justify-between bg-slate-300">
                <input type="text" value={time.hour} className="w-8" name="hour" onChange={(e) => handleChange(e)}></input>
                <input type="text" value={time.min} className="w-8" name="min" onChange={(e) => handleChange(e)}></input>
                <input type="text" value={time.sec} className="w-8" name="sec" onChange={(e) => handleChange(e)}></input>
            </div>
            <div className="flex gap-16 bg-slate-400">
                <button className="border-2 p-1 border-black rounded-md" onClick={() => {
                    starttimer()
                }}>Start</button>
                <button className="border-2 p-1 border-black rounded-md" onClick={() => {
                    stopTimer()
                }}>Stop</button>
                <button className="border-2 p-1 border-black rounded-md" onClick={() => {

                }}>Restart</button>
            </div>
        </div>
    )
}

export default Counter