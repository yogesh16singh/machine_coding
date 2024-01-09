import { useState } from "react";
import { root } from "./data"
import Folder from "./Folder";

const FileExplore = () => {
    const [udata] = useState(root)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-3 text-orange-500">File Explorer</h1>
            <div>
                <Folder data={udata}></Folder>
            </div>
        </div>
    )
}

export default FileExplore