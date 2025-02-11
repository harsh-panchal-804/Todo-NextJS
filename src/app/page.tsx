import AddTodo from "@/components/todos/AddTodo";
import Todo from "@/components/todos/Todo";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { prisma } from "@/utils/prisma";
import { Spotlight } from "@/components/ui/Spotlight";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="text-4xl font-extrabold uppercase my-4">
        <TextGenerateEffect
          className="text-4xl font-extrabold uppercase"
          duration={2}
          filter={false}
          words={"A Simple Todo App built in Next.js with Server Actions and Aceternity UI."}
        />
      </div>
      
      <div className="flex justify-center flex-col items-center">
        <AddTodo />

        {/* Glowing Effect Wrapper */}
        <div className="relative flex flex-col gap-6 items-center justify-center mt-10 w-screen">
         
          {data.map((todo, id) => (
            <>
            
            <div className="w-full" key={id}>
              
              <Todo todo={todo} />
            </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
