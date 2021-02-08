import React from "react";

const Button = ({ func, count }) => {
  console.log("rendering ", count );
  return (
    <button onClick={func} className="btn btn-primary">
      Increment {count}
    </button>
  );
};

export default React.memo(Button);