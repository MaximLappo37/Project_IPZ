
import React, {useState} from 'react'

import './var5_math.css'
//import image_var4_geo from './image_var4_geo.png';

function Variant5_m(){

    const questions5_m = [
        {
            qustionText5_m: 'Точки A, B, C, D не лежать в одній площині. По якій прямій перетинаються площини ABC і ABD?',
            answerOptions5_m: [
                {answerText5_m: 'АD', isCorrect: false},
                {answerText5_m: 'СD', isCorrect: false},
                {answerText5_m: 'АВ', isCorrect: true},
                {answerText5_m: 'ВС', isCorrect: false}
            ]
        },
        {
            qustionText5_m: 'Скільки всього різних площин можна провести через три точки, якщо вони лежать на одній прямій?',
            answerOptions5_m: [
                {answerText5_m: 'тільки одну', isCorrect: false},
                {answerText5_m: 'тільки три', isCorrect: false},
                {answerText5_m: 'жодної', isCorrect: false},
                {answerText5_m: 'безліч', isCorrect: true}
            ]
        },
        {
            qustionText5_m: 'Скільки площин визначають чотири точки, які не лежать в одній площині?',
            answerOptions5_m: [
                {answerText5_m: 'тільки одну', isCorrect: false},
                {answerText5_m: 'тільки чотири', isCorrect: true},
                {answerText5_m: 'безліч', isCorrect: false},
                {answerText5_m: 'тільки дві', isCorrect: false}
            ]
        },
        {
            qustionText5_m: 'Задано дві мимобіжні прямі а і b. Скільки існує різних площин, що проходять через пряму а і є паралельними прямій b?',
            answerOptions5_m: [
                {answerText5_m: 'три', isCorrect: false},
                {answerText5_m: 'безліч', isCorrect: false},
                {answerText5_m: 'жодної', isCorrect: false},
                {answerText5_m: 'одна', isCorrect: true}
            ]
        },
        {
            qustionText5_m: 'Точки A і B лежать у площині α, а точка C — поза нею. Яке з наведених тверджень правильне?',
            answerOptions5_m: [
                {answerText5_m: 'Пряма AC не перетинає площину α', isCorrect: false},
                {answerText5_m: 'Пряма AВ лежить в площині α', isCorrect: true},
                {answerText5_m: 'Пряма ВC не перетинає площину α', isCorrect: false},
                {answerText5_m: 'Прямі AВ і АC не перетинаються', isCorrect: false}
            ]
        },
        {
            qustionText5_m: 'Точки K, L, M, N — відповідно середини ребер SA, AC, BC, BS правильного тетраедра SABC. Знайдіть периметр чотирикутника KLMN, якщо ребро тетраедра дорівнює 10 см.',
            answerOptions5_m: [
                {answerText5_m: '40 см', isCorrect: false},
                {answerText5_m: '30 см', isCorrect: false},
                {answerText5_m: '20 см', isCorrect: true},
                {answerText5_m: '10 см', isCorrect: false}
            ]
        },
        {
            qustionText5_m: 'Відношення площі основи конуса до площі його осьового перерізу дорівнює π. Знайдіть кут нахилу твірної конуса до основи.',
            answerOptions5_m: [
                {answerText5_m: 'більше 75°', isCorrect: false},
                {answerText5_m: '45°', isCorrect: true},
                {answerText5_m: '60°', isCorrect: false},
                {answerText5_m: '75°', isCorrect: false}
            ]
        },
        {
            qustionText5_m: 'Радіус основи конуса дорівнює 6 см, висота — 8 см. Знайдіть твірну конуса.',
            answerOptions5_m: [
                {answerText5_m: '12 см', isCorrect: false},
                {answerText5_m: '10 см', isCorrect: true},
                {answerText5_m: '11 см', isCorrect: false},
                {answerText5_m: '7 см', isCorrect: false}
            ]
        },
        {
            qustionText5_m: 'Знайдіть площу осьового перерізу зрізаного конуса, якщо висота зрізаного конуса дорівнює 10 см, а радіуси основ дорівнюють 5 см і 7 см.',
            answerOptions5_m: [
                {answerText5_m: '60', isCorrect: true},
                {answerText5_m: '110', isCorrect: false},
                {answerText5_m: '120', isCorrect: false},
                {answerText5_m: '55', isCorrect: false}
            ]
        },
        {
            qustionText5_m: 'Точки A (1; 3; –1), B (2; 1; 2), C (1; –2; 1) є вершинами паралелограма ABCD. Знайдіть координати вершини D.',
            answerOptions5_m: [
                {answerText5_m: 'D (0; 0; –2)', isCorrect: true},
                {answerText5_m: 'D (0; –2; 0)', isCorrect: false},
                {answerText5_m: 'D (–2; 0; 0)', isCorrect: false},
                {answerText5_m: 'D (1; 1; –2)', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion5_m, setCurrentQuestion5_m] = useState(0)
    const [score5_m, setScore5_m] = useState(0)
    const [showScore5_m, setShowScore5_m] = useState(false)

    const handleAnswerOptionClick5_m = (isCorrect) => {
        if (isCorrect) {
            setScore5_m(score5_m +1)
        }

        const nextQuestion5_m = currentQuestion5_m + 1
        if (nextQuestion5_m < questions5_m.length){
            setCurrentQuestion5_m(nextQuestion5_m)
        } else {
            setShowScore5_m(true)
        }
    }
    return(
        <body className="m_bg5">
            <div className="variant5_m">
                {
                    showScore5_m
                        ? <div className="section_score5_m">
                             <div>Правильних відповідей {score5_m} з {questions5_m.length}</div>
                          </div>
                        : <div className="quizz5_m">
                            <div className="question_section5_m">
                                <div className="question_count5_m">
                                    <span>Питання {currentQuestion5_m + 1} / {questions5_m.length}</span> 
                                </div>
                                <div className="question_text5_m">{questions5_m[currentQuestion5_m].qustionText5_m}</div>
                            </div>
                            <div className="answer_section5_m">
                                {questions5_m[currentQuestion5_m].answerOptions5_m.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick5_m(item.isCorrect)}
                                >{item.answerText5_m}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant5_m