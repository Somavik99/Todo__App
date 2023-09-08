import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    Increment: (state) => {
      state.value += 1;
    },
    Decrement: (state) => {
      state.value -= 1;
    },
    IncrementByTimes: (state, action) => {
      state.value += action.payload;
    },
    ResetValue: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Increment, Decrement, IncrementByTimes, ResetValue } =
  CounterSlice.actions;

export const IncrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(IncrementByTimes(amount));
  }, 1000);
};

export const TotalCounts = (state) => state.Counter.value;

export default CounterSlice.reducer;
