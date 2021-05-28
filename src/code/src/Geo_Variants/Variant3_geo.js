import React, {useState} from 'react'

import './var3_geo.css'


function Variant3_geo(){

    const questions3_geo = [
        {
            qustionText3_geo: 'Укажіть головну причину утворення й закономірного розташування сучасних материків',
            answerOptions3_geo: [
                {answerText3_geo: 'метаморфізація гірських порід', isCorrect: false},
                {answerText3_geo: 'коливальні рухи земної кори', isCorrect: false},
                {answerText3_geo: 'рух літосферних плит', isCorrect: true},
                {answerText3_geo: 'Північної Америки', isCorrect: false}
            ]
        },
        {
            qustionText3_geo: 'До групи осадових гірських порід уламкового походження відносять',
            answerOptions3_geo: [
                {answerText3_geo: 'кам’яне вугілля', isCorrect: false},
                {answerText3_geo: 'кам’яну сіль', isCorrect: false},
                {answerText3_geo: 'вапняк', isCorrect: false},
                {answerText3_geo: 'пісок', isCorrect: true}
            ]
        },
        {
            qustionText3_geo: 'Що спільного в рельєфі Африки, Австралії та Південної Америки?',
            answerOptions3_geo: [
                {answerText3_geo: 'на півночі цих материків - плоскогір`я, а на півдні - низовини', isCorrect: false},
                {answerText3_geo: 'у центральній частині кожного материка - гори й нагір`я', isCorrect: false},
                {answerText3_geo: 'на цих материках переважають рівнини різної висоти', isCorrect: true},
                {answerText3_geo: 'домінують низовини з ерозійними формами поверхні', isCorrect: false}
            ]
        },
        {
            qustionText3_geo: 'У якій геосфері відбуваються явища, що породжують цунамі?',
            answerOptions3_geo: [
                {answerText3_geo: 'літосфері', isCorrect: true},
                {answerText3_geo: 'біосфері', isCorrect: false},
                {answerText3_geo: 'атмосфері', isCorrect: false},
                {answerText3_geo: 'гідросфері', isCorrect: false}
            ]
        },
        {
            qustionText3_geo: 'Давні за віком гори, що утворилися в період герцинського горотворення (палеозойська ера), є високими й мають круті схили, тому що',
            answerOptions3_geo: [
                {answerText3_geo: 'складені породами кайнозойського віку, які не руйнуються', isCorrect: false},
                {answerText3_geo: 'розташовані в регіоні, де слабкий вплив зовнішніх сил Землі', isCorrect: false},
                {answerText3_geo: 'змінені інтенсивною вулканічною діяльністю в архейську еру', isCorrect: false},
                {answerText3_geo: 'зазнали підняття протягом наступних періодів горотворення', isCorrect: true}
            ]
        },
        {
            qustionText3_geo: 'Які вітри двічі протягом року змінюють свій напрям на протилежний?',
            answerOptions3_geo: [
                {answerText3_geo: 'бризи', isCorrect: false},
                {answerText3_geo: 'мусони', isCorrect: true},
                {answerText3_geo: 'пасати', isCorrect: false},
                {answerText3_geo: 'циклони', isCorrect: false}
            ]
        },
        {
            qustionText3_geo: 'Сила вітру залежить від',
            answerOptions3_geo: [
                {answerText3_geo: 'відносної висоти місцевості', isCorrect: false},
                {answerText3_geo: 'віддаленості суходолу від океану', isCorrect: false},
                {answerText3_geo: 'прозорості атмосфери', isCorrect: false},
                {answerText3_geo: 'різниці атмосферного тиску', isCorrect: true}
            ]
        },
        {
            qustionText3_geo: 'Що зумовлює формування області високого тиску над Антарктикою?',
            answerOptions3_geo: [
                {answerText3_geo: 'велика кількість твердих опадів', isCorrect: false},
                {answerText3_geo: 'потужні стокові вітри', isCorrect: false},
                {answerText3_geo: 'низька температура повітря', isCorrect: true},
                {answerText3_geo: 'висока вологість повітря', isCorrect: false}
            ]
        },
        {
            qustionText3_geo: 'Пасажири літака в ілюмінатори спостерігали над Європою лише хмари, а над Гренландією - білосніжну арктичну кригу. Чому над Гренландією не було хмар?',
            answerOptions3_geo: [
                {answerText3_geo: 'почався полярний день', isCorrect: false},
                {answerText3_geo: 'утворилася озонова діра', isCorrect: false},
                {answerText3_geo: 'панував антициклон', isCorrect: true},
                {answerText3_geo: 'охолола поверхня океану', isCorrect: false}
            ]
        },
        {
            qustionText3_geo: 'Які вітри формуються внаслідок відмінностей у нагріванні поверхні суходолу й акваторії океану?',
            answerOptions3_geo: [
                {answerText3_geo: 'пасати', isCorrect: false},
                {answerText3_geo: 'західні', isCorrect: false},
                {answerText3_geo: 'мусони', isCorrect: true},
                {answerText3_geo: 'фени', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion3_geo, setCurrentQuestion3_geo] = useState(0)
    const [score3_geo, setScore3_geo] = useState(0)
    const [showScore3_geo, setShowScore3_geo] = useState(false)

    const handleAnswerOptionClick3_geo = (isCorrect) => {
        if (isCorrect) {
            setScore3_geo(score3_geo +1)
        }

        const nextQuestion3_geo = currentQuestion3_geo + 1
        if (nextQuestion3_geo < questions3_geo.length){
            setCurrentQuestion3_geo(nextQuestion3_geo)
        } else {
            setShowScore3_geo(true)
        }
    }
    return(
        <body className="g_bg3">
            <div className="variant3_geo">
                {
                    showScore3_geo
                        ? <div className="section_score3_geo">
                             <div>Правильних відповідей {score3_geo} з {questions3_geo.length}</div>
                          </div>
                        : <div className="quizz3_geo">
                            <div className="question_section3_geo">
                                <div className="question_count3_geo">
                                    <span>Питання {currentQuestion3_geo + 1} / {questions3_geo.length}</span> 
                                </div>
                                <div className="question_text3_geo">{questions3_geo[currentQuestion3_geo].qustionText3_geo}</div>
                            </div>
                            <div className="answer_section3_geo">
                                {questions3_geo[currentQuestion3_geo].answerOptions3_geo.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick3_geo(item.isCorrect)}
                                >{item.answerText3_geo}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant3_geo