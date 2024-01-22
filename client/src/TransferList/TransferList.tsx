import { useState } from "react"
import List from "./List"

const TransferList = () => {
    const [listA, setListA]: any = useState({
        "HTML": true,
        "CSS": false
    })
    const [listB, setListB]: any = useState({
        "Java": true,
        "Python": false
    })

    const hasNoSelected = (list: any) => {
        for (let key in list) {
            if (list[key] == true)
                return false;
        }
        return true
    }

    const transfer = (from: any, setfrom: any, to: any, setto: any) => {
        const fromlist = { ...from };
        const tolist = { ...to };
        for (let key in from) {
            if (from[key] == true) {
                tolist[key] = from[key];
                delete fromlist[key]

            }
        }
        // console.log(fromlist);
        // console.log(tolist);
        setto(tolist)
        setfrom(fromlist)
    }

    return (
        <div className="flex flex-col items-center mt-2 ">
            <div className="p-2 rounded-lg text-2xl bg-black text-white">Transfer List</div>
            <div className="flex mt-4 justify-around">
                <div className="mx-14 w-36">
                    <List list={listA} setList={setListA}></List>
                </div>
                <div className="flex flex-col">
                    <button onClick={() => {
                        transfer(listB, setListB, listA, setListA)
                    }}
                        disabled={hasNoSelected(listB)} className="border border-black bg-slate-400 m-2">
                        {"<"}</button>
                    <button onClick={() => {
                        setListA({ ...listA, ...listB })
                        setListB({})
                    }}
                        disabled={Object.keys(listB).length == 0}
                        className="border border-black bg-slate-400 m-2">
                        {"<<"}
                    </button>
                    <button
                        onClick={() => {
                            transfer(listA, setListA, listB, setListB)
                        }}
                        disabled={hasNoSelected(listA)} className="border border-black bg-slate-400 m-2">{'>'}</button>
                    <button onClick={() => {
                        setListB({ ...listB, ...listA })
                        setListA({})
                    }}
                        disabled={Object.keys(listA).length == 0}
                        className="border border-black bg-slate-400 m-2">
                        {">>"}
                    </button>
                </div>
                <div className="mx-14 w-32">
                    <List list={listB} setList={setListB}></List>
                </div>
            </div>
        </div>
    )
}

export default TransferList