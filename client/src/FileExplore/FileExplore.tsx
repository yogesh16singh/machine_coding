import { root } from "./data"
import Folder from "./Folder";

const FileExplore = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-3 text-orange-500">File Explorer</h1>
            <Folder data={root}></Folder>
        </div>
    )
}

export default FileExplore