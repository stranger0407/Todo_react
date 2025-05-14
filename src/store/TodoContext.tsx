import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
} from "react";
import { v4 as uuidv4 } from "uuid";

// Define Todo type
export interface Todo {
  id: string;
  title: string;
  done: boolean;
  createdAt: string;
}

// Define Action type
type Action =
  | { type: "ADD"; payload: string }
  | { type: "TOGGLE"; payload: string }
  | { type: "EDIT"; payload: { id: string; title: string } };

// Initial state
const initialState: Todo[] = [];

// Reducer function
function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.payload,
          done: false,
          createdAt: new Date().toLocaleString(),
        },
      ];
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "EDIT":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    default:
      return state;
  }
}

// Define context type
interface TodoContextType {
  todos: Todo[];
  dispatch: Dispatch<Action>;
}

// Create context with undefined default
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Provider component
export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

// Hook to use context
export const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};
