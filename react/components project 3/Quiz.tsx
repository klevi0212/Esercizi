import { useState } from "react"
import questions from "../domande.json"
export default function Quiz() {
	const [index, setIndex] = useState(0)
	const current = questions[index]
	function handleClick() {
		if (index < questions.length - 1) {
			setIndex((prev) => prev + 1)
		}
	}
	return (
		<>
			<div>
				<h1>{current.question}</h1>
				<ul>
					{current.answers.map((answer, index) => (
						<li key={index} onClick={handleClick}>
							{answer}
						</li>
					))}
				</ul>
				<button onClick={handleClick}>next</button>
			</div>
		</>
	)
}
