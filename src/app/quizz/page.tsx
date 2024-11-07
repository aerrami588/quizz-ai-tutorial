"use client"

import ProgressBar from "@/components/progressBar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, X } from "lucide-react";
import { useState } from "react";
import ResultCard from "./ResultCard";

const question = [
    {
        questionText: "what is bodih",
        answers: [
            {
                id: 1,
                answerText: "bla bla",
                isCorrect: false,
            },
            {
                id: 1,
                answerText: "bla bla",
                isCorrect: true,
            },
            {
                id: 1,
                answerText: "bla bla",
                isCorrect: false,
            },
            {
                id: 1,
                answerText: "bla bla",
                isCorrect: false,
            }
        ],

    },
    {
        questionText: "what is brahimO3li",
        answers: [
            {
                id: 1,
                answerText: "bla bla",
                isCorrect: true,
            },
            {
                id: 1,
                answerText: "bla bla",
                isCorrect: true,
            },
            {
                id: 1,
                answerText: "bla bla",
                isCorrect: true,
            },
            {
                id: 1,
                answerText: "bla bla",
                isCorrect: true,
            }
        ]
    }
]

export default function Quizz() {
    const [started, setStarted] = useState<boolean>(false)
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

    const handleNext = () => {
        if (!started) {
            setStarted(true);
            return;
        }

        if (currentQuestion < question.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }

        setSelectedAnswer(null);
        setIsCorrect(false);
    }

    const handleAnswer = (answer: any) => {
        setSelectedAnswer(answer.id)
        const isCurrentAnswer = answer.isCorrect;
        if (isCurrentAnswer) {
            setScore(score + 1);
        }
        setIsCorrect(isCurrentAnswer);
    }
    return (
        <div className="flex flex-col  flex-1">
            <div className="position-sticky top-0 z-10 shadow-md py-4 w-full">
                <header className="grid grid-cols-[auto,1fr,auto] grid-flow-col items-center justify-between py-2 gap-2">
                    <Button size="icon" variant="outline"><ChevronLeft /></Button>
                    <ProgressBar value={(currentQuestion / question.length) * 100} />
                    <Button size="icon" variant="outline"><X /></Button>
                </header>
            </div>
            <main className="flex justify-center flex-1">
                {started ? <div className="">
                    <h2 className="text-3xl font-bold">{question[currentQuestion].questionText}</h2>
                    <div className="grid grid-cols-1 gap-6 mt-6">
                        {question[currentQuestion].answers.map((answer: any, index: number) => (
                            <Button onClick={() => handleAnswer(answer)} size="lg" variant="secondary" key={index}>{answer.answerText}</Button>
                        ))}
                    </div>
                </div> : <h1 className="text-3xl font-bold">welcome to the hhaha quizz app👋</h1>}

            </main>
            <footer className="footer pb-9 px-6 relative mb-0">
                <ResultCard correctAnswer={question[currentQuestion].answers.find(answer => answer.isCorrect === true)?.answerText} isCorrect={isCorrect} />
                <Button variant="neo" size="lg" onClick={handleNext}>{started ? 'Next' : "Start"}</Button>
            </footer>
        </div>
    )
}
