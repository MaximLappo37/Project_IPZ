
import React, {useState} from 'react'

import './var3_math.css'
//import image_var4_geo from './image_var4_geo.png';

function Variant3_m(){

    const questions3_m = [
        {
            qustionText3_m: 'Середня площа 3 ділянок дорівнює 50 га. Яка середня площа 5 інших ділянок, якщо середня площа всіх 8 ділянок дорівнює 40 га?',
            answerOptions3_m: [
                {answerText3_m: '40 га', isCorrect: false},
                {answerText3_m: '38 га', isCorrect: false},
                {answerText3_m: '34 га', isCorrect: true},
                {answerText3_m: '30 га', isCorrect: false}
            ]
        },
        {
            qustionText3_m: 'Група з 10 школярів протягом літніх канікул перебувала в спортивному таборі. Після сезону зафіксували збільшення зросту дітей у сантиметрах: 1, 1, 2, 2, 2, 2, 2, 3, 3, 4. Знайдіть середнє збільшення зросту одного школяра.',
            answerOptions3_m: [
                {answerText3_m: '2,1 см', isCorrect: false},
                {answerText3_m: '2,4 см', isCorrect: false},
                {answerText3_m: '2,3 см', isCorrect: false},
                {answerText3_m: '2,2 см', isCorrect: true}
            ]
        },
        {
            qustionText3_m: 'Середнє арифметичне 5 чисел дорівнює 300. Одне з цих чисел дорівнює 900. Знайдіть середнє арифметичне решти 4 чисел.',
            answerOptions3_m: [
                {answerText3_m: '250', isCorrect: false},
                {answerText3_m: '150', isCorrect: true},
                {answerText3_m: '200', isCorrect: false},
                {answerText3_m: '100', isCorrect: false}
            ]
        },
        {
            qustionText3_m: 'Дано вибірку температури повітря (за Цельсієм) у вісім годин ранку протягом 6 днів:7; 10; 8; 7; 8; 8. Знайдіть середнє значення вибірки.',
            answerOptions3_m: [
                {answerText3_m: '12', isCorrect: false},
                {answerText3_m: '7,5', isCorrect: false},
                {answerText3_m: '7', isCorrect: false},
                {answerText3_m: '8', isCorrect: true}
            ]
        },
        {
            qustionText3_m: 'У трикутнику ABC ∠A = 80°, ∠C = 40°. Висоти AE і CD перетинаються в точці К. Знайдіть ∠ АКС.',
            answerOptions3_m: [
                {answerText3_m: '110°', isCorrect: false},
                {answerText3_m: '120°', isCorrect: true},
                {answerText3_m: '160°', isCorrect: false},
                {answerText3_m: '140°', isCorrect: false}
            ]
        },
        {
            qustionText3_m: 'Усередині трикутника ABC взято точку D так, що ∠ADC = 140°, ∠BAD = 35°, ∠BCD = 40°. Знайдіть ∠ABC.',
            answerOptions3_m: [
                {answerText3_m: '35°', isCorrect: false},
                {answerText3_m: '55°', isCorrect: false},
                {answerText3_m: '65°', isCorrect: true},
                {answerText3_m: '45°', isCorrect: false}
            ]
        },
        {
            qustionText3_m: 'У трикутнику ABC проведено бісектриси BM і CN, які перетинаються в точці K. Знайдіть кут BKC, якщо ∠A = 120°.',
            answerOptions3_m: [
                {answerText3_m: '140°', isCorrect: false},
                {answerText3_m: '150°', isCorrect: true},
                {answerText3_m: '160°', isCorrect: false},
                {answerText3_m: '120°', isCorrect: false}
            ]
        },
        {
            qustionText3_m: 'Кут між бісектрисою і висотою прямокутного трикутника, які проведені з вершини прямого кута, дорівнює 25°. Знайдіть більший гострий кут трикутника.',
            answerOptions3_m: [
                {answerText3_m: '50°', isCorrect: false},
                {answerText3_m: '70°', isCorrect: true},
                {answerText3_m: '80°', isCorrect: false},
                {answerText3_m: '60°', isCorrect: false}
            ]
        },
        {
            qustionText3_m: 'Знайдіть кут між бічними сторонами рівнобедреного трикутника, якщо кут при його основі дорівнює 50°.',
            answerOptions3_m: [
                {answerText3_m: '80°', isCorrect: true},
                {answerText3_m: '60°', isCorrect: false},
                {answerText3_m: '50°', isCorrect: false},
                {answerText3_m: '70°', isCorrect: false}
            ]
        },
        {
            qustionText3_m: 'Центральний кут на 20° більше вписаного кута, який опирається на ту ж дугу. Знайдіть градусну міру центрального кута.',
            answerOptions3_m: [
                {answerText3_m: '40°', isCorrect: true},
                {answerText3_m: '45°', isCorrect: false},
                {answerText3_m: '50°', isCorrect: false},
                {answerText3_m: '20°', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion3_m, setCurrentQuestion3_m] = useState(0)
    const [score3_m, setScore3_m] = useState(0)
    const [showScore3_m, setShowScore3_m] = useState(false)

    const handleAnswerOptionClick3_m = (isCorrect) => {
        if (isCorrect) {
            setScore3_m(score3_m +1)
        }

        const nextQuestion3_m = currentQuestion3_m + 1
        if (nextQuestion3_m < questions3_m.length){
            setCurrentQuestion3_m(nextQuestion3_m)
        } else {
            setShowScore3_m(true)
        }
    }
    return(
        <body className="m_bg3">
            <div className="variant3_m">
                {
                    showScore3_m
                        ? <div className="section_score3_m">
                             <div>Правильних відповідей {score3_m} з {questions3_m.length}</div>
                          </div>
                        : <div className="quizz3_m">
                            <div className="question_section3_m">
                                <div className="question_count3_m">
                                    <span>Питання {currentQuestion3_m + 1} / {questions3_m.length}</span> 
                                </div>
                                <div className="question_text3_m">{questions3_m[currentQuestion3_m].qustionText3_m}</div>
                            </div>
                            <div className="answer_section3_m">
                                {questions3_m[currentQuestion3_m].answerOptions3_m.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick3_m(item.isCorrect)}
                                >{item.answerText3_m}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant3_m