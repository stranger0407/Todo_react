import { useParams } from "react-router-dom";
import { useState } from "react";
import { useTodos } from "../../store/TodoContext";

export default function TodoDetail() {
  const { todos, dispatch } = useTodos();
  const { id } = useParams();
  const todo = todos.find(t => t.id === id);
  const [title, setTitle] = useState(todo?.title || "");

  if (!todo) return <p>Todo not found.</p>;

  const handleDone = () => dispatch({ type: "TOGGLE", payload: todo.id });
  const handleEdit = () => dispatch({ type: "EDIT", payload: { id: todo.id, title } });

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>Created: {todo.createdAt}</p>
      <p>Status: {todo.done ? "Done" : "Pending"}</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDone}>
        {todo.done ? "Mark Undone" : "Mark Done"}
      </button>
    </div>
  );
}
