import React, { useEffect } from "react";

export const First = () => {
  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("Remove First");
    };
  });

  return (
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
      numquam quas, doloribus alias quos consectetur magnam, fugiat neque
      voluptas qui rem necessitatibus? Sint fugit fugiat dolores mollitia cum
      quae? Quia!
    </h1>
  );
};
