"use client";

import { todoProps } from "@/types";
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const Todo = ({ todo }: { todo: todoProps }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted ? "line-through" : "none",
    opacity: todo.isCompleted ? 0.5 : 1,
  };

  return (
    <div className="relative w-10/12 mx-auto">
      {/* Container that holds the glow effect and the todo content */}
      <div className="relative rounded-2xl  border p-2">
        {/* Glowing effect as a sibling; it will render behind/around the content */}
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        {/* Actual todo content */}
        <div
          style={todoStyle}
          className="flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl"
        >
          <ChangeTodo todo={todo} />
          <span className="text-center font-bold uppercase grow">
            {todo.title}
          </span>
          <div className="flex items-center mx-2">
            <EditTodo todo={todo} />
          </div>
          <div className="flex items-center">
            <DeleteTodo todo={todo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
