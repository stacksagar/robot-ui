import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const UseRedux = () => {
  const dispatch = useDispatch();
 const vall = useSelector((state) => state.Reducers.count);
 
 const headline = useSelector(state=>state.Reducers.headline) 
  return (
    <div>
      <h3>Incress is {vall}</h3>
      <button onClick={() => dispatch({ type: 'increment', count: 1 })}> Increment</button> 
      <button onClick={() => dispatch({ type: 'decrement', count: 1 })}> Decrement</button> 
      <h3>{headline}</h3>
      <button onClick={()=> dispatch({type:'changeHeadline',headline:'Headline Changed!'})} >Change Headline</button>
    </div>
  );
};

export default UseRedux;
