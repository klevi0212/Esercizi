import { useMemo } from "react";

export default function FilteredList({ list }) {
  const filteredList = useMemo(
    () => list.filter((user) => user.age >= 18),
    [list]
  );
  return (
    <>
      <ul>
        {filteredList.map((user) => {
          return (
            <li key={user.id}>
              Hello, I'm {user.name} and I am {user.age} years old!
            </li>
          );
        })}
      </ul>
    </>
  );
}
