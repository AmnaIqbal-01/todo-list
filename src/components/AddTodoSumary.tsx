interface TodoSummaryProps {
    todos: Todos[];                   // Ensure 'Todo' is defined and use correct case
    deleteAllCompleted: () => void;  // Correct syntax error in type declaration
}

export default function TodoSummary({
    todos,
    deleteAllCompleted
}: TodoSummaryProps) {
    const completedTodos = todos.filter(todo => todo.completed); // Corrected assignment and method call
    return (
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                {completedTodos.length}/{todos.length} todos completed
            </p>
            {completedTodos.length > 0 && (
                <button
                    onClick={deleteAllCompleted}
                    className="text-red-500 hover:underline text-sm font-medium">
                    Delete All Completed Todos
                </button>
            )}
        </div>
    );
}
