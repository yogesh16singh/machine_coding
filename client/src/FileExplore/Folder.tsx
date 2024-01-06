import { useState } from 'react'

const Folder = ({ data }: any) => {

    const [info] = useState(data);
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const openFolder = () => {
        if (info.isFolder)
            setExpand(!expand);
        setShowInput(false);

    }
    const newFolder = (e: any) => {
        e.stopPropagation();
        setShowInput(!showInput);
    }
    const newFile = (e: any) => {
        e.stopPropagation();
        setShowInput(!showInput);

    }
    console.log(info);

    return (
        <div className='m-2 pl-2 '>
            <div onClick={() => openFolder()} className={`cursor-pointer flex items-center rounded-md justify-between w-1/3 ${info.isFolder ? "bg-slate-400" : "bg-slate-200"}`} >
                <div className={`p-1  `}>
                    {info.isFolder ? <span>📁</span> : <span>🎞</span>}
                    <span className='pl-2' >{info.name}</span>
                </div>
                <div className='pr-2'>
                    <button onClick={(e) => newFolder(e)} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-1">Folder</button>
                    <button onClick={(e) => newFile(e)} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-1">File</button>
                </div>
            </div>
            {
                showInput && <div>
                    <input type='text' className='ml-4 mt-2 p-1 w-1/3 bg-slate-300 rounded-md' autoFocus ></input>
                </div>
            }
            {info.hasChild && expand &&
                info.child.map((elem: any) => <Folder key={elem.id} data={elem}></Folder>)

            }
        </div>
    )
}

export default Folder