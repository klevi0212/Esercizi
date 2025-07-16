// import { useState } from "react";
// import { domande } from "../domande";
// import type { DomandeData, Question } from "../types";
// import Answers from "./Answers";
// import { ChevronRight, ChevronLeft } from "lucide-react";
// interface QuestionProps {
//   category: keyof DomandeData;
// }
// export default function Questions({ category }: QuestionProps) {
//   // Ordina le categorie: prima html, poi css...
//   const orderedCategories = [
//     "html",
//     "css",
//     "git",
//     "javascript",
//     "react",
//     "typescript",
//     "sql",
//     "nodejs",
//   ] as const;
//   // Crea un array con tutte le domande in ordine
//   // flatmap serve per mappare un array e poi appiattire il risultato (cioè unire i sottolivelli in un array unico).
//   const allQuestions: Question[] = orderedCategories.flatMap(
//     (cat) => domande[cat]?.questions ?? []
//   );

//   const questions = domande[category].questions;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [answered, setAnswered] = useState(false);
//   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

//   const currentQuestion: Question = questions[currentIndex];

//   const handleAnswer = (correct: boolean) => {
//     setAnswered(true);
//     setIsCorrect(correct);
//   };

//   const goToNext = () => {
//     if (currentIndex < questions.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//       setAnswered(false);
//       setIsCorrect(null);
//     }
//   };

//   const goToPrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//       setAnswered(false);
//       setIsCorrect(null);
//     }
//   };

//   const quizCompleted = currentIndex === allQuestions.length - 1 && answered;
//   console.log("currentIndex", currentIndex);
//   console.log("allQuestions.length", allQuestions.length);
//   return (
//     <>
//       <div className="w-full bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600">
//         <div className="flex justify-between mb-4">
//           <button
//             className="p-1 rounded-full disabled:opacity-50"
//             onClick={goToPrev}
//             disabled={currentIndex === 0}
//           >
//             <ChevronLeft color="#BEA8FF" />
//           </button>
//           <button
//             className="p-0.5 rounded-full disabled:opacity-50"
//             onClick={goToNext}
//             disabled={currentIndex === questions.length - 1}
//           >
//             <ChevronRight color="#BEA8FF" />
//           </button>
//         </div>
//         <div>
//           <p className="text-sm my-black mb-2">
//             Domanda {currentIndex + 1} di {questions.length}
//           </p>

//           <Answers question={currentQuestion} onClick={handleAnswer} />

//           {/* Feedback risposta */}
//           {answered && (
//             <p style={{ color: isCorrect ? "green" : "red" }}>
//               {isCorrect ? "✅ Corretto!" : "❌ Sbagliato"}
//             </p>
//           )}
//         </div>

//         {/* <ul>
// 				{domande[category].questions.map(({ question }, index) => {
// 					return (
// 						<li key={index} className="">
// 							<span>{question}</span>
// 						</li>
// 					)
// 				})}
// 			</ul>

//                 */}
//       </div>
//       {quizCompleted && (
//         <p>
//           {/* qui ci andrà il componente vero e proprio */}
//           🎉 Hai completato il quiz!
//         </p>
//       )}
//     </>
//   );
// }
