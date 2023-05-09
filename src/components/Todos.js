import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "./services/actions/todosActions";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      <h1>Fetching Data Using React-Redux</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      <section>
        {todos &&
          todos.map((todo) => {
            const { id, title } = todo;
            return (
              <article key={id}>
                <h2>{id}</h2>
                <p>{title}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;
