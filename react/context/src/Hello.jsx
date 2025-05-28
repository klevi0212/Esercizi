import { useContext } from "react";
import LanguageContext from "./LanguageContext";

export default function Hello() {
  const language = useContext(LanguageContext);
  const translation = {
    it: "Ciao Mondo!",
    en: "Hello World!",
    fr: "Bonjour le monde!",
  };

  return (
    <>
      <h2>
        {/* {language === "it"
          ? "Ciao Mondo!"
          : language === "en"
          ? "Hello World!"
          : "Bonjour le monde!"} */}
        {translation[language]}
      </h2>
    </>
  );
}
