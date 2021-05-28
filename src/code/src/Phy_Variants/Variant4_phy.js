import React, {useState} from 'react'

import './var4_phy.css'
import image_var4_phy from './image_var4_phy.png';
import image_var4_2_phy from './image_var4-2_phy.png';
import image_var4_3_phy from './image_var4-3_phy.png';
import image_var4_4_phy from './image_var4-4_phy.png';
import image_var4_5_phy from './image_var4-5_phy.png';
import image_var4_6_phy from './image_var4-6_phy.png';
function Variant4_phy(){

    const questions4_phy = [
        {
            qustionText4_phy: 'Мотоцикліст проїхав перші 120 км за 6 год, а наступні 80 км – за 2 год. Визначте середню швидкість мотоцикліста за час всієї його поїздки',
            answerOptions4_phy: [
                {answerText4_phy: '40 км/год', isCorrect: false},
                {answerText4_phy: '20 км/год', isCorrect: false},
                {answerText4_phy: '25 км/год', isCorrect: true},
                {answerText4_phy: '30 км/год', isCorrect: false}
            ]
        },
        {
            qustionText4_phy: <img
                                    src={image_var4_5_phy}
                                    height="350"
                                    width="600"
                                    alt="Logo"
                                />,
            answerOptions4_phy: [
                {answerText4_phy: 'від 20 с до 30 с', isCorrect: true},
                {answerText4_phy: 'від 30 с до 40 с', isCorrect: false},
                {answerText4_phy: 'від 10 с до 20 с', isCorrect: false},
                {answerText4_phy: 'від 0 с до 10 с', isCorrect: false}
            ]
        },
        {
            qustionText4_phy: <img
                                    src={image_var4_6_phy}
                                    height="350"
                                    width="600"
                                    alt="Logo"
                                />,
            answerOptions4_phy: [
                {answerText4_phy: 'Прискорення тіла дорівнює нулю', isCorrect: false},
                {answerText4_phy: 'Прискорення тіла направлене зліва направо', isCorrect: true},
                {answerText4_phy: 'Прискорення тіла направлене справа наліво', isCorrect: false},
                {answerText4_phy: 'Прискорення тіла направлене перпендикулярно до швидкості тіла', isCorrect: false}
            ]
        },
        {
            qustionText4_phy: 'У першому балоні, об’єм якого дорівнює 3 л, містилося повітря під тиском 560 кПа. З другого балона, об’єм якого дорівнює 4 л, повітря було відкачано. Відкривши кран, обидва балони сполучили один з одним. Визначте, яким буде тиск у балонах, якщо температура повітря не змінилася.',
            answerOptions4_phy: [
                {answerText4_phy: '980 кПа', isCorrect: false},
                {answerText4_phy: '747 кПа', isCorrect: false},
                {answerText4_phy: '420 кПа', isCorrect: false},
                {answerText4_phy: '240 кПа', isCorrect: true}
            ]
        },
        {
            qustionText4_phy: 'За один цикл тепловий двигун виконав корисну роботу 40 МДж. Таку саму кількість теплоти передано під час цього навколишньому середовищу. Визначте коефіцієнт корисної дії цієї теплової машини.Відповідь запишіть у відсотках (%).',
            answerOptions4_phy: [
                {answerText4_phy: '20', isCorrect: false},
                {answerText4_phy: '10', isCorrect: false},
                {answerText4_phy: '50', isCorrect: true},
                {answerText4_phy: '60', isCorrect: false}
            ]
        },
        {
            qustionText4_phy: 'Конденсатори ємністю 5, 10 і 20 мкФ з’єднали паралельно. Визначте електричну ємність батареї конденсаторів.Відповідь запишіть у мікрофарадах (мкФ).',
            answerOptions4_phy: [
                {answerText4_phy: '30', isCorrect: false},
                {answerText4_phy: '35', isCorrect: true},
                {answerText4_phy: '44', isCorrect: false},
                {answerText4_phy: '27', isCorrect: false}
            ]
        },
        {
            qustionText4_phy: <img
                                    src={image_var4_4_phy}
                                    height="350"
                                    width="600"
                                    alt="Logo"
                                />,
            answerOptions4_phy: [
                {answerText4_phy: '1.5', isCorrect: false},
                {answerText4_phy: '2.25', isCorrect: true},
                {answerText4_phy: '3', isCorrect: false},
                {answerText4_phy: '4.5', isCorrect: false}
            ]
        },
        {
            qustionText4_phy: <img
                                    src={image_var4_3_phy}
                                    height="350"
                                    width="600"
                                    alt="Logo"
                                />,
            answerOptions4_phy: [
                {answerText4_phy: '25', isCorrect: false},
                {answerText4_phy: '36', isCorrect: false},
                {answerText4_phy: '18', isCorrect: false},
                {answerText4_phy: '24', isCorrect: true}
            ]
        },
        {
            qustionText4_phy: <img
                                    src={image_var4_2_phy}
                                    height="350"
                                    width="600"
                                    alt="Logo"
                                />,
            answerOptions4_phy: [
                {answerText4_phy: '100', isCorrect: false},
                {answerText4_phy: '120', isCorrect: true},
                {answerText4_phy: '160', isCorrect: false},
                {answerText4_phy: '200', isCorrect: false}
            ]
        },
        {
            qustionText4_phy: <img
                                    src={image_var4_phy}
                                    height="350"
                                    width="600"
                                    alt="Logo"
                                />,
            answerOptions4_phy: [
                {answerText4_phy: '56', isCorrect: true},
                {answerText4_phy: '89', isCorrect: false},
                {answerText4_phy: '34', isCorrect: false},
                {answerText4_phy: '48', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion4_phy, setCurrentQuestion4_phy] = useState(0)
    const [score4_phy, setScore4_phy] = useState(0)
    const [showScore4_phy, setShowScore4_phy] = useState(false)

    const handleAnswerOptionClick4_phy = (isCorrect) => {
        if (isCorrect) {
            setScore4_phy(score4_phy +1)
        }

        const nextQuestion4_phy = currentQuestion4_phy + 1
        if (nextQuestion4_phy < questions4_phy.length){
            setCurrentQuestion4_phy(nextQuestion4_phy)
        } else {
            setShowScore4_phy(true)
        }
    }
    return(
        <body className="p_bg4">
            <div className="variant4_phy">
                {
                    showScore4_phy
                        ? <div className="section_score4_phy">
                             <div>Правильних відповідей {score4_phy} з {questions4_phy.length}</div>
                          </div>
                        : <div className="quizz4_phy">
                            <div className="question_section4_phy">
                                <div className="question_count4_phy">
                                    <span>Питання {currentQuestion4_phy + 1} / {questions4_phy.length}</span> 
                                </div>
                                <div className="question_text4_phy">{questions4_phy[currentQuestion4_phy].qustionText4_phy}</div>
                            </div>
                            <div className="answer_section3_phy">
                                {questions4_phy[currentQuestion4_phy].answerOptions4_phy.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick4_phy(item.isCorrect)}
                                >{item.answerText4_phy}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant4_phy