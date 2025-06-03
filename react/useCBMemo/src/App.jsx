// Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter
// as well as three functions to increment, decrement and reset the counter. Use the useCallback to memoize the functions used
//  to increment, decrement and reset the counter.
// Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop.
// The FilteredList component should render only the items of the list whose age is greater than 18, and the filtering
// should only happen when the list changes. Use useMemo to memoize the filtered list.

import useCounter from "./useCounter";
import "./App.css";
import FilteredList from "./FilteredList";

export default function App() {
  const { counter, increment, decrement, reset } = useCounter(0);
  const users = [
    {
      id: 1,
      name: "Jack",
      age: 14,
    },
    {
      id: 2,
      name: "Rose",
      age: 30,
    },
    {
      id: 3,
      name: "Adriana",
      age: 16,
    },
    {
      id: 4,
      name: "Johnny",
      age: 46,
    },
    {
      id: 5,
      name: "Flora",
      age: 54,
    },
  ];
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <FilteredList list={users} />
    </>
  );
}
