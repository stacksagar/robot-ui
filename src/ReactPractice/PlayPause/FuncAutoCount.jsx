import React from "react";

const FuncAutoCount = () => {
  const [count, setCount] = React.useState(0);
  const isCounting = React.useRef(true);
  const intervalRef = React.useRef();

  const interval = () => {
    if (isCounting.current) {
      intervalRef.current = setInterval(() => {
        setCount((previous) => previous + 1);
      }, 500);
    }
  };

  const clear = () => {
    clearInterval(intervalRef.current);
    isCounting.current = true;
  };

  const play = () => {
    interval();
    isCounting.current = false;
  };

  React.useEffect(() => {
    interval();
    isCounting.current = false;
  }, []);
  return (
    <div className="bg-dark p-5 d-flex flex-column justify-content-center align-items-center"    >
      <h4 className="mb-3 text-info">This is (Function) Comnponent</h4>
      <h4 className="text-light">
        Value is <strong className="text-warning">{count}</strong>
      </h4>
      <div>
        <button onClick={clear} className="btn btn-warning btn-lg m-1">
          Pause
        </button>
        <button onClick={play} className="btn btn-warning btn-lg m-1">
          Play
        </button>
      </div>
    </div>
  );
};

export default FuncAutoCount;
