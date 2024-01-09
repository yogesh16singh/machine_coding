const useFolder = () => {
    const useAddNew = (name: string, folder: boolean, info: any) => {

        const newobj = {
            id: new Date,
            name: name,
            isFolder: folder,
            hasChild: false,
            child: []
        }
        info.hasChild = true;
        info.child.unshift(newobj);


        return info;
    }


    return { useAddNew };
}

export default useFolder;