import { useState } from "react";

export default function Tictactoe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [curplayer, setCurPlayer] = useState("X");
    const winState = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const handleclick = (curindex: any) => {
        const newBoard = [...board];
        newBoard[curindex] = curplayer;
        setBoard(newBoard);
        setCurPlayer(curplayer == "X" ? "0" : "X");
    };
    const checkwinstate = () => {
        for (let i in winState) {
            const [x, y, z] = winState[i];
            if (board[x] != null && board[x] == board[y] && board[y] == board[z])
                return board[x];
        }
        return null;
    };
    const playerwin = checkwinstate();
    const checkStatus = () => {
        if (playerwin != null) return `Player ${playerwin} wins`;
        else return `Player ${curplayer} chance`;
    };

    return (
        <div className="flex flex-col items-center m-4">
            <div>
                <h1 className="font-bold text-3xl p-2">{checkStatus()}</h1>
            </div>
            <div className="bg-blue-400 grid w-1/3 grid-cols-3">
                {Array.from({ length: 9 }).map((_, curindex) => {
                    return (
                        <button
                            key={curindex}
                            onClick={() => handleclick(curindex)}
                            className="border font-bold text-7xl aspect-square hover:cursor-pointer"
                            disabled={playerwin != null || board[curindex] != null}
                        >
                            {board[curindex]}
                        </button>
                    );
                })}
            </div>
            <div>
                <button
                    onClick={() => {
                        setBoard(Array(9).fill(null));
                    }}
                    className="p-2 text-2xl border border-black rounded-md m-2"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
