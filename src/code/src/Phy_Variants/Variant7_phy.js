import React, {useState} from 'react'

import './var7_phy.css'
function Variant7_phy(){

    const questions7_phy = [
        {
            qustionText7_phy: 'Якою є лінійна швидкість обертання кінця секундної стрілки годинника, якщо довжина стрілки становить 2,4 см?',
            answerOptions7_phy: [
                {answerText7_phy: '0,4 мм/с', isCorrect: false},
                {answerText7_phy: '15,1 см/с', isCorrect: false},
                {answerText7_phy: '2,4 м/с', isCorrect: false},
                {answerText7_phy: '2,5 мм/с', isCorrect: true}
            ]
        },
        {
            qustionText7_phy: 'Дистанцію 300 м легкоатлет пробіг зі швидкістю 27 км/год. Скільки часу тривав забіг?',
            answerOptions7_phy: [
                {answerText7_phy: '8,1 с', isCorrect: false},
                {answerText7_phy: '40 с', isCorrect: true},
                {answerText7_phy: '90 с', isCorrect: false},
                {answerText7_phy: '11 с', isCorrect: false}
            ]
        },
        {
            qustionText7_phy: 'Опуклий міст має форму дуги окружності радіусом 144 м. Автомобіль масою 2 т рухається мостом зі швидкістю 86,4 км/год. З якою силою автомобіль діє на поверхню дороги в момент проходження середини моста? Вважайте, що g = 10 м/с2.',
            answerOptions7_phy: [
                {answerText7_phy: '24 Н', isCorrect: false},
                {answerText7_phy: '20 кН', isCorrect: false},
                {answerText7_phy: '12 кН', isCorrect: true},
                {answerText7_phy: '0', isCorrect: false}
            ]
        },
        {
            qustionText7_phy: 'Малий поршень гідравлічного домкрата опустився на 10 см, а великий з вантажем 400 кг піднявся на 0,5 см. Яка сила діє на малий поршень?',
            answerOptions7_phy: [
                {answerText7_phy: '100 Н', isCorrect: false},
                {answerText7_phy: '200 Н', isCorrect: true},
                {answerText7_phy: '400 Н', isCorrect: false},
                {answerText7_phy: '800 Н', isCorrect: false}
            ]
        },
        {
            qustionText7_phy: 'У герметично закритій банці знаходиться повітря при температурі 27 ºС і нормальному атмосферному тиску. При якій температурі тиск у банці стане у 2 рази вище нормального атмосферного?',
            answerOptions7_phy: [
                {answerText7_phy: '54 ºС', isCorrect: false},
                {answerText7_phy: '13.5 ºС', isCorrect: false},
                {answerText7_phy: '600 ºС', isCorrect: false},
                {answerText7_phy: '327 ºС', isCorrect: true}
            ]
        },
        {
            qustionText7_phy: 'Для визначення поверхневого натягу рідини використовували спосіб відриву крапель. Маса 200 крапель виявилася рівною 9,2 г. Діаметр шийки краплі в момент відриву дорівнює 2 мм. Визначте поверхневий натяг рідини',
            answerOptions7_phy: [
                {answerText7_phy: '0,072 Н/м', isCorrect: true},
                {answerText7_phy: '0,062 Н/м', isCorrect: false},
                {answerText7_phy: '0,042 Н/м', isCorrect: false},
                {answerText7_phy: '0,052 Н/м', isCorrect: false}
            ]
        },
        {
            qustionText7_phy: 'Порошинка, що мала позитивний заряд 10 e, при освітленні втратила чотири електрони. Яким став заряд пилинки?',
            answerOptions7_phy: [
                {answerText7_phy: '14 е', isCorrect: true},
                {answerText7_phy: '–6 е', isCorrect: false},
                {answerText7_phy: '6 е', isCorrect: false},
                {answerText7_phy: '–14 е', isCorrect: false}
            ]
        },
        {
            qustionText7_phy: 'На скільки відсотків збільшиться опір латунного провідника при збільшенні його температури від 0 до 30 °С?',
            answerOptions7_phy: [
                {answerText7_phy: '1%', isCorrect: false},
                {answerText7_phy: '3%', isCorrect: true},
                {answerText7_phy: '4%', isCorrect: false},
                {answerText7_phy: '2%', isCorrect: false}
            ]
        },
        {
            qustionText7_phy: 'При коливаннях маятника його координата змінюється за законом: х = 0,05 cos(100 πt + π). Чому дорівнює амплітуда і частота коливань?',
            answerOptions7_phy: [
                {answerText7_phy: '5 см та 50 Гц', isCorrect: true},
                {answerText7_phy: '100 м та 20 Гц', isCorrect: false},
                {answerText7_phy: '0,05 м та 0,02 Гц', isCorrect: false},
                {answerText7_phy: '100 м та 0,05 Гц', isCorrect: false}
            ]
        },
        {
            qustionText7_phy: 'Укажіть фізичну величину, яка визначає гучність звуку',
            answerOptions7_phy: [
                {answerText7_phy: 'амплітуда коливань', isCorrect: true},
                {answerText7_phy: 'фаза коливань', isCorrect: false},
                {answerText7_phy: 'початкова фаза коливань', isCorrect: false},
                {answerText7_phy: 'частота коливань', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion7_phy, setCurrentQuestion7_phy] = useState(0)
    const [score7_phy, setScore7_phy] = useState(0)
    const [showScore7_phy, setShowScore7_phy] = useState(false)

    const handleAnswerOptionClick7_phy = (isCorrect) => {
        if (isCorrect) {
            setScore7_phy(score7_phy +1)
        }

        const nextQuestion7_phy = currentQuestion7_phy + 1
        if (nextQuestion7_phy < questions7_phy.length){
            setCurrentQuestion7_phy(nextQuestion7_phy)
        } else {
            setShowScore7_phy(true)
        }
    }
    return(
        <body className="p_bg7">
            <div className="variant7_phy">
                {
                    showScore7_phy
                        ? <div className="section_score7_phy">
                             <div>Правильних відповідей {score7_phy} з {questions7_phy.length}</div>
                          </div>
                        : <div className="quizz7_phy">
                            <div className="question_section7_phy">
                                <div className="question_count7_phy">
                                    <span>Питання {currentQuestion7_phy + 1} / {questions7_phy.length}</span> 
                                </div>
                                <div className="question_text7_phy">{questions7_phy[currentQuestion7_phy].qustionText7_phy}</div>
                            </div>
                            <div className="answer_section7_phy">
                                {questions7_phy[currentQuestion7_phy].answerOptions7_phy.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick7_phy(item.isCorrect)}
                                >{item.answerText7_phy}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant7_phy