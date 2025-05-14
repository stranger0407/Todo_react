import { Link, Outlet, useSearchParams } from "react-router-dom";
import TodoStats from "../../components/TodoStat/TodoStats";
import { useTodos } from "../../store/TodoContext";

export default function Todos() {
  const { todos } = useTodos();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const filtered = todos.filter(todo =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '1rem' }}>
      <TodoStats count={filtered.length} />

      <input
        type="text"
        placeholder="Search todos..."
        value={query}
        onChange={(e) => setSearchParams({ q: e.target.value })}
      />

      <ul>
        {filtered.map(todo => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title} {todo.done && "(done)"}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}
