import { useEffect, useState } from "react";
import { dummyData } from "./data/todo";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/AddTodoSumary";

function App() {
const [todos, setTodos] = useState(()=>{
  const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
  return savedTodos.length > 0 ? savedTodos: dummyData;
})


useEffect(() => {
localStorage.setItem("todos",JSON.stringify(todos));
}, [todos])

  function setTodoCompleted(id: number, completed: boolean){
  setTodos((prevTodos) => prevTodos.map(todo => (
    todo.id === id ? {...todo, completed} : todo
  )))
  }

  function addTodo(title:string){
    setTodos(prevTodos => [
      {
        id:prevTodos.length+1,
        title,
        completed:false
      },
      ...prevTodos
    ]);
  }

  function deleteAllCompletedTodos(){
    setTodos(prevTodos => prevTodos.filter(todo =>!todo.completed));
  }
 

  function deleteTodo(id:number){
    setTodos(prevTodos => prevTodos.filter(todo =>todo.id !== id))
  }
  return (
    <main className="py-10  h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center"> Todo list</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5  space-y-6">
       <AddTodoForm
       onSubmit={addTodo}/>
       <TodoList
       todos={todos}
       onCompletedChange={setTodoCompleted}
       onDelete={deleteTodo}/>
       
      </div>
      <TodoSummary 
      todos={todos}
      deleteAllCompleted={(deleteAllCompletedTodos)}/>
    </main>
  )
}

export default App;
