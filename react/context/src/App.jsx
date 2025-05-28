// Create a Hello function component that renders the "Hello, World!" message within an h2 tag.
// Create a LanguageContext and wrap the Hello component within its provider. Add a select tag to the component
// in which the Hello component is rendered that allows the user to select the language, and pass it as a value to the Provider.
// Consume the LanguageContext within the Hello component by using the useContext hook, and show the "Hello, World!" message in the
// correct language.

import { useState } from "react";
import "./App.css";
import Hello from "./Hello";
import LanguageContext from "./LanguageContext";
export default function App() {
  const [language, setLanguage] = useState("it");
  const languages = [
    { code: "it", label: "Italiano" },
    { code: "en", label: "English" },
    { code: "fr", label: "Francais" },
  ];
  return (
    <div className="wrapper">
      <label>Change language by selecting it: </label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        {languages.map((l) => {
          return (
            <option value={l.code} key={l.code}>
              {l.label}
            </option>
          );
        })}

        {/* <option value="en">English</option>
        <option value="fr">Francais</option> */}
      </select>
      <LanguageContext.Provider value={language}>
        <Hello />
      </LanguageContext.Provider>
    </div>
  );
}
