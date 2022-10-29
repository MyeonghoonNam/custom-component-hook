import useAsync from '@hooks/useAsync';
import axios from 'axios';
import { useState } from 'react';

export default {
	title: 'Hooks/useAsync',
};

interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

const getTodos = async () => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/todos',
	);

	return response.data;
};

const getTodo = async (id: number) => {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/todos/${id}`,
	);

	return response.data;
};

export function Default() {
	const [userId, setUserId] = useState<number>(1);

	const [todos, loadingTodos, errorTodos] = useAsync<Todo[]>(getTodos, []);
	const [todo, loadingTodo, errorTodo] = useAsync<Todo>(
		() => getTodo(userId),
		[userId],
	);

	if (errorTodos || errorTodo) return <div>에러가 발생했습니다</div>;

	return (
		<div>
			{loadingTodos ? (
				<div>로딩 중...</div>
			) : (
				<ul>
					{todos?.map((todo: Todo) => (
						<li key={todo.id} onClick={() => setUserId(todo.id)}>
							{todo.title} ({todo.userId})
						</li>
					))}
				</ul>
			)}

			{loadingTodo ? (
				<div>세부 로딩 중...</div>
			) : (
				<div>{JSON.stringify(todo)}</div>
			)}
		</div>
	);
}
