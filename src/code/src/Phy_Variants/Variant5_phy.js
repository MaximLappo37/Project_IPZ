import React, {useState} from 'react'

import './var5_phy.css'
function Variant5_phy(){

    const questions5_phy = [
        {
            qustionText5_phy: 'Колона автобусів їде по шосе зі швидкістю 54 км/год. Якою є довжина колони, якщо повз мотоцикл, який рухається їй назустріч зі швидкістю 20 м/с, колона проходить за 1,5 хвилини?',
            answerOptions5_phy: [
                {answerText5_phy: '6 км 660 м', isCorrect: false},
                {answerText5_phy: '3 км 150 м', isCorrect: true},
                {answerText5_phy: '111 м', isCorrect: false},
                {answerText5_phy: '52,5 м', isCorrect: false}
            ]
        },
        {
            qustionText5_phy: 'Автомобіль проїхав 100 км за 2 години, а потім ще 50 км за 30 хв. Обчисліть середню швидкість автомобіля на всьому шляху',
            answerOptions5_phy: [
                {answerText5_phy: '150 км/год', isCorrect: false},
                {answerText5_phy: '60 км/год', isCorrect: true},
                {answerText5_phy: '75 км/год', isCorrect: false},
                {answerText5_phy: '100 км/год', isCorrect: false}
            ]
        },
        {
            qustionText5_phy: 'Кулька без початкової швидкості почала вільно падати з висоти 30 м. На якій висоті її потенціальна енергія відносно поверхні землі буде вдвічі меншою за її кінетичну енергію?',
            answerOptions5_phy: [
                {answerText5_phy: '25 м', isCorrect: false},
                {answerText5_phy: '20 м', isCorrect: false},
                {answerText5_phy: '15 м', isCorrect: false},
                {answerText5_phy: '10 м', isCorrect: true}
            ]
        },
        {
            qustionText5_phy: 'Візок масою m, що рухається зі швидкістю v, стикається з нерухомим візком такої ж маси і зчіплюється з ним. Імпульс візків після взаємодії дорівнює',
            answerOptions5_phy: [
                {answerText5_phy: '2mv', isCorrect: false},
                {answerText5_phy: '0', isCorrect: false},
                {answerText5_phy: 'mv/2', isCorrect: false},
                {answerText5_phy: 'mv', isCorrect: true}
            ]
        },
        {
            qustionText5_phy: 'Яке значення температури за шкалою Цельсія відповідає температурі 400К за абсолютною шкалою?',
            answerOptions5_phy: [
                {answerText5_phy: '–673,15 ˚С', isCorrect: false},
                {answerText5_phy: '673,15 ˚С', isCorrect: false},
                {answerText5_phy: '127,15 ˚С', isCorrect: true},
                {answerText5_phy: '–127,15 ˚С', isCorrect: false}
            ]
        },
        {
            qustionText5_phy: 'Визначте масу води, яка підніметься по капіляру радіусом 0,25 мм',
            answerOptions5_phy: [
                {answerText5_phy: '11,7 мг', isCorrect: true},
                {answerText5_phy: '7,5 мг', isCorrect: false},
                {answerText5_phy: '3,3 мг', isCorrect: false},
                {answerText5_phy: '5,4 мг', isCorrect: false}
            ]
        },
        {
            qustionText5_phy: 'Закінчіть речення: «Анізотропія — це залежність фізичних властивостей від …»',
            answerOptions5_phy: [
                {answerText5_phy: 'виду кристалічної решітки кристала', isCorrect: false},
                {answerText5_phy: 'густини кристалу', isCorrect: false},
                {answerText5_phy: 'маси кристала', isCorrect: false},
                {answerText5_phy: 'напряму в кристалі', isCorrect: true}
            ]
        },
        {
            qustionText5_phy: 'У електронагрівачі, через який тече постійний струм, за час t виділяється кількість теплоти Q. Якщо опір нагрівача і час t збільшити вдвічі, не змінюючи силу струму, то кількість теплоти, що виділяється, буде дорівнювати',
            answerOptions5_phy: [
                {answerText5_phy: '8Q', isCorrect: false},
                {answerText5_phy: '4Q', isCorrect: true},
                {answerText5_phy: '2Q', isCorrect: false},
                {answerText5_phy: 'Q', isCorrect: false}
            ]
        },
        {
            qustionText5_phy: 'Прямолінійний провідник масою 2 кг і довжиною 0,5 м знаходиться в однорідному магнітному полі перпендикулярно до ліній індукції поля. Якої сили струм повинен проходити по ньому, щоб він висів, не падаючи? Індукція однорідного поля 10 Тл.',
            answerOptions5_phy: [
                {answerText5_phy: '0,25 А', isCorrect: false},
                {answerText5_phy: '0,5 А', isCorrect: false},
                {answerText5_phy: '4 А', isCorrect: true},
                {answerText5_phy: '2 А', isCorrect: false}
            ]
        },
        {
            qustionText5_phy: 'У яких середовищах може поширюватися поперечна хвиля?',
            answerOptions5_phy: [
                {answerText5_phy: 'тільки в газах і рідинах', isCorrect: false},
                {answerText5_phy: 'тільки в твердих тілах', isCorrect: true},
                {answerText5_phy: 'лише в газах', isCorrect: false},
                {answerText5_phy: 'у газах, рідинах і твердих тілах', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion5_phy, setCurrentQuestion5_phy] = useState(0)
    const [score5_phy, setScore5_phy] = useState(0)
    const [showScore5_phy, setShowScore5_phy] = useState(false)

    const handleAnswerOptionClick5_phy = (isCorrect) => {
        if (isCorrect) {
            setScore5_phy(score5_phy +1)
        }

        const nextQuestion5_phy = currentQuestion5_phy + 1
        if (nextQuestion5_phy < questions5_phy.length){
            setCurrentQuestion5_phy(nextQuestion5_phy)
        } else {
            setShowScore5_phy(true)
        }
    }
    return(
        <body className="p_bg5">
            <div className="variant5_phy">
                {
                    showScore5_phy
                        ? <div className="section_score5_phy">
                             <div>Правильних відповідей {score5_phy} з {questions5_phy.length}</div>
                          </div>
                        : <div className="quizz5_phy">
                            <div className="question_section5_phy">
                                <div className="question_count5_phy">
                                    <span>Питання {currentQuestion5_phy + 1} / {questions5_phy.length}</span> 
                                </div>
                                <div className="question_text5_phy">{questions5_phy[currentQuestion5_phy].qustionText5_phy}</div>
                            </div>
                            <div className="answer_section5_phy">
                                {questions5_phy[currentQuestion5_phy].answerOptions5_phy.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick5_phy(item.isCorrect)}
                                >{item.answerText5_phy}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant5_phy