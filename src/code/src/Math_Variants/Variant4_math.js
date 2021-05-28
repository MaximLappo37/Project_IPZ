
import React, {useState} from 'react'

import './var4_math.css'
//import image_var4_geo from './image_var4_geo.png';

function Variant4_m(){

    const questions4_m = [
        {
            qustionText4_m: 'Відрізок, довжина якого 50 см, розділений на три нерівні відрізки. Відстань між серединами крайніх відрізків дорівнює 30 см. Знайдіть довжину середнього відрізка.',
            answerOptions4_m: [
                {answerText4_m: '20 см', isCorrect: false},
                {answerText4_m: '15 см', isCorrect: false},
                {answerText4_m: '10 см', isCorrect: true},
                {answerText4_m: '25 см', isCorrect: false}
            ]
        },
        {
            qustionText4_m: 'Задано три точки А, В, С, причому АВ = 3 см, ВС = 4 см, АС = 5 см. Укажіть правильне твердження.',
            answerOptions4_m: [
                {answerText4_m: 'Точки А, В, С лежать на одній прямій.', isCorrect: false},
                {answerText4_m: 'Точка А лежить між точками В і С.', isCorrect: false},
                {answerText4_m: 'Точка С лежить між точками А і В.', isCorrect: false},
                {answerText4_m: 'Точки А, В, С не лежать на одній прямій.', isCorrect: true}
            ]
        },
        {
            qustionText4_m: 'Сума довжин двох відрізків дорівнює 12 см, а їх різниця — 2 см. Визначте довжину більшого відрізка.',
            answerOptions4_m: [
                {answerText4_m: '10 см', isCorrect: false},
                {answerText4_m: '7 см', isCorrect: true},
                {answerText4_m: '9 см', isCorrect: false},
                {answerText4_m: '5 см', isCorrect: false}
            ]
        },
        {
            qustionText4_m: 'Відрізок, довжина якого 50 см, розділений трьома точками на чотири нерівні частини. Відстань між серединами крайніх частин — 30 см. Обчисліть відстань між серединами середніх частин відрізка.',
            answerOptions4_m: [
                {answerText4_m: '10 см', isCorrect: false},
                {answerText4_m: '15 см', isCorrect: false},
                {answerText4_m: '25 см', isCorrect: false},
                {answerText4_m: '5 см', isCorrect: true}
            ]
        },
        {
            qustionText4_m: 'Відрізок довжиною а розділений на три рівні частини. Визначте, яку частину даного відрізка становить відстань між серединами першої і третьої утворених частин.',
            answerOptions4_m: [
                {answerText4_m: '3/4', isCorrect: false},
                {answerText4_m: '2/3', isCorrect: true},
                {answerText4_m: '1/4', isCorrect: false},
                {answerText4_m: '1/2', isCorrect: false}
            ]
        },
        {
            qustionText4_m: 'Точки А, В, С лежать на одній прямій, АВ = 3 см, АС = 4 см. Якою є найменша відстань між точками В і С?',
            answerOptions4_m: [
                {answerText4_m: '7 см', isCorrect: false},
                {answerText4_m: '3 см', isCorrect: false},
                {answerText4_m: '1 см', isCorrect: true},
                {answerText4_m: '8 см', isCorrect: false}
            ]
        },
        {
            qustionText4_m: 'Відрізок, довжина якого 50 см, розділений довільною точкою на два відрізки. Обчисліть відстань між серединами утворених відрізків.',
            answerOptions4_m: [
                {answerText4_m: '40 см', isCorrect: false},
                {answerText4_m: '25 см', isCorrect: true},
                {answerText4_m: '30 см', isCorrect: false},
                {answerText4_m: '10 cм', isCorrect: false}
            ]
        },
        {
            qustionText4_m: 'Відрізок, довжина якого дорівнює 47 см, розділений на три нерівні відрізки. Відстань між серединами крайніх відрізків дорівнює 26 см. Знайдіть довжину середнього відрізка.',
            answerOptions4_m: [
                {answerText4_m: '6', isCorrect: false},
                {answerText4_m: '5', isCorrect: true},
                {answerText4_m: '11', isCorrect: false},
                {answerText4_m: '18', isCorrect: false}
            ]
        },
        {

            qustionText4_m: 'Довжина відрізка АВ дорівнює 18 см. Точка С лежить між точками А і В. Знайдіть BС (у см), якщо АС – ВС = 4 см.',
            answerOptions4_m: [
                {answerText4_m: '7', isCorrect: true},
                {answerText4_m: '8', isCorrect: false},
                {answerText4_m: '12', isCorrect: false},
                {answerText4_m: '11', isCorrect: false}
            ]
        },
        {
            qustionText4_m: 'Дано шість точок, ніякі три із яких не лежать на одній прямій. Скільки всього можна провести прямих, яким належать кожні дві дані точки?',
            answerOptions4_m: [
                {answerText4_m: '15', isCorrect: true},
                {answerText4_m: '11', isCorrect: false},
                {answerText4_m: '12', isCorrect: false},
                {answerText4_m: '10', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion4_m, setCurrentQuestion4_m] = useState(0)
    const [score4_m, setScore4_m] = useState(0)
    const [showScore4_m, setShowScore4_m] = useState(false)

    const handleAnswerOptionClick4_m = (isCorrect) => {
        if (isCorrect) {
            setScore4_m(score4_m +1)
        }

        const nextQuestion4_m = currentQuestion4_m + 1
        if (nextQuestion4_m < questions4_m.length){
            setCurrentQuestion4_m(nextQuestion4_m)
        } else {
            setShowScore4_m(true)
        }
    }
    return(
        <body className="m_bg4">
            <div className="variant4_m">
                {
                    showScore4_m
                        ? <div className="section_score4_m">
                             <div>Правильних відповідей {score4_m} з {questions4_m.length}</div>
                          </div>
                        : <div className="quizz4_m">
                            <div className="question_section4_m">
                                <div className="question_count4_m">
                                    <span>Питання {currentQuestion4_m + 1} / {questions4_m.length}</span> 
                                </div>
                                <div className="question_text4_m">{questions4_m[currentQuestion4_m].qustionText4_m}</div>
                            </div>
                            <div className="answer_section4_m">
                                {questions4_m[currentQuestion4_m].answerOptions4_m.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick4_m(item.isCorrect)}
                                >{item.answerText4_m}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant4_m