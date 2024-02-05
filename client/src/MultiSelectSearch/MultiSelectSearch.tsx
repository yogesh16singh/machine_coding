import { useEffect, useRef, useState } from "react";
const MultiSelectSearch = () => {
    const inputref: any = useRef(null);
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser]: any = useState([]);
    const [selectedUserSet, setSelectedUserSet] = useState(new Set());
    inputref.current?.focus();
    const fetchusers = () => {
        fetch(`https://dummyjson.com/users/search?q=${search}`)
            .then((res) => res.json())
            .then((data) =>
                setUsers(
                    data.users.filter((user: any) => {
                        return !selectedUserSet.has(user.id);
                    })
                )
            );
    };
    const handleClick = (user: any) => {
        if (selectedUserSet.has(user.id)) return;
        setSelectedUserSet(selectedUserSet.add(user.id));
        if (selectedUser) {
            setSelectedUser([...selectedUser, user]);
        }
        fetchusers();
        inputref.current?.focus();
    };
    const remove = (id: any) => {
        const set = new Set(selectedUserSet);
        set.delete(id);
        setSelectedUserSet(set);
        setSelectedUser(selectedUser.filter((user: any) => user.id !== id));
    };
    const handleKey = (e: any) => {
        if (e.key === "Backspace" && search === "" && selectedUser.length > 0) {
            const id = selectedUser[selectedUser.length - 1].id;
            remove(id);
        }
    };

    useEffect(() => {
        if (search !== "") {
            fetchusers();
        }
    }, [search]);
    console.log(selectedUser);
    return (
        <div className="flex flex-col items-center m-4">
            <h1 className="bg-black text-white p-3 rounded-lg m-4">Multi Select Search</h1>
            <div className="flex flex-wrap border border-black overflow-auto rounded-lg min-h-10 min-w-80">
                {selectedUser?.map((user: any) => (
                    <div className="flex border rounded-xl p-1 m-1 bg-gray-200 hover:bg-red-300 cursor-pointer" key={user.id} onClick={() => remove(user.id)}>
                        <img className=" w-8 p-1" src={user.image} alt="user.firstName" />
                        {user.firstName} {user.lastName}
                    </div>
                ))}
                <input
                    className="outline-none p-2 font-serif"
                    ref={inputref}
                    value={search}
                    onKeyDown={(e) => handleKey(e)}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {search !== "" &&
                <div className="border h-64 overflow-y-scroll w-80">
                    {
                        users.map((user: any) => (
                            <div className="flex p-1 cursor-pointer hover:bg-slate-400" key={user.id} onClick={() => handleClick(user)}>
                                <img className="w-8 p-1" src={user.image} alt="" />
                                {user.firstName} {user.lastName}
                            </div>
                        ))}
                </div>
            }
        </div>
    );
};
export default MultiSelectSearch;
