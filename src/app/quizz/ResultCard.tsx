import { cn } from '@/lib/utils'
import React from 'react'

const ResultCard = ({ isCorrect, correctAnswer }: { isCorrect: boolean | null, correctAnswer: string }) => {
    if (isCorrect === null) {
        return null
    }
    return (
        <p className={cn("text-sm", isCorrect ? 'text-green-600' : 'text-red-600')}>{isCorrect ? 'correct' : 'InCorrect! the current answer is : ' + correctAnswer}</p>
    )
}

export default ResultCard