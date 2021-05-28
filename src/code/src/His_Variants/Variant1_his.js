import React, {useState} from 'react'

import './var1_his.css'


function Variant1_his(){

    const questions1_his = [
        {
            qustionText1_his: 'Період Нового царства в історії Давнього Єгипту завершився',
            answerOptions1_his: [
                {answerText1_his: 'ХVІІ ст. до н. е.', isCorrect: false},
                {answerText1_his: 'ХV ст. до н. е.', isCorrect: false},
                {answerText1_his: 'ХIІІ ст. до н. е.', isCorrect: false},
                {answerText1_his: 'ХІ ст. до н. е.', isCorrect: true}
            ]
        },
        {
            qustionText1_his: 'З іменем Карла Великого пов’язано',
            answerOptions1_his: [
                {answerText1_his: 'проведення бенефіціарної реформи', isCorrect: false},
                {answerText1_his: 'хрещення франків за римським обрядом', isCorrect: false},
                {answerText1_his: 'укладення судебника «Салічна правда»', isCorrect: false},
                {answerText1_his: 'утворення Франкської імперії', isCorrect: true}
            ]
        },
        {
            qustionText1_his: 'Що стало результатом громадянських війн 49–30 рр. до н. е. в Стародавньому Римі?',
            answerOptions1_his: [
                {answerText1_his: 'установлення народного трибунату', isCorrect: false},
                {answerText1_his: 'завершення боротьби плебеїв з патриціями', isCorrect: false},
                {answerText1_his: 'утвердження диктатури Луція Корнелія Сули', isCorrect: false},
                {answerText1_his: 'установлення принципату Октавіана Августа', isCorrect: true}
            ]
        },
        {
            qustionText1_his: 'Який фактор був вирішальним у поширенні писемності на Русі?',
            answerOptions1_his: [
                {answerText1_his: 'запровадження писаних законів', isCorrect: false},
                {answerText1_his: 'розширення кордонів держави', isCorrect: false},
                {answerText1_his: 'розвиток торгівлі', isCorrect: false},
                {answerText1_his: 'запровадження християнства', isCorrect: true}
            ]
        },
        {
            qustionText1_his: 'Епоха зрілого (високого) Середньовіччя тривала впродовж',
            answerOptions1_his: [
                {answerText1_his: 'V–ІХ ст.', isCorrect: false},
                {answerText1_his: 'Х–ХІІІ ст.', isCorrect: true},
                {answerText1_his: 'ХІV–ХV ст.', isCorrect: false},
                {answerText1_his: 'ХVІ–ХVІІ ст.', isCorrect: false}
            ]
        },
        {
            qustionText1_his: 'Гуситський рух у формі релігійної боротьби в першій половині XV ст. є свідченням національного піднесення',
            answerOptions1_his: [
                {answerText1_his: 'чехів', isCorrect: true},
                {answerText1_his: 'угорців', isCorrect: false},
                {answerText1_his: 'литовців', isCorrect: false},
                {answerText1_his: 'поляків', isCorrect: false}
            ]
        },
        {
            qustionText1_his: 'Позначте назву країни, королевою якої була Анна Ярославна',
            answerOptions1_his: [
                {answerText1_his: 'Угорщина', isCorrect: false},
                {answerText1_his: 'Польща', isCorrect: false},
                {answerText1_his: 'Франція', isCorrect: true},
                {answerText1_his: 'Німеччина', isCorrect: false}
            ]
        },
        {
            qustionText1_his: 'Коли було укладено договір, який, за словами дослідників, «…заклав основи колоніальної політики піренейських держав і сформулював принципи виключних прав Іспанії та Португалії на володіння усім позаєвропейським світом»?',
            answerOptions1_his: [
                {answerText1_his: '1453 р.', isCorrect: false},
                {answerText1_his: '1494 р.', isCorrect: true},
                {answerText1_his: '1517 р.', isCorrect: false},
                {answerText1_his: '1545 р.', isCorrect: false}
            ]
        },
        {
            qustionText1_his: 'Яка причина зумовила знелюднення у ХV—ХVІ ст. значних територій України й утворення Дикого Поля?',
            answerOptions1_his: [
                {answerText1_his: 'входження українських земель до складу Великого князівства Литовського', isCorrect: false},
                {answerText1_his: 'татарсько-турецькі напади', isCorrect: true},
                {answerText1_his: 'польська експансія на українські землі', isCorrect: false},
                {answerText1_his: 'розширення кордонів Московської держави', isCorrect: false}
                ]
        },
        {
            qustionText1_his: 'Відповідно до «пакту Молотова – Ріббентропа» розмежування сфер впливу між Німеччиною  та СРСР відбулося по лінії річок',
            answerOptions1_his: [
                {answerText1_his: 'Вісла, Сян, Збруч', isCorrect: false},
                {answerText1_his: 'Збруч, Одер, Буг', isCorrect: false},
                {answerText1_his: 'Нарев, Вісла, Сян', isCorrect: true},
                {answerText1_his: 'Нарев, Вісла, Дністер', isCorrect: false}
            ]
        },
    ]

    const [currentQuestion1_his, setCurrentQuestion1_his] = useState(0)
    const [score1_his, setScore1_his] = useState(0)
    const [showScore1_his, setShowScore1_his] = useState(false)

    const handleAnswerOptionClick1_his = (isCorrect) => {
        if (isCorrect) {
            setScore1_his(score1_his +1)
        }

        const nextQuestion1_his = currentQuestion1_his + 1
        if (nextQuestion1_his < questions1_his.length){
            setCurrentQuestion1_his(nextQuestion1_his)
        } else {
            setShowScore1_his(true)
        }
    }
    return(
        <body className="h_bg1">
            <div className="variant1_his">
                {
                    showScore1_his
                        ? <div className="section_score1_his">
                             <div>Правильних відповідей {score1_his} з {questions1_his.length}</div>
                          </div>
                        : <div className="quizz1_his">
                            <div className="question_section1_his">
                                <div className="question_count1_his">
                                    <span>Питання {currentQuestion1_his + 1} / {questions1_his.length}</span> 
                                </div>
                                <div className="question_text1_his">{questions1_his[currentQuestion1_his].qustionText1_his}</div>
                            </div>
                            <div className="answer_section1_his">
                                {questions1_his[currentQuestion1_his].answerOptions1_his.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick1_his(item.isCorrect)}
                                >{item.answerText1_his}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant1_his