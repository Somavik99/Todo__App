import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Decrement,
  Increment,
  IncrementAsync,
  IncrementByTimes,
  ResetValue,
  TotalCounts,
} from "../features/Couunter/CounterSlice";

const CounterApp = () => {
  const Counts = useSelector(TotalCounts);
  const dispatch = useDispatch();

  const [IncrementBy, setIncrementBy] = useState("2");

  return (
    <>
      <div className="flex justify-center align-middle items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mt-8">Counter App</h1>
          <div className="text-3xl  mt-8">
            Count:
            <span className="text-[80px] rounded h-8 hover:text-violet-400">
              {Counts}
            </span>
          </div>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(Increment())}
              className="border-[2px] mr-4 p-[2px] w-10 bg-slate-300 rounded-[8px] hover:border-blue-500 "
            >
              +
            </button>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(Decrement())}
              className="border-[2px] mr-4 p-[2px] w-10 bg-slate-300 rounded-[8px] hover:border-blue-500"
            >
              -
            </button>
            <div>
              <input
                type="text"
                className="bg-slate-200 text-center text-[20px] h-10 w-[5vw] mr-3 border-[2px] rounded-[8px] hover:border-blue-500"
                aria-label="Set increment amount"
                value={IncrementBy}
                onChange={(e) => setIncrementBy(e.target.value)}
              />
              <button
                onClick={() =>
                  dispatch(IncrementByTimes(Number(IncrementBy) || 0))
                }
                className="h-10 border-[2px] mr-4 p-[2px] w-56 mt-8 bg-slate-300 rounded-[8px] hover:border-blue-500"
              >
                Add Amount
              </button>
              <button
                onClick={() =>
                  dispatch(IncrementAsync(Number(IncrementBy) || 0))
                }
                className="h-10 border-[2px] mr-4 p-[2px] w-56 mt-8 bg-slate-300 rounded-[8px] hover:border-blue-500"
              >
                Add Delay Amount
              </button>
            </div>
            <div>
              <button onClick={()=>dispatch(ResetValue())} className="h-10 border-[2px] mr-4 p-[2px] w-56 mt-8 bg-slate-300 rounded-[8px] hover:border-blue-500">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterApp;
