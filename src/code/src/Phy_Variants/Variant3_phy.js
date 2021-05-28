import React, {useState} from 'react'

import './var3_phy.css'
import image_var3_phy from './image_var3_phy.png';
import image_var3_2_phy from './image_var3-2_phy.png';
import image_var3_3_phy from './image_var3-3_phy.png';
function Variant3_phy(){

    const questions3_phy = [
        {
            qustionText3_phy: 'Під час термоелектронної емісії електрони набувають кінетичної енергії за рахунок',
            answerOptions3_phy: [
                {answerText3_phy: 'опромінювання світлом', isCorrect: false},
                {answerText3_phy: 'дії електричного поля', isCorrect: false},
                {answerText3_phy: 'бомбардування частинками', isCorrect: false},
                {answerText3_phy: 'нагрівання тіла', isCorrect: true}
            ]
        },
        {
            qustionText3_phy: 'Згідно зі спеціальною теорією відносності в рухомій і нерухомій системах відліку',
            answerOptions3_phy: [
                {answerText3_phy: 'час плине однаково, швидкість світла у вакуумі має різні значення', isCorrect: false},
                {answerText3_phy: 'час плине однаково, швидкість світла у вакуумі має однакові значення', isCorrect: false},
                {answerText3_phy: 'час плине по-різному, швидкість світла у вакуумі має різні значення', isCorrect: false},
                {answerText3_phy: 'час плине по-різному, швидкість світла у вакуумі має однакові значення', isCorrect: true}
            ]
        },
        {
            qustionText3_phy: <img
                                    src={image_var3_phy}
                                    height="300"
                                    width="600"
                                    alt="Logo"
                                />,
            answerOptions3_phy: [
                {answerText3_phy: 'рентгенівське проміння', isCorrect: false},
                {answerText3_phy: 'ультрафіолетове проміння', isCorrect: false},
                {answerText3_phy: 'видиме світло', isCorrect: true},
                {answerText3_phy: 'інфрачервоне проміння', isCorrect: false}
            ]
        },
        {
            qustionText3_phy: <img
                                    src={image_var3_2_phy}
                                    height="100"
                                    width="550"
                                    alt="Logo"
                                />,
            answerOptions3_phy: [
                {answerText3_phy: '30', isCorrect: false},
                {answerText3_phy: '60', isCorrect: true},
                {answerText3_phy: '65', isCorrect: false},
                {answerText3_phy: '95', isCorrect: false}
            ]
        },
        {
            qustionText3_phy: 'Кажан, що рухався зі швидкістю 20 м/с в напрямку перепони, випустив ультразвуковий сигнал на відстані 170 м від неї. Уважайте, що швидкість поширення звуку в повітрі дорівнює 340 м/с. За який час сигнал кажана досягне перепони? Відповідь запишіть у секундах (с).',
            answerOptions3_phy: [
                {answerText3_phy: '0', isCorrect: false},
                {answerText3_phy: '0.5', isCorrect: true},
                {answerText3_phy: '1', isCorrect: false},
                {answerText3_phy: '2', isCorrect: false}
            ]
        },
        {
            qustionText3_phy: 'Кажан, що рухався зі швидкістю 20 м/с в напрямку перепони, випустив ультразвуковий сигнал на відстані 170 м від неї. Уважайте, що швидкість поширення звуку в повітрі дорівнює 340 м/с. На якій відстані від цієї перепони опиниться кажан у той момент, як отримає зворотний сигнал?(м) ',
            answerOptions3_phy: [
                {answerText3_phy: '139', isCorrect: false},
                {answerText3_phy: '187', isCorrect: false},
                {answerText3_phy: '231', isCorrect: false},
                {answerText3_phy: '151', isCorrect: true}
            ]
        },
        {
            qustionText3_phy: 'Коли до маленької зарядженої кульки, підвішеної на нитці, знизу піднесли іншу заряджену кульку, сила натягу нитки збільшилася від 1 до 1,5 мН. Визначте силу взаємодії цих заряджених кульок.Відповідь запишіть у міліньютонах (мН).',
            answerOptions3_phy: [
                {answerText3_phy: '0.1', isCorrect: false},
                {answerText3_phy: '0.5', isCorrect: true},
                {answerText3_phy: '0.3', isCorrect: false},
                {answerText3_phy: '0.6', isCorrect: false}
            ]
        },
        {
            qustionText3_phy: 'Коли до маленької зарядженої кульки, підвішеної на нитці, знизу піднесли іншу заряджену кульку, сила натягу нитки збільшилася від 1 до 1,5 мН. Визначте, якою стане сила натягу нитки, якщо відстань між кульками зменшити вдвічі.Відповідь запишіть у міліньютонах (мН).',
            answerOptions3_phy: [
                {answerText3_phy: '1', isCorrect: false},
                {answerText3_phy: '10', isCorrect: false},
                {answerText3_phy: '3', isCorrect: true},
                {answerText3_phy: '5', isCorrect: false}
            ]
        },
        {
            qustionText3_phy: <img
                                    src={image_var3_3_phy}
                                    height="350"
                                    width="550"
                                    alt="Logo"
                                />,
            answerOptions3_phy: [
                {answerText3_phy: '10', isCorrect: false},
                {answerText3_phy: '20', isCorrect: true},
                {answerText3_phy: '50', isCorrect: false},
                {answerText3_phy: '30', isCorrect: false}
            ]
        },
        {
            qustionText3_phy: 'Футбольний м’яч сферичної форми має сталий об’єм 5,5 л. Початковий тиск у м’ячі дорівнює атмосферному й становить 100 кПа. Його накачують за допомогою насоса, робочий об’єм якого дорівнює 0,1 л. Визначте тиск повітря в м’ячі після 11 циклів роботи насоса. Стискання повітря відбувається за сталої температури. Відповідь запишіть у кілопаскалях (кПа).',
            answerOptions3_phy: [
                {answerText3_phy: '115', isCorrect: false},
                {answerText3_phy: '120', isCorrect: true},
                {answerText3_phy: '180', isCorrect: false},
                {answerText3_phy: '175', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion3_phy, setCurrentQuestion3_phy] = useState(0)
    const [score3_phy, setScore3_phy] = useState(0)
    const [showScore3_phy, setShowScore3_phy] = useState(false)

    const handleAnswerOptionClick3_phy = (isCorrect) => {
        if (isCorrect) {
            setScore3_phy(score3_phy +1)
        }

        const nextQuestion3_phy = currentQuestion3_phy + 1
        if (nextQuestion3_phy < questions3_phy.length){
            setCurrentQuestion3_phy(nextQuestion3_phy)
        } else {
            setShowScore3_phy(true)
        }
    }
    return(
        <body className="p_bg3">
            <div className="variant3_phy">
                {
                    showScore3_phy
                        ? <div className="section_score3_phy">
                             <div>Правильних відповідей {score3_phy} з {questions3_phy.length}</div>
                          </div>
                        : <div className="quizz3_phy">
                            <div className="question_section3_phy">
                                <div className="question_count3_phy">
                                    <span>Питання {currentQuestion3_phy + 1} / {questions3_phy.length}</span> 
                                </div>
                                <div className="question_text3_phy">{questions3_phy[currentQuestion3_phy].qustionText3_phy}</div>
                            </div>
                            <div className="answer_section3_phy">
                                {questions3_phy[currentQuestion3_phy].answerOptions3_phy.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick3_phy(item.isCorrect)}
                                >{item.answerText3_phy}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant3_phy