import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../../store/TodoContext";

export default function AddTodo() {
  const [title, setTitle] = useState<string>("");
  const navigate = useNavigate();
  const { dispatch } = useTodos();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch({ type: "ADD", payload: title });
    navigate("/todos");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={handleChange}
        placeholder="Enter todo title"
      />
      <button type="submit">Add</button>
    </form>
  );
}
