import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (<>
    <ul>
      <li>
        <Link to={`new`}>new</Link>
      </li>
      <li>
        <Link to={`progress`}>Progress BAR</Link>
      </li>
      <li>
        <Link to={`counter`}>Counter</Link>
      </li>
      <li>
        <Link to={`infinite`}>Infinite Scroll</Link>
      </li>
    </ul>
  </>
  )
}

export default App
