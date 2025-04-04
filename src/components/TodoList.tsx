import { useQuery } from "@tanstack/react-query";
import React from "react";
import TodoItem from "./TodoItem";

export type Todos = {
  id: string;
  title: string;
  contents: string;
  isCompleted: boolean;
  imgPath: string;
  createdAt: number;
};

const TodoList = () => {
  const {
    data: todos,
    isPending,
    error,
  } = useQuery<Todos[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:4000/todos`);
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }

      return await response.json();
    },
  });

  if (isPending) {
    return (
      <div style={{ fontSize: 36 }}>
        <p>로딩중...</p>
      </div>
    );
  }

  if (error) {
    console.error(error);
    return (
      <div style={{ fontSize: 24 }}>에러가 발생했습니다: {error.message}</div>
    );
  }

  return (
    <>
      <ul style={{ listStyle: "none", width: 250 }}>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </>
  );
};

export default TodoList;
