import { useSelector, useDispatch } from "react-redux";



function App() {
  const dispatch = useDispatch();
  
  
  const { value } = useSelector(state => state.value);
  const { counter } = useSelector(state => state.count);

  const addVal = () => {
    dispatch(
      {
        type: 'increment'
      }
    )
  };
  const subVal = () => {
    dispatch(
      {
        type: 'decrement'
      }
    )
  };
  const resetVal = () => {
    dispatch(
      {
        type: 'reset'
      }
    )
  }
  const pushBtn = () => {
    dispatch(
      {
        type: 'push'
      }
    )
  };

  return (
    <div>
      <h1>
        value = {value}
      </h1>
      <button onClick={addVal}>더하기</button>
      <button onClick={subVal}>빼기</button>
      <button onClick={resetVal}>다시하기</button>
      <div>
        값 = {counter}
      </div>
      <button onCLcik={pushBtn}>clcik me</button>
    </div>
  );
}

export default App;
