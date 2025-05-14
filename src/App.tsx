import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Todos from "./pages/Todos/Todos";
import TodoDetail from "./pages/Details/TodoDetails";
import AddTodo from "./pages/AddTodo/AddTodo";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/todos" element={<Todos />}>
          <Route path=":id" element={<TodoDetail />} />
        </Route>

        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </div>
  );
}

export default App;
