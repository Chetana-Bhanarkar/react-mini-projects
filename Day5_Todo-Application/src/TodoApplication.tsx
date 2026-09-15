import { useState } from "react";

interface Todo {
    id: number,
    title: string,
    status: boolean
}

const TodoApplication = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [title, setTitle] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);


    const addTodo = () => {
        setLoading(true);
        if (!title.trim()) {
            setError(true);
            setLoading(false);
            return;
        }

        setError(false);
        setLoading(false);
        
        let newTodo: Todo = {
            id: Date.now(),
            title: title.trim(),
            status: false
        }

        setTodos((prev) => ([
            ...prev,
            newTodo
        ]));
        setTitle('')
        console.log(todos)
    }


    const DeleteTodoItem = (id: number) => {
        setTodos((todos) => todos.filter((prev) => prev.id !== id));
    }

    const toggleTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) => todo.id === id ?
                {
                    ...todo,
                    status: !todo.status
                }
                :
                todo
            )
        )
    }

    return (
        <>
            <div className="min-h-screen ">
                <div className="flex justify-center mt-5 gap-3">
                    <input
                        type="text"
                        placeholder="Enter your todo"
                        value={title}
                        className="min-w-md border border-blue-300 p-2 rounded outline-none focus:ring-2 focus:ring-blue-300"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <button className="border border-blue-500 bg-blue-200 outline-none px-5 rounded"
                        onClick={addTodo}
                    >Add</button>
                </div>
                {
                    error && (
                        <p className="text-red-400 text-center">Enter your todo before adding</p>
                    )
                }

                {
                    !loading ? (
                        todos.length > 0 ?
                            (
                                <div className="flex justify-center mt-8">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                todos.map((item, index) => (
                                                    <tr key={item.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.title}</td>
                                                        <td>{item.status ? 'Completed' :
                                                            <button
                                                                className="bg-gray-200 p-2 rounded-lg"
                                                                onClick={() => toggleTodo(item.id)}>Turn to Completed</button>
                                                        }</td>
                                                        <td>
                                                            <button
                                                                className="bg-gray-200 p-2 rounded-lg"
                                                                onClick={() => DeleteTodoItem(item.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            ) :
                            (
                                <div className="flex justify-center mt-8">
                                    <p>No todos found</p>
                                </div>
                            )
                    ) :
                        (
                            <p className="text-center">Loading...</p>
                        )
                }
            </div>
        </>
    )
};

export default TodoApplication; 