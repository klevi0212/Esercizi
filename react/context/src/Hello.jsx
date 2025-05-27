import { useContext } from "react";
import LanguageContext from "./LanguageContext";

export default function Hello() {
  const language = useContext(LanguageContext);
  return (
    <>
      <h2>
        {language === "it"
          ? "Ciao Mondo!"
          : language === "en"
          ? "Hello World!"
          : "Bonjour le monde!"}
      </h2>
    </>
  );
}
