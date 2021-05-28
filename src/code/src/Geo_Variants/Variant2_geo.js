import React, {useState} from 'react'

import './var2_geo.css'


function Variant2_geo(){

    const questions2_geo = [
        {
            qustionText2_geo: 'До узбережжя якого материка прибуде судно, що рухається, не змінюючи курсу, від берегів Японії за азимутом 90∘?',
            answerOptions2_geo: [
                {answerText2_geo: 'Австралії', isCorrect: false},
                {answerText2_geo: 'Антарктиди', isCorrect: false},
                {answerText2_geo: 'Південної Америки', isCorrect: false},
                {answerText2_geo: 'Північної Америки', isCorrect: true}
            ]
        },
        {
            qustionText2_geo: 'У якому напрямку рухається пішохід, якщо Полярну зірку він бачить праворуч від себе?',
            answerOptions2_geo: [
                {answerText2_geo: 'на північ', isCorrect: false},
                {answerText2_geo: 'на південь', isCorrect: false},
                {answerText2_geo: 'на схід', isCorrect: false},
                {answerText2_geo: 'на захід', isCorrect: true}
            ]
        },
        {
            qustionText2_geo: 'У північній частині якого материка неможливо побачити Полярну зірку?',
            answerOptions2_geo: [
                {answerText2_geo: 'Євразії', isCorrect: false},
                {answerText2_geo: 'Північної Америки', isCorrect: false},
                {answerText2_geo: 'Африки', isCorrect: false},
                {answerText2_geo: 'Австралії', isCorrect: true}
            ]
        },
        {
            qustionText2_geo: 'Найбільшу відстань подолає літак із гуманітарною допомогою для постраждалих від землетрусу на острові Гаїті, що прямує до столиці країни Порт-о-Пренса з',
            answerOptions2_geo: [
                {answerText2_geo: 'Мехіко', isCorrect: false},
                {answerText2_geo: 'Мадрида', isCorrect: false},
                {answerText2_geo: 'Москви', isCorrect: false},
                {answerText2_geo: 'Маніли', isCorrect: true}
            ]
        },
        {
            qustionText2_geo: 'Найпоширеніший на політичній карті світу тип держави',
            answerOptions2_geo: [
                {answerText2_geo: 'федерація', isCorrect: false},
                {answerText2_geo: 'монархія', isCorrect: false},
                {answerText2_geo: 'республіка', isCorrect: true},
                {answerText2_geo: 'конфедерація', isCorrect: false}
            ]
        },
        {
            qustionText2_geo: 'Виникнення глобальних екологічних проблем зумовлено передусім нехтуванням людством такої закономірності розвитку географічної оболонки, як',
            answerOptions2_geo: [
                {answerText2_geo: 'цілісність', isCorrect: true},
                {answerText2_geo: 'ритмічність', isCorrect: false},
                {answerText2_geo: 'широтна зональність', isCorrect: false},
                {answerText2_geo: 'висотна поясність', isCorrect: false}
            ]
        },
        {
            qustionText2_geo: 'Земна вісь — це уявна пряма лінія, що проходить через центр Землі та',
            answerOptions2_geo: [
                {answerText2_geo: 'лінію екватора', isCorrect: false},
                {answerText2_geo: 'магнітні полюси', isCorrect: false},
                {answerText2_geo: 'географічні полюси', isCorrect: true},
                {answerText2_geo: 'точку з координатами 0∘ ш. і 0∘ д.', isCorrect: false}
            ]
        },
        {
            qustionText2_geo: 'Вперше обґрунтував у своїй книзі правильність припущення про те, що Земля обертається навколо Сонця, а не Сонце навколо Землі',
            answerOptions2_geo: [
                {answerText2_geo: 'Міколай Коперник', isCorrect: true},
                {answerText2_geo: 'Дмитро Менделєєв', isCorrect: false},
                {answerText2_geo: 'Фернан Магеллан', isCorrect: false},
                {answerText2_geo: 'Гійом Боплан', isCorrect: false}
            ]
        },
        {
            qustionText2_geo: 'На якому півострові бувають дні, коли сонячні промені падають на дно найглибших колодязів?',
            answerOptions2_geo: [
                {answerText2_geo: 'Скандинавський', isCorrect: false},
                {answerText2_geo: 'Кримський', isCorrect: false},
                {answerText2_geo: 'Лабрадор', isCorrect: false},
                {answerText2_geo: 'Сомалі', isCorrect: true}
            ]
        },
        {
            qustionText2_geo: 'Наслідком обертання Землі навколо своєї осі є',
            answerOptions2_geo: [
                {answerText2_geo: 'зміна пір року', isCorrect: false},
                {answerText2_geo: 'зміна дня і ночі', isCorrect: true},
                {answerText2_geo: 'широтна зональність у природі', isCorrect: false},
                {answerText2_geo: 'нахил земної осі до площини орбіти', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion2_geo, setCurrentQuestion2_geo] = useState(0)
    const [score2_geo, setScore2_geo] = useState(0)
    const [showScore2_geo, setShowScore2_geo] = useState(false)

    const handleAnswerOptionClick2_geo = (isCorrect) => {
        if (isCorrect) {
            setScore2_geo(score2_geo +1)
        }

        const nextQuestion2_geo = currentQuestion2_geo + 1
        if (nextQuestion2_geo < questions2_geo.length){
            setCurrentQuestion2_geo(nextQuestion2_geo)
        } else {
            setShowScore2_geo(true)
        }
    }
    return(
        <body className="g_bg2">
            <div className="variant2_geo">
                {
                    showScore2_geo
                        ? <div className="section_score2_geo">
                             <div>Правильних відповідей {score2_geo} з {questions2_geo.length}</div>
                          </div>
                        : <div className="quizz2_geo">
                            <div className="question_section2_geo">
                                <div className="question_count2_geo">
                                    <span>Питання {currentQuestion2_geo + 1} / {questions2_geo.length}</span> 
                                </div>
                                <div className="question_text2_geo">{questions2_geo[currentQuestion2_geo].qustionText2_geo}</div>
                            </div>
                            <div className="answer_section2_geo">
                                {questions2_geo[currentQuestion2_geo].answerOptions2_geo.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick2_geo(item.isCorrect)}
                                >{item.answerText2_geo}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant2_geo