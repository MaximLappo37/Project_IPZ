import React, {useState} from 'react'

import './var5_geo.css'
import image_var5_geo from './image_var5_geo.png';

function Variant5_geo(){

    const questions5_geo = [
        {
            qustionText5_geo: 'Ератосфен прагнув досягнути точного визначення відстаней за картою, тому ввів поняття:',
            answerOptions5_geo: [
                {answerText5_geo: 'паралелі та меридіани', isCorrect: true},
                {answerText5_geo: 'азимут і градус', isCorrect: false},
                {answerText5_geo: 'полюси та тропіки', isCorrect: false},
                {answerText5_geo: 'лінійка та масштаб', isCorrect: false}
            ]
        },
        {
            qustionText5_geo: 'Яка низовина є осередком виникнення зрошувального землеробства?',
            answerOptions5_geo: [
                {answerText5_geo: 'Центральна', isCorrect: false},
                {answerText5_geo: 'Амазонська', isCorrect: false},
                {answerText5_geo: 'Месопотамська', isCorrect: true},
                {answerText5_geo: 'Придніпровська', isCorrect: false}
            ]
        },
        {
            qustionText5_geo: 'Укажіть гори Євразії, на південних схилах яких можна спостерігати найбільшу кількість висотних поясів.',
            answerOptions5_geo: [
                {answerText5_geo: 'Карпати', isCorrect: false},
                {answerText5_geo: 'Альпи', isCorrect: false},
                {answerText5_geo: 'Кавказ', isCorrect: false},
                {answerText5_geo: 'Гімалаї', isCorrect: true}
            ]
        },
        {
            qustionText5_geo: <img
                                src={image_var5_geo}
                                height="322"
                                width="600"
                                alt="Logo"
                                />,
            answerOptions5_geo: [
                {answerText5_geo: '10∘ пд. ш., 45∘ зх. д.', isCorrect: false},
                {answerText5_geo: '10∘ пн. ш., 45∘ сх. д.', isCorrect: true},
                {answerText5_geo: '45∘ пд. ш., 10∘ зх. д.', isCorrect: false},
                {answerText5_geo: '45∘ пн. ш., 10∘ сх. д.', isCorrect: false}
            ]
        },
        {
            qustionText5_geo: 'Для якої області помірного кліматичного поясу характерна найнижча температура повітря взимку?',
            answerOptions5_geo: [
                {answerText5_geo: 'морського помірного', isCorrect: false},
                {answerText5_geo: 'помірно континентального', isCorrect: false},
                {answerText5_geo: 'континентального', isCorrect: true},
                {answerText5_geo: 'мусонного', isCorrect: false}
            ]
        },
        {
            qustionText5_geo: 'У якому географічному поясі поширені коричневі ґрунти?',
            answerOptions5_geo: [
                {answerText5_geo: 'субтропічному', isCorrect: true},
                {answerText5_geo: 'тропічному', isCorrect: false},
                {answerText5_geo: 'субекваторіальному', isCorrect: false},
                {answerText5_geo: 'екваторіальному', isCorrect: false}
            ]
        },
        {
            qustionText5_geo: 'Яка тектонічна структура лежить в основі Антарктиди?',
            answerOptions5_geo: [
                {answerText5_geo: 'давня докембрійська платформа', isCorrect: true},
                {answerText5_geo: 'молода палеозойська платформа', isCorrect: false},
                {answerText5_geo: 'система розломів (рифтів)', isCorrect: false},
                {answerText5_geo: 'область мезозойської складчастості', isCorrect: false}
            ]
        },
        {
            qustionText5_geo: 'Що характерне для осередку землетрусу?',
            answerOptions5_geo: [
                {answerText5_geo: 'розрив і зміщення земної кори', isCorrect: true},
                {answerText5_geo: 'перетворення магми на лаву', isCorrect: false},
                {answerText5_geo: 'виникнення цунамі', isCorrect: false},
                {answerText5_geo: 'утворення зсувів', isCorrect: false}
            ]
        },
        {
            qustionText5_geo: 'Вперше висловили думку про кулястість Землі:',
            answerOptions5_geo: [
                {answerText5_geo: 'єгиптяни', isCorrect: false},
                {answerText5_geo: 'стародавні римляни', isCorrect: false},
                {answerText5_geo: 'стародавні греки', isCorrect: true},
                {answerText5_geo: 'вікінги', isCorrect: false}
            ]
        },
        {
            qustionText5_geo: 'Визначте, якою буде відстань між двома об’єктами на місцевості, якщо на плані масштабу 1:500 відстань між ними 10 см.',
            answerOptions5_geo: [
                {answerText5_geo: '5 м', isCorrect: false},
                {answerText5_geo: '200 м', isCorrect: false},
                {answerText5_geo: '20 м', isCorrect: false},
                {answerText5_geo: '50 м', isCorrect: true}
            ]
        }
    ]

    const [currentQuestion5_geo, setCurrentQuestion5_geo] = useState(0)
    const [score5_geo, setScore5_geo] = useState(0)
    const [showScore5_geo, setShowScore5_geo] = useState(false)

    const handleAnswerOptionClick5_geo = (isCorrect) => {
        if (isCorrect) {
            setScore5_geo(score5_geo +1)
        }

        const nextQuestion5_geo = currentQuestion5_geo + 1
        if (nextQuestion5_geo < questions5_geo.length){
            setCurrentQuestion5_geo(nextQuestion5_geo)
        } else {
            setShowScore5_geo(true)
        }
    }
    return(
        <body className="g_bg5">
            <div className="variant5_geo">
                {
                    showScore5_geo
                        ? <div className="section_score5_geo">
                             <div>Правильних відповідей {score5_geo} з {questions5_geo.length}</div>
                          </div>
                        : <div className="quizz5_geo">
                            <div className="question_section5_geo">
                                <div className="question_count5_geo">
                                    <span>Питання {currentQuestion5_geo + 1} / {questions5_geo.length}</span> 
                                </div>
                                <div className="question_text5_geo">{questions5_geo[currentQuestion5_geo].qustionText5_geo}</div>
                            </div>
                            <div className="answer_section5_geo">
                                {questions5_geo[currentQuestion5_geo].answerOptions5_geo.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick5_geo(item.isCorrect)}
                                >{item.answerText5_geo}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant5_geo