import React from "react";

function TodoItem(props) {
  console.log(props);
  return (
    <li>
      <span>C</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
