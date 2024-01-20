
export default function Historytable({ history }: any) {
    // console.log(history);
    return (
        <table className="bg-slate-400 border-2 ">
            <thead>
                <tr className="text-bold ">
                    <th className="p-2">Operation</th>
                    <th className="p-2">PrevCounter</th>
                    <th className="p-2">CurCounter</th>
                </tr>
            </thead>
            <tbody>
                {history.map((item: any, index: number) => {
                    return (
                        <tr key={index} className={index % 2 == 0 ? "bg-black text-white" : "bg-white"}>
                            <td>{item.operation}</td>
                            <td>{item.prevcounter}</td>
                            <td>{item.curcounter}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
