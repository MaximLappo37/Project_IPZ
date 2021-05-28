import React, {useState} from 'react'

import './var9_geo.css'


function Variant9_geo(){

    const questions9_geo = [
        {
            qustionText9_geo: 'Що зумовлює меншу кількість сумарної сонячної радіації в західних областях України порівняно з розташованими на тих самих широтах східними областями?',
            answerOptions9_geo: [
                {answerText9_geo: 'менший кут падіння сонячного проміння', isCorrect: false},
                {answerText9_geo: 'більше хмарних днів протягом року', isCorrect: true},
                {answerText9_geo: 'менша тривалість світлового дня', isCorrect: false},
                {answerText9_geo: 'більша запиленість атмосфери', isCorrect: false}
            ]
        },
        {
            qustionText9_geo: 'Укажіть головну причину утворення й сучасного розташування материків та океанів.',
            answerOptions9_geo: [
                {answerText9_geo: 'процеси метаморфізації в літосфері', isCorrect: false},
                {answerText9_geo: 'коливальні рухи земної кори', isCorrect: false},
                {answerText9_geo: 'рух літосферних плит', isCorrect: true},
                {answerText9_geo: 'виверження вулканів', isCorrect: false}
            ]
        },
        {
            qustionText9_geo: 'Яка особливість річок в Українських Карпатах є чинником розвитку гідроенергетики в цьому регіоні?',
            answerOptions9_geo: [
                {answerText9_geo: 'формують широку заплаву', isCorrect: false},
                {answerText9_geo: 'взимку не замерзають', isCorrect: false},
                {answerText9_geo: 'навесні виходять з берегів', isCorrect: false},
                {answerText9_geo: 'мають великий похил', isCorrect: true}
            ]
        },
        {
            qustionText9_geo: 'Укажіть приклад раціонального природокористування',
            answerOptions9_geo: [
                {answerText9_geo: 'багаторазове використання води на підприємстві', isCorrect: true},
                {answerText9_geo: 'насипання териконів поблизу вугільних шахт', isCorrect: false},
                {answerText9_geo: 'розорювання цілинних ділянок степу', isCorrect: false},
                {answerText9_geo: 'поздовжня оранка схилів на полях', isCorrect: false}
            ]
        },
        {
            qustionText9_geo: 'Що зумовило формування найбільшого в Україні Придніпровського району чорної металургії?',
            answerOptions9_geo: [
                {answerText9_geo: 'прикордонне розташування району на сході країни', isCorrect: false},
                {answerText9_geo: 'відкриття вугільного басейну на Правобережжі', isCorrect: false},
                {answerText9_geo: 'освоєння родовищ залізної та марганцевої руди', isCorrect: true},
                {answerText9_geo: 'будівництво штучного каналу «Дніпро - Донбас»', isCorrect: false}
            ]
        },
        {
            qustionText9_geo: 'Які зміни в природі могли б зумовити утворення льодовиків в Українських Карпатах?',
            answerOptions9_geo: [
                {answerText9_geo: 'зниження середньорічної температури повітря, збільшення висоти гір', isCorrect: true},
                {answerText9_geo: 'посилення впливу циклонів, прискорення процесу руйнування гір', isCorrect: false},
                {answerText9_geo: 'збільшення кількості опадів, зменшення поверхневого стоку', isCorrect: false},
                {answerText9_geo: 'зменшення частоти сейсмічних явищ, знелісення гірських схилів', isCorrect: false}
            ]
        },
        {
            qustionText9_geo: 'Між якими видами економічної діяльності виробничі зв`язки з постачання сировини в Україні забезпечує переважно автомобільний транспорт?',
            answerOptions9_geo: [
                {answerText9_geo: 'вирощування цукрових буряків - виробництво цукру', isCorrect: true},
                {answerText9_geo: 'видобування нафти - виробництво нафтопродуктів', isCorrect: false},
                {answerText9_geo: 'видобування природного газу - виробництво електроенергії', isCorrect: false},
                {answerText9_geo: 'виробництво коксу - виплавка чавуну', isCorrect: false}
            ]
        },
        {
            qustionText9_geo: 'Яке значення морських експедицій, очолюваних Х. Колумбом?',
            answerOptions9_geo: [
                {answerText9_geo: 'відкрито нову частину світу для європейців', isCorrect: true},
                {answerText9_geo: 'прокладено морський шлях з Європи до Індії', isCorrect: false},
                {answerText9_geo: 'створено першу карту шести континентів', isCorrect: false},
                {answerText9_geo: 'пройдено каналом з Атлантики в Тихий океан', isCorrect: false}
            ]
        },
        {
            qustionText9_geo: 'У північній частині якого материка неможливо побачити Полярну зірку?',
            answerOptions9_geo: [
                {answerText9_geo: 'Євразії', isCorrect: false},
                {answerText9_geo: 'Північної Америки', isCorrect: false},
                {answerText9_geo: 'Африки', isCorrect: false},
                {answerText9_geo: 'Австралії', isCorrect: true}
            ]
        },
        {
            qustionText9_geo: 'Червоне море є внутрішнім, знаходиться між тропічними пустелями, у нього не впадає жодна річка. Чому воно не може випаруватися і висохнути?',
            answerOptions9_geo: [
                {answerText9_geo: 'отримує ропу з Мертвого моря', isCorrect: false},
                {answerText9_geo: 'поповнюється підземними джерелами', isCorrect: false},
                {answerText9_geo: 'знаходиться в тектонічному розломі', isCorrect: false},
                {answerText9_geo: 'сполучене протокою з Індійським океаном', isCorrect: true}
            ]
        }
    ]

    const [currentQuestion9_geo, setCurrentQuestion9_geo] = useState(0)
    const [score9_geo, setScore9_geo] = useState(0)
    const [showScore9_geo, setShowScore9_geo] = useState(false)

    const handleAnswerOptionClick9_geo = (isCorrect) => {
        if (isCorrect) {
            setScore9_geo(score9_geo +1)
        }

        const nextQuestion9_geo = currentQuestion9_geo + 1
        if (nextQuestion9_geo < questions9_geo.length){
            setCurrentQuestion9_geo(nextQuestion9_geo)
        } else {
            setShowScore9_geo(true)
        }
    }
    return(
        <body className="g_bg9">
            <div className="variant9_geo">
                {
                    showScore9_geo
                        ? <div className="section_score9_geo">
                             <div>Правильних відповідей {score9_geo} з {questions9_geo.length}</div>
                          </div>
                        : <div className="quizz9_geo">
                            <div className="question_section9_geo">
                                <div className="question_count9_geo">
                                    <span>Питання {currentQuestion9_geo + 1} / {questions9_geo.length}</span> 
                                </div>
                                <div className="question_text9_geo">{questions9_geo[currentQuestion9_geo].qustionText9_geo}</div>
                            </div>
                            <div className="answer_section9_geo">
                                {questions9_geo[currentQuestion9_geo].answerOptions9_geo.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick9_geo(item.isCorrect)}
                                >{item.answerText9_geo}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant9_geo