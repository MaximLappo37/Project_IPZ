import React, {useState} from 'react'

import './var8_geo.css'
import image_var8_geo from './image_var8_geo.png';

function Variant8_geo(){

    const questions8_geo = [
        {
            qustionText8_geo: 'Найбільшими виробниками сільськогосподарської продукції є США, Китай, Бразилія, Індія. Що є характерним для всіх цих країн?',
            answerOptions8_geo: [
                {answerText8_geo: 'аграрна та аграрно-індустріальна структура економіки', isCorrect: false},
                {answerText8_geo: 'великі розміри території та велика кількість населення', isCorrect: true},
                {answerText8_geo: 'незначна місткість внутрішнього споживчого ринку', isCorrect: false},
                {answerText8_geo: 'екстенсивний шлях розвитку аграрного виробництва', isCorrect: false}
            ]
        },
        {
            qustionText8_geo: 'Який основний чинник зумовив розвиток алюмінієвої промисловості в Катарі, Бахрейні, Кувейті, Об’єднаних Арабських Еміратах?',
            answerOptions8_geo: [
                {answerText8_geo: 'великі запаси бокситів у надрах країн', isCorrect: false},
                {answerText8_geo: 'водні ресурси Перської затоки', isCorrect: false},
                {answerText8_geo: 'забезпеченість енергоресурсами', isCorrect: true},
                {answerText8_geo: 'дешева робоча сила', isCorrect: false}
            ]
        },
        {
            qustionText8_geo: 'Визначте подібні риси рельєфу Південної Америки та Північної Америки',
            answerOptions8_geo: [
                {answerText8_geo: 'переважають низовини, розмежовані низькими гірськими хребтами', isCorrect: false},
                {answerText8_geo: 'домінують плоскогір’я, гори простягаються в широтному напрямку', isCorrect: false},
                {answerText8_geo: 'із заходу на схід низовини переходять у височини та високі нагір’я', isCorrect: false},
                {answerText8_geo: 'на заході простягаються високі гори, на сході переважають рівнини', isCorrect: true}
            ]
        },
        {
            qustionText8_geo: <img
                                src={image_var8_geo}
                                height="467"
                                width="465"
                                alt="Logo"
                               />,
            answerOptions8_geo: [
                {answerText8_geo: 'руху айсбергів', isCorrect: false},
                {answerText8_geo: 'міграції білих ведмедів', isCorrect: false},
                {answerText8_geo: 'стокових вітрів', isCorrect: true},
                {answerText8_geo: 'зміщення меж природних зон', isCorrect: false}
            ]
        },
        {
            qustionText8_geo: 'У Тихому океані знаходиться',
            answerOptions8_geo: [
                {answerText8_geo: 'Гвінейська затока', isCorrect: false},
                {answerText8_geo: 'Маріанський жолоб', isCorrect: true},
                {answerText8_geo: 'хребет Ломоносова', isCorrect: false},
                {answerText8_geo: 'Аравійське море', isCorrect: false}
            ]
        },
        {
            qustionText8_geo: 'В Австралії боксити залягають на поверхні потужними пластами (до 10 м). Визначте особливості розроблення цих родовищ',
            answerOptions8_geo: [
                {answerText8_geo: 'великі кар’єри, низькі затрати', isCorrect: true},
                {answerText8_geo: 'глибокі рудники, значна капіталомісткість', isCorrect: false},
                {answerText8_geo: 'автоматизовані шахти, загроза землетрусів', isCorrect: false},
                {answerText8_geo: 'свердловини, високий рівень безпеки', isCorrect: false}
            ]
        },
        {
            qustionText8_geo: 'Яка природна зона в Євразії та в Північній Америці простягається суцільною смугою із заходу на схід, перериваючись лише в гірських районах?',
            answerOptions8_geo: [
                {answerText8_geo: 'тайга', isCorrect: true},
                {answerText8_geo: 'мусонні ліси', isCorrect: false},
                {answerText8_geo: 'савани й рідколісся', isCorrect: false},
                {answerText8_geo: 'вічнозелені твердолисті ліси й чагарники', isCorrect: false}
            ]
        },
        {
            qustionText8_geo: 'Річки басейну Північного Льодовитого океану протікають у помірному та субарктичному кліматичних поясах. Який наслідок такого положення й напрямку течії цих річок?',
            answerOptions8_geo: [
                {answerText8_geo: 'переважно рівнинний характер течії, місцями - пороги в руслах', isCorrect: false},
                {answerText8_geo: 'тривала весняна повінь, спочатку у верхній течії, потім - у нижній', isCorrect: true},
                {answerText8_geo: 'паводковий режим річок, часто з катастрофічними наслідками', isCorrect: false},
                {answerText8_geo: 'льодостав у верхній течії, можливість цілорічної навігації - у нижній', isCorrect: false}
            ]
        },
        {
            qustionText8_geo: 'Сила вітру залежить від',
            answerOptions8_geo: [
                {answerText8_geo: 'відносної висоти місцевості', isCorrect: false},
                {answerText8_geo: 'віддаленості суходолу від океану', isCorrect: false},
                {answerText8_geo: 'прозорості атмосфери', isCorrect: false},
                {answerText8_geo: 'різниці атмосферного тиску', isCorrect: true}
            ]
        },
        {
            qustionText8_geo: 'Що є проявом міжнародної економічної інтеграції?',
            answerOptions8_geo: [
                {answerText8_geo: 'зростання ролі сфери послуг і зменшення ролі сфери матеріального виробництва', isCorrect: false},
                {answerText8_geo: 'становлення євро як регіональної та світової валюти', isCorrect: true},
                {answerText8_geo: 'збільшення частки наукомістких виробництв у розвинених країнах', isCorrect: false},
                {answerText8_geo: 'збільшення розриву між рівнями економічного розвитку окремих країн', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion8_geo, setCurrentQuestion8_geo] = useState(0)
    const [score8_geo, setScore8_geo] = useState(0)
    const [showScore8_geo, setShowScore8_geo] = useState(false)

    const handleAnswerOptionClick8_geo = (isCorrect) => {
        if (isCorrect) {
            setScore8_geo(score8_geo +1)
        }

        const nextQuestion8_geo = currentQuestion8_geo + 1
        if (nextQuestion8_geo < questions8_geo.length){
            setCurrentQuestion8_geo(nextQuestion8_geo)
        } else {
            setShowScore8_geo(true)
        }
    }
    return(
        <body className="g_bg8">
            <div className="variant8_geo">
                {
                    showScore8_geo
                        ? <div className="section_score8_geo">
                             <div>Правильних відповідей {score8_geo} з {questions8_geo.length}</div>
                          </div>
                        : <div className="quizz8_geo">
                            <div className="question_section8_geo">
                                <div className="question_count8_geo">
                                    <span>Питання {currentQuestion8_geo + 1} / {questions8_geo.length}</span> 
                                </div>
                                <div className="question_text8_geo">{questions8_geo[currentQuestion8_geo].qustionText8_geo}</div>
                            </div>
                            <div className="answer_section8_geo">
                                {questions8_geo[currentQuestion8_geo].answerOptions8_geo.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick8_geo(item.isCorrect)}
                                >{item.answerText8_geo}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant8_geo