import { Link } from "react-router-dom";

export default function(){
    return( <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', borderBottom: '1px solid gray' }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/add">Add Todo</Link>
    </nav>)
}