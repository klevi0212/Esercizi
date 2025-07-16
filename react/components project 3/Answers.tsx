import Answer from "./Answer"
import type { Question } from "../types"

interface Props {
	question: Question
	onClick: (correct: boolean) => void
}
export default function Answers({ question, onClick }: Props) {
	const allAnswers = [question.correct_answer, ...question.wrong_answers].sort(
		() => Math.random() - 0.5
	) // mescola le risposte

	return (
		<div>
			<h2>{question.question}</h2>
			{allAnswers.map((ans, index) => (
				<Answer
					key={index}
					text={ans}
					onClick={() => onClick(ans === question.correct_answer)}
				/>
			))}
		</div>
	)
}
