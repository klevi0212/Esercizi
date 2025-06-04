// In a React application:
// Create a Welcome function component that receives a name prop and renders the Welcome, {name}! message within a p tag.
// Render this component to you App component, passing it a name prop of your choosing. Set a default value for the name prop.
// Add a second prop called age and renders it below the 'welcome' message, within a p tag after the message "Your age is ".
// Modify the value passed to the name prop so that it's contained within a strong tag.
// Extract the "Your age is " message into a new component called Age and render it within the Welcome component.
// Pass to the Age component the age prop that Welcome is receiving from the App component.

import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Giovanni" age={30} />} />
      <Route
        path="/counter"
        element={<Counter initialValue={0} changeValue={1} />}
      />
    </Routes>
  );
}
export default App;
