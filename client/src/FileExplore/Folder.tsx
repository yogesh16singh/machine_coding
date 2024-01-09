import { useState } from 'react'
import useFolder from './useFolder';
const Folder = ({ data }: any) => {

    const [info, setInfo] = useState(data);
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        show: false,
        isFolder: true
    });


    const { useAddNew } = useFolder();
    const addnew = (e: any) => {
        // console.log("ida", ida);

        if (e.keyCode == 13 && e.target.value) {
            const udata = useAddNew(e.target.value, showInput.isFolder, info);
            setInfo(udata);
            setShowInput({ ...showInput, show: false })
        }
    }
    const openFolder = () => {
        if (info.isFolder)
            setExpand(!expand);
        // setShowInput(false);
        setShowInput({ ...showInput, show: false })

    }
    const newFolder = (e: any, isFold: any) => {
        e.stopPropagation();
        setShowInput({ show: !showInput.show, isFolder: isFold })
        // console.log(isFold)
    }

    // console.log(info);

    return (
        <div className='m-1 pl-7 '>
            <div onClick={() => openFolder()} className={`cursor-pointer flex items-center rounded-md justify-between sm:w-2/3 md:w-2/5 lg:w-1/3 ${info.isFolder ? "bg-slate-400" : "bg-slate-200"}`} >
                <div className={`p-1  `}>
                    {info.isFolder ? <span>📁</span> : <span>📄</span>}
                    <span className='pl-2' >{info.name}</span>
                </div>
                {info.isFolder &&
                    <div className='pr-2'>
                        <button onClick={(e) => newFolder(e, true)} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-1">Folder</button>
                        <button onClick={(e) => newFolder(e, false)} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-1">File</button>
                    </div>
                }
            </div>
            {
                showInput.show && <div>
                    {showInput.isFolder ? <span>📁</span> : <span>📄</span>}
                    <input type='text' className='ml-4 mt-2 p-1 w-1/3 bg-slate-300 rounded-md' autoFocus onBlur={() => setShowInput({ ...showInput, show: false })} onKeyDown={(e) => addnew(e)}></input>
                </div>
            }
            {info.hasChild && expand &&
                info.child.map((elem: any) => <Folder key={elem.id} data={elem}></Folder>)

            }
        </div>
    )
}

export default Folder