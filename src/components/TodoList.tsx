import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoList({
    todos,
    onCompletedChange,
    onDelete,
}: TodoListProps) {
    const todosSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return b.id - a.id; // Sort by descending ID if both have the same completed status
        }
        return a.completed ? 1 : -1; // Sort uncompleted todos to appear before completed
    });

    return (
        <div className="space-y-2">
            {todosSorted.map(todo => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    onCompletedChange={onCompletedChange}
                    onDelete={onDelete} // Make sure to pass onDelete to TodoItem if it's needed there
                />
            ))}
        </div>
    );
}
