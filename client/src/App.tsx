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
    </ul>
  </>
  )
}

export default App
