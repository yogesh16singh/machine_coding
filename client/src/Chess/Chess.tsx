import { useState } from "react"

const Chess = () => {
    const [n, setN] = useState(0);
    return (
        <div className="flex justify-center items-center flex-col">
            <h1>Chess UI</h1>
            <input type="number" value={n} onChange={(e) => setN(+e.target.value)} placeholder="Enter Ns" className=" mt-2 text-center rounded-md border border-black"></input>
            <table className="mt-8">
                <tbody>
                    {
                        Array.from({ length: n }).map((_, row) => {
                            return <tr key={row}>
                                {Array.from({ length: n }).map((_, col) => {
                                    return <td key={col} className={`${(row + col) % 2 == 0 && "bg-black"} border-2 border-black w-10 h-10`}>h</td>
                                })}
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Chess