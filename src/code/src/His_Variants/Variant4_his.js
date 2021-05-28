import React, {useState} from 'react'

import './var4_his.css'
import image_var4_his from './image_var4_his.png';

function Variant4_his(){

    const questions4_his = [
        {
            qustionText4_his: 'Перелік яких понять і термінів потрібно використовувати, характеризуючи суспільно-політичний розвиток Німеччини в 1930-х рр.?',
            answerOptions4_his: [
                {answerText4_his: '«проспериті», «Велика депресія», «сухий закон», «Новий курс»', isCorrect: false},
                {answerText4_his: '«більшовизм», «воєнний комунізм», «продрозверстка», «Великий терор»', isCorrect: false},
                {answerText4_his: '«фашизм», «сквадри», «корпоративна система», «Латаранський пакт»', isCorrect: false},
                {answerText4_his: '«націонал-соціалізм», «фюрер», «гестапо», «кришталева ніч»', isCorrect: true}
            ]
        },
        {
            qustionText4_his: <img
                                    src={image_var4_his}
                                    height="330"
                                    width="548"
                                    alt="Logo"
                                />,
            answerOptions4_his: [
                {answerText4_his: 'Франції', isCorrect: false},
                {answerText4_his: 'Німеччини', isCorrect: false},
                {answerText4_his: 'Великої Британії', isCorrect: true},
                {answerText4_his: 'Росії', isCorrect: false}
            ]
        },
        {
            qustionText4_his: 'Що зумовило встановлення в Польщі режиму «санації» Ю. Пілсудського?',
            answerOptions4_his: [
                {answerText4_his: 'криза парламентської форми правління', isCorrect: true},
                {answerText4_his: 'ураження країни світовою економічною кризою', isCorrect: false},
                {answerText4_his: 'загострення відносин з Радянським Союзом', isCorrect: false},
                {answerText4_his: 'прихід до влади в Німеччині нацистів', isCorrect: false}
            ]
        },
        {
            qustionText4_his: 'Національна революція в Китаї тривала впродовж',
            answerOptions4_his: [
                {answerText4_his: '1918–1921 рр.', isCorrect: false},
                {answerText4_his: '1925–1927 рр.', isCorrect: true},
                {answerText4_his: '1932–1935 рр.', isCorrect: false},
                {answerText4_his: '1941–1945 рр.', isCorrect: false}
            ]
        },
        {
            qustionText4_his: '22 червня 1941 р. Німеччина розпочала реалізацію воєнно-стратегічного плану',
            answerOptions4_his: [
                {answerText4_his: '«Вайс»', isCorrect: false},
                {answerText4_his: '«Барбаросса»', isCorrect: true},
                {answerText4_his: '«Морський лев»', isCorrect: false},
                {answerText4_his: '«Цитадель»', isCorrect: false}
            ]
        },
        {
            qustionText4_his: 'Теорія, згідно з якою державність на Русь була принесена варягами, має назву:',
            answerOptions4_his: [
                {answerText4_his: 'норманська', isCorrect: true},
                {answerText4_his: 'хозарська', isCorrect: false},
                {answerText4_his: 'слов’янофільська', isCorrect: false},
                {answerText4_his: 'дунайська', isCorrect: false}
            ]
        },
        {
            qustionText4_his: 'Якому київському князю, ймовірно, належав меч, знайдений в 2001 р. на острові Хортиця?',
            answerOptions4_his: [
                {answerText4_his: 'Святославу', isCorrect: true},
                {answerText4_his: 'Ігорю', isCorrect: false},
                {answerText4_his: 'Олегу', isCorrect: false},
                {answerText4_his: 'Аскольду', isCorrect: false}
            ]
        },
        {
            qustionText4_his: 'Корсунь-Шевченківська наступальна операція радянських військ здійснювалася впродовж',
            answerOptions4_his: [
                {answerText4_his: 'листопада – грудня 1943 р.', isCorrect: false},
                {answerText4_his: 'квітня – травня 1944 р.', isCorrect: false},
                {answerText4_his: 'червня – липня 1943 р.', isCorrect: false},
                {answerText4_his: 'січня – лютого 1944 р.', isCorrect: true}
            ]
        },
        {
            qustionText4_his: 'Як називається процес, описаний в уривку з історичного джерела?                           «Після  закінчення  Другої  світової  війни  на  батьківщину  поверталися  сотні  тисяч  військовополонених  та  цивільних  осіб,  що  добровільно  чи  примусово  опинилися  за  межами  своєї країни внаслідок війни».',
            answerOptions4_his: [
                {answerText4_his: 'демобілізація', isCorrect: false},
                {answerText4_his: 'реевакуація', isCorrect: false},
                {answerText4_his: 'репатріація', isCorrect: true},
                {answerText4_his: 'депортація', isCorrect: false}
            ]
        },
        {
            qustionText4_his: 'Народні Збори Західної України в жовтні 1939 р. декларували входження цих земель до складу…',
            answerOptions4_his: [
                {answerText4_his: 'Чехословаччини', isCorrect: false},
                {answerText4_his: 'Української Народної Республіки', isCorrect: false},
                {answerText4_his: 'Радянської України', isCorrect: true},
                {answerText4_his: 'Другої Речі Посполитої', isCorrect: false}
            ]
        },
    ]

    const [currentQuestion4_his, setCurrentQuestion4_his] = useState(0)
    const [score4_his, setScore4_his] = useState(0)
    const [showScore4_his, setShowScore4_his] = useState(false)

    const handleAnswerOptionClick4_his = (isCorrect) => {
        if (isCorrect) {
            setScore4_his(score4_his +1)
        }

        const nextQuestion4_his = currentQuestion4_his + 1
        if (nextQuestion4_his < questions4_his.length){
            setCurrentQuestion4_his(nextQuestion4_his)
        } else {
            setShowScore4_his(true)
        }
    }
    return(
        <body className="h_bg4">
            <div className="variant4_his">
                {
                    showScore4_his
                        ? <div className="section_score4_his">
                             <div>Правильних відповідей {score4_his} з {questions4_his.length}</div>
                          </div>
                        : <div className="quizz4_his">
                            <div className="question_section4_his">
                                <div className="question_count4_his">
                                    <span>Питання {currentQuestion4_his + 1} / {questions4_his.length}</span> 
                                </div>
                                <div className="question_text4_his">{questions4_his[currentQuestion4_his].qustionText4_his}</div>
                            </div>
                            <div className="answer_section4_his">
                                {questions4_his[currentQuestion4_his].answerOptions4_his.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick4_his(item.isCorrect)}
                                >{item.answerText4_his}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant4_his