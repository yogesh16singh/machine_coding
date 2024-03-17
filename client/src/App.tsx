import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="">
      <h1 className="flex justify-center m-5 text-xl font-serif border-2 p-2 rounded-md bg-black text-white ">
        Machine Coding React Js Practice
      </h1>
      <ul className="flex flex-col gap-3 justify-center items-center  bg-slate-300 p-2 m-5">
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`Tictactoe`}>Tic Tac Toe</Link>
        </li>
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`dark`} className="">
            Dark Mode
          </Link>
        </li>
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`progress`}>Progress BAR</Link>
        </li>
        {/* <li className='bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center'>
        <Link to={`counter`}>Counter</Link>
      </li> */}
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`infinite`}>Infinite Scroll</Link>
        </li>
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`fileExplore`}>File Explore</Link>
        </li>
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`chess`}>Chess</Link>
        </li>
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`quiz`}>Quiz</Link>
        </li>
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`imageCaraousal`}>Image Caraousal</Link>
        </li>
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`resizethrottle`}>Throttling</Link>
        </li>
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`otpui`}>Ui for OTP</Link>
        </li>
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`undoredo`}>Undo Redo OP</Link>
        </li>
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`TransferList`}>Transfer List</Link>
        </li>
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`starcomponent`}>Star Component</Link>
        </li>
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`gridlight`}>Grid Lights</Link>
        </li>
        <li className="bg-red-700 rounded-md p-2 text-xl text-white w-1/6 text-center">
          <Link to={`multiSelectSearch`}>Multi Select Search</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
