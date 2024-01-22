
const List = ({ list, setList }: any) => {
    return (
        <div className="m-4">
            {Object.keys(list).map((item) => (
                <div key={item} >
                    <input type="checkbox" name="check" id={item} checked={list[item]} onChange={() => setList({ ...list, [item]: !list[item] })} />
                    <label className="ml-2" htmlFor={item}>{item}</label>
                </div>
            ))}
        </div>
    )
}

export default List