// Create an AlertClock function component that renders a button.
// When the button is clicked, an alert should be shown with the current time.
// Render the AlertClock component within the App component. Make it so that the event handler
// is received as a prop by the AlertClock component, instead of being implemented within the component itself.

import { Button } from "./Button";
export function AlertClock() {
  function handleButtonClick() {
    const now = new Date();
    alert(`The current time is${now.toLocaleTimeString()}`);
  }
  return (
    <>
      <p> THIS IS THE BUTTON THAT SHOWS THE CURRENT TIME </p>
      <Button onClick={handleButtonClick} title="Click me!" />
    </>
  );
}
