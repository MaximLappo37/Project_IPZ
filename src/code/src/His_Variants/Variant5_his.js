import React, {useState} from 'react'

import './var5_his.css'


function Variant5_his(){

    const questions5_his = [
        {
            qustionText5_his: 'Що стало одним із наслідків Другої світової війни (1939–1945 рр.)?',
            answerOptions5_his: [
                {answerText5_his: 'розширення політичного впливу СРСР і США в Європі та світі', isCorrect: true},
                {answerText5_his: 'узгодження СРСР і США спільних принципів політики щодо Німеччини', isCorrect: false},
                {answerText5_his: 'зміцнення зв’язків СРСР із країнами — засновницями Антигітлерівської коаліції', isCorrect: false},
                {answerText5_his: 'поглиблення військово-економічного співробітництва між СРСР і США', isCorrect: false}
            ]
        },
        {
            qustionText5_his: 'Позначте період, в якому існувала Трипільська культура',
            answerOptions5_his: [
                {answerText5_his: 'Енеоліт', isCorrect: true},
                {answerText5_his: 'Неоліт', isCorrect: false},
                {answerText5_his: 'Мезоліт', isCorrect: false},
                {answerText5_his: 'Палеоліт', isCorrect: false}
            ]
        },
        {
            qustionText5_his: 'У розвитку якого князівства найбільше проявлялися тенденції в соціально-політичному розвитку, притаманні країнам Західної Європи?',
            answerOptions5_his: [
                {answerText5_his: 'Київського', isCorrect: false},
                {answerText5_his: 'Переяславського', isCorrect: false},
                {answerText5_his: 'Галицького', isCorrect: true},
                {answerText5_his: 'Чернігівського', isCorrect: false}
            ]
        },
        {
            qustionText5_his: 'Укажіть один із наслідків економічної політики уряду президента США Р. Рейгана, що увійшла в історію під назвою «рейганоміка».',
            answerOptions5_his: [
                {answerText5_his: 'скорочення військових витрат федерального бюджету', isCorrect: false},
                {answerText5_his: 'збільшення фінансування федеральних соціальних програм', isCorrect: false},
                {answerText5_his: 'розширення державного сектору в базових галузях економіки', isCorrect: false},
                {answerText5_his: 'зростання частки наукомістких галузей промисловості', isCorrect: true}
            ]
        },
        {
            qustionText5_his: 'Про яку область ідеться в уривку з історичного джерела:                              «Війни не буде! Гітлер запросив Муссоліні, Чемберлена, Даладьє зустрітися з ним завтра в Мюнхені. Ця трійця позбавить його від цієї «неслухняної дитини» Чехословаччини і він отримає свою область без війни. Лише на декілька днів пізніше ніж обіцяв…»?',
            answerOptions5_his: [
                {answerText5_his: 'Судетську', isCorrect: true},
                {answerText5_his: 'Тешинську', isCorrect: false},
                {answerText5_his: 'Рейнську', isCorrect: false},
                {answerText5_his: 'Сілезьку', isCorrect: false}
            ]
        },
        {
            qustionText5_his: 'Трипільці проживали на території:',
            answerOptions5_his: [
                {answerText5_his: 'Криму, Слобожанщини', isCorrect: false},
                {answerText5_his: 'Східної України, Українського степу', isCorrect: false},
                {answerText5_his: 'Лівобережної України, Криму', isCorrect: false},
                {answerText5_his: 'Правобережної України, Подніпров’я', isCorrect: true}
            ]
        },
        {
            qustionText5_his: 'Князь Костянтин Іванович Острозький уславився як полководець у війнах із:',
            answerOptions5_his: [
                {answerText5_his: 'Османською імперією і Тевтонським орденом', isCorrect: false},
                {answerText5_his: 'Угорським королівством і Молдавським князівством', isCorrect: false},
                {answerText5_his: 'Польським королівством і Великим князівством Литовським', isCorrect: false},
                {answerText5_his: 'кримськими татарами і Московським царством', isCorrect: true}
            ]
        },
        {
            qustionText5_his: 'Які терміни й поняття слід використовувати для характеристики процесу радянізації на західноукраїнських землях у 1939—1941 рр.?',
            answerOptions5_his: [
                {answerText5_his: '«культурна революція», кооперація, евакуація, депопуляція', isCorrect: false},
                {answerText5_his: 'індустріалізація, суцільна колективізація, «червоний терор»', isCorrect: false},
                {answerText5_his: 'націоналізація, депортація, українізація, репресії', isCorrect: true},
                {answerText5_his: 'відбудова, інкорпорація, мілітаризація, мобілізація', isCorrect: false}
            ]
        },
        {
            qustionText5_his: 'Збройний опір Червоній армії під час їх вступу на територію західноукраїнських земель у 1939—1940 рр. чинили:',
            answerOptions5_his: [
                {answerText5_his: 'загони ОУН та УПА', isCorrect: false},
                {answerText5_his: 'підрозділи румунської армії', isCorrect: false},
                {answerText5_his: 'підрозділи польської армії', isCorrect: true},
                {answerText5_his: 'місцеве населення', isCorrect: false}
            ]
        },
        {
            qustionText5_his: 'Північна Буковина увійшла до складу УРСР:',
            answerOptions5_his: [
                {answerText5_his: '1938 р.', isCorrect: false},
                {answerText5_his: '1939 р.', isCorrect: false},
                {answerText5_his: '1940 р.', isCorrect: true},
                {answerText5_his: '1941 р.', isCorrect: false}
            ]
        },
    ]

    const [currentQuestion5_his, setCurrentQuestion5_his] = useState(0)
    const [score5_his, setScore5_his] = useState(0)
    const [showScore5_his, setShowScore5_his] = useState(false)

    const handleAnswerOptionClick5_his = (isCorrect) => {
        if (isCorrect) {
            setScore5_his(score5_his +1)
        }

        const nextQuestion5_his = currentQuestion5_his + 1
        if (nextQuestion5_his < questions5_his.length){
            setCurrentQuestion5_his(nextQuestion5_his)
        } else {
            setShowScore5_his(true)
        }
    }
    return(
        <body className="h_bg5">
            <div className="variant5_his">
                {
                    showScore5_his
                        ? <div className="section_score5_his">
                             <div>Правильних відповідей {score5_his} з {questions5_his.length}</div>
                          </div>
                        : <div className="quizz5_his">
                            <div className="question_section5_his">
                                <div className="question_count5_his">
                                    <span>Питання {currentQuestion5_his + 1} / {questions5_his.length}</span> 
                                </div>
                                <div className="question_text5_his">{questions5_his[currentQuestion5_his].qustionText5_his}</div>
                            </div>
                            <div className="answer_section5_his">
                                {questions5_his[currentQuestion5_his].answerOptions5_his.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick5_his(item.isCorrect)}
                                >{item.answerText5_his}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant5_his