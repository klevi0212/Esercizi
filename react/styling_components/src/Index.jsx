// Create an index.css file and import it within the index.jsx file.
// Add a .welcome class to the Welcome component that sets its background color and adds a border.
// Modify the CounterDisplay component adding an inline style attribute, editing font size and font color.
// Modify the Login component so that the "login" button background color is "red" when the inputted password's
// length is shorter than 8 characters, green otherwise.

import Welcome from "./Welcome";
import CounterDisplay from "./CounterDisplay";
import Login from "./Login";
export default function Index() {
  return (
    <>
      <Welcome name="Giovanni" />
      <CounterDisplay buttonName={"button"} />
      <Login buttonName={"button"} />
    </>
  );
}
