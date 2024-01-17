import { useEffect, useRef, useState } from "react";

const ResizeThrottle = () => {
    const [n, setN] = useState(0);
    let isT = useRef(true);
    const handleResize = () => {
        while (isT.current) {

            isT.current = false;
            setN((prev) => prev + 1);
            setTimeout(() => {
                isT.current = true;
                // console.log("resize")

            }, 1000)
        }

    }
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])
    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="bg-black text-white rounded-md">Chess UI</h1>
            <input type="number" value={n} onChange={(e) => setN(+e.target.value)} placeholder="Enter Ns" className=" mt-2 text-center rounded-md border border-black"></input>
            <div className="flex flex-wrap"> {
                Array.from({ length: n }).map((_, index) => {
                    return <div key={index} className="inline-block  h-40 w-28 bg-black m-2 p-4"></div>
                })
            }
            </div>

        </div>

    )
}

export default ResizeThrottle