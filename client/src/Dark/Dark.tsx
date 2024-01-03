import { useState } from "react"

const Dark = () => {
    const [isDark, setIsdark] = useState(false);

    return (
        <div>
            <div className={`${isDark ? "bg-black" : "bg-white"}  flex justify-center`}>
                <h1 className={` ${isDark ? "bg-white" : "bg-black text-white"} h-full`}>Dark</h1>
            </div>
            <button onClick={() => setIsdark(!isDark)}>Change Theme</button>
        </div>
    )
}

export default Dark