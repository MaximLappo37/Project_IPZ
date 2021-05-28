import React, {useState} from 'react'

import './var3_his.css'
import image_var3_his from './image_var3_his.png';

function Variant3_his(){

    const questions3_his = [
        {
            qustionText3_his: 'Укажіть наслідок повстання сипаїв (1857–1859 рр.) в Індії',
            answerOptions3_his: [
                {answerText3_his: 'ліквідація Британської індійської армії', isCorrect: false},
                {answerText3_his: 'перехід Індії під пряме управління англійської корони', isCorrect: true},
                {answerText3_his: 'поділ Британської Індії на дві країни за релігійною ознакою', isCorrect: false},
                {answerText3_his: 'звільнення Індії від англійських колонізаторів', isCorrect: false}
            ]
        },
        {
            qustionText3_his: 'Заснування в 1833 р. Американського товариства боротьби проти рабства було складовою суспільного руху, що увійшов в історію США як рух',
            answerOptions3_his: [
                {answerText3_his: 'пацифістів', isCorrect: false},
                {answerText3_his: 'конфедератів', isCorrect: false},
                {answerText3_his: 'ізоляціоністів', isCorrect: false},
                {answerText3_his: 'аболіціоністів', isCorrect: true}
            ]
        },
        {
            qustionText3_his: <img
                                    src={image_var3_his}
                                    height="273"
                                    width="542"
                                    alt="Logo"
                                />,
            answerOptions3_his: [
                {answerText3_his: '«старого порядку»', isCorrect: true},
                {answerText3_his: 'якобінської диктатури', isCorrect: false},
                {answerText3_his: 'термідоріанського режиму', isCorrect: false},
                {answerText3_his: 'консульства Наполеона Бонапарта', isCorrect: false}
            ]
        },
        {
            qustionText3_his: 'На Західному фронті з кінця 1914 р. за характером бойових дій велася',
            answerOptions3_his: [
                {answerText3_his: '«позиційна війна»', isCorrect: true},
                {answerText3_his: '«блискавична війна»', isCorrect: false},
                {answerText3_his: '«рейкова війна»', isCorrect: false},
                {answerText3_his: '«дивна війна»', isCorrect: false}
            ]
        },
        {
            qustionText3_his: 'Що було першою відомою формою залежності населення від князівської влади на Русі?',
            answerOptions3_his: [
                {answerText3_his: 'необхідність відправляти єдині язичницькі культи', isCorrect: false},
                {answerText3_his: 'сплата данини під час збору полюддя', isCorrect: true},
                {answerText3_his: 'обов’язок сплачувати десяту частину прибутку', isCorrect: false},
                {answerText3_his: 'обов’язок брати участь у княжому ополченні', isCorrect: false}
            ]
        },
        {
            qustionText3_his: 'Що стало одним із результатів посольства великої княгині Ольги до Константинополя, про яке повідомляє літописець?',
            answerOptions3_his: [
                {answerText3_his: 'оголошення Ольгою війни Хозарському каганату', isCorrect: false},
                {answerText3_his: 'розпуск княгинею варязьких дружин', isCorrect: false},
                {answerText3_his: 'повернення Ольгою під владу Києва древлян', isCorrect: false},
                {answerText3_his: 'прийняття княгинею християнства', isCorrect: true}
            ]
        },
        {
            qustionText3_his: 'Позначте, до якого періоду відносяться перші писемні згадки про козаків',
            answerOptions3_his: [
                {answerText3_his: 'кінець 16 ст.', isCorrect: false},
                {answerText3_his: 'початок 16 ст.', isCorrect: false},
                {answerText3_his: 'кінець 15 ст.', isCorrect: true},
                {answerText3_his: 'початок 15 ст.', isCorrect: false}
            ]
        },
        {
            qustionText3_his: 'Унаслідок включення в 1940 р. Північної Буковини та Бессарабії до складу СРСР ',
            answerOptions3_his: [
                {answerText3_his: 'Північна Буковина ввійшла до складу УРСР, а Бессарабію поділено між Українською та новоутвореною Молдавською РСР.', isCorrect: true},
                {answerText3_his: 'Північна Буковина ввійшла до складу УРСР, а Бессарабія – до складу Молдавської Автономної РСР.', isCorrect: false},
                {answerText3_his: 'Північна Буковина та Бессарабія утворили нову союзну республіку – Молдавську РСР.', isCorrect: false},
                {answerText3_his: 'Північна Буковина та Бессарабія ввійшли до складу Української РСР.', isCorrect: false}
            ]
        },
        {
            qustionText3_his: 'У результаті бойових дій літа – осені 1941 р. німецькі війська та їхні союзники ',
            answerOptions3_his: [
                {answerText3_his: 'захопили всю Правобережну, більшу частину Лівобережної України та Крим.', isCorrect: true},
                {answerText3_his: 'захопили територію Галичини та Волині, зупинившись на лінії Рівне – Вінниця.', isCorrect: false},
                {answerText3_his: 'змогли просунутися лише на 200 – 300 км углиб території України.', isCorrect: false},
                {answerText3_his: 'окупували лише територію Правобережної України й були зупинені на Дніпрі.', isCorrect: false}
            ]
        },
        {
            qustionText3_his: 'Рейди партизанських з’єднань на Правобережну Україну в 1943 р., окрім воєнних цілей,  передбачали',
            answerOptions3_his: [
                {answerText3_his: 'мобілізацію до лав Червоної Армії.', isCorrect: false},
                {answerText3_his: 'постачання продовольства населенню окупованих територій.', isCorrect: false},
                {answerText3_his: 'нейтралізацію впливу на цій території ОУН та її збройних формувань.', isCorrect: true},
                {answerText3_his: 'відновлення в регіоні радянської влади.', isCorrect: false}
            ]
        },
    ]

    const [currentQuestion3_his, setCurrentQuestion3_his] = useState(0)
    const [score3_his, setScore3_his] = useState(0)
    const [showScore3_his, setShowScore3_his] = useState(false)

    const handleAnswerOptionClick3_his = (isCorrect) => {
        if (isCorrect) {
            setScore3_his(score3_his +1)
        }

        const nextQuestion3_his = currentQuestion3_his + 1
        if (nextQuestion3_his < questions3_his.length){
            setCurrentQuestion3_his(nextQuestion3_his)
        } else {
            setShowScore3_his(true)
        }
    }
    return(
        <body className="h_bg3">
            <div className="variant3_his">
                {
                    showScore3_his
                        ? <div className="section_score3_his">
                             <div>Правильних відповідей {score3_his} з {questions3_his.length}</div>
                          </div>
                        : <div className="quizz3_his">
                            <div className="question_section3_his">
                                <div className="question_count3_his">
                                    <span>Питання {currentQuestion3_his + 1} / {questions3_his.length}</span> 
                                </div>
                                <div className="question_text3_his">{questions3_his[currentQuestion3_his].qustionText3_his}</div>
                            </div>
                            <div className="answer_section3_his">
                                {questions3_his[currentQuestion3_his].answerOptions3_his.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick3_his(item.isCorrect)}
                                >{item.answerText3_his}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant3_his