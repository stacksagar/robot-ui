import axios from "axios";
import React, { useEffect } from "react";

export const LearnHooks = () => {
  const [lists, setLists] = React.useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setLists([...res.data]);
    });
  }, []);
  console.log(lists);
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="bg-dark text-light p-5 text-center"
    >
      <ul>
        {lists.map((list) => (
          <li key={list.id}>{list.title}</li>
        ))} 
      </ul>
    </div>
  );
};
