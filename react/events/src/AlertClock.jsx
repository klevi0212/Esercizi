export function AlertClock({ title, clickHandler }) {
  return <button onClick={clickHandler}>{title}</button>;
}
