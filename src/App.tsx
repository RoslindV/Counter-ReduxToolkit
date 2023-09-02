import type { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  decrementByAmount,
  incrementByAmount,
} from "./redux/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>
        <label>Increment By Amount: </label>
        <input
          type="number"
          placeholder="Enter a number"
          onChange={(event) =>
            dispatch(incrementByAmount(Number(event.target.value)))
          }
        />
      </div>
      <div>
        <label>Decrement By Amount: </label>
        <input
          type="number"
          placeholder="Enter a number"
          onChange={(event) =>
            dispatch(decrementByAmount(Number(event.target.value)))
          }
        />
      </div>
    </div>
  );
}

export default App;
