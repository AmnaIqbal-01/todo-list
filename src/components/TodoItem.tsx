import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void; // Ensure this prop is defined in the interface
}

export default function TodoItem({ todo, onCompletedChange, onDelete }: TodoItemProps) {
    return (
        <div className="flex items-center gap-1"> {/* Corrected typo from "itens" to "items" */}
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                    className="scale-125"
                />
                <span className={todo.completed ? "line-through text-gray-400" : ""}>
                    {todo.title}
                </span>
            </label>
            <button onClick={() => onDelete(todo.id)} // Fixed the syntax error in onClick handler
                className="p-2">
                <Trash2 size={20} className="text-gray-500" /> {/* Corrected typo from "test-gray-500" to "text-gray-500" */}
            </button>
        </div>
    );
}
