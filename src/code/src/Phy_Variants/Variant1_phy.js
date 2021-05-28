import React, {useState} from 'react'

import './var1_phy.css'
import image_var1_phy from './image_var1_phy.png';
import image_var12_phy from './image_var1-2_phy.png';
import image_var13_phy from './image_var1-3_phy.png';
function Variant1_phy(){

    const questions1_phy = [
        {
            qustionText1_phy: 'На якому з етапів руху автогонщик не зазнає перевантаження?',
            answerOptions1_phy: [
                {answerText1_phy: 'розгін відразу після старту', isCorrect: false},
                {answerText1_phy: 'рух зі сталою швидкістю прямою трасою', isCorrect: true},
                {answerText1_phy: 'крутий поворот на великій швидкості', isCorrect: false},
                {answerText1_phy: 'гальмування перед зупинкою', isCorrect: false}
            ]
        },
        {
            qustionText1_phy: 'Пружину жорсткістю k розрізали на дві рівні частини. Визначте коефіцієнт жорсткості кожної з отриманих частин пружини',
            answerOptions1_phy: [
                {answerText1_phy: '0.5k', isCorrect: false},
                {answerText1_phy: 'k', isCorrect: false},
                {answerText1_phy: '2k', isCorrect: true},
                {answerText1_phy: '4k', isCorrect: false}
            ]
        },
        {
            qustionText1_phy: 'У балоні міститься газ кількістю 0.01 моль. Скільки молекул газу в балоні?',
            answerOptions1_phy: [
                {answerText1_phy: '10 в 21 ступені', isCorrect: false},
                {answerText1_phy: '6 • 10 в 21 ступені', isCorrect: true},
                {answerText1_phy: '10 в 24 ступені', isCorrect: false},
                {answerText1_phy: '6 • 10 в 24 ступені', isCorrect: false}
            ]
        },
        {
            qustionText1_phy: <img
                                    src={image_var1_phy}
                                    height="350"
                                    width="600"
                                    alt="Logo"
                                />,
            answerOptions1_phy: [
                {answerText1_phy: 'Цикл А', isCorrect: false},
                {answerText1_phy: 'Цикл Б', isCorrect: false},
                {answerText1_phy: 'Цикл В', isCorrect: true},
                {answerText1_phy: 'Цикл Г', isCorrect: false}
            ]
        },
        {
            qustionText1_phy: 'Під час вимірювання відносної вологості повітря обидва термометри психометраб вологий і сухий, показують однакову температуру. Це означає, що',
            answerOptions1_phy: [
                {answerText1_phy: 'повітря дуже сухе, відносна вологість дорінює 0%', isCorrect: false},
                {answerText1_phy: 'відносна вологість повітря дорівнює 50%', isCorrect: false},
                {answerText1_phy: 'відносна вологість повітря дорівнює 100%', isCorrect: true},
                {answerText1_phy: 'температура повітря становить 0 градусів за Цельсієм ', isCorrect: false}
            ]
        },
        {
            qustionText1_phy: <img
                                    src={image_var12_phy}
                                    height="350"
                                    width="600"
                                    alt="Logo"
                                />,
            answerOptions1_phy: [
                {answerText1_phy: 'енергії', isCorrect: false},
                {answerText1_phy: 'заряду', isCorrect: true},
                {answerText1_phy: 'напруженості', isCorrect: false},
                {answerText1_phy: 'напруги', isCorrect: false}
            ]
        },
        {
            qustionText1_phy: 'Електронний пучок утворює світлу пляму в центрі екрана осцилографа. Над центром екрана розмістили штабовий (прямий) магніт північним полюсом донизу. Визначте, у який бік відхилиться пляма на екрані.',
            answerOptions1_phy: [
                {answerText1_phy: 'ліворуч', isCorrect: true},
                {answerText1_phy: 'праворуч', isCorrect: false},
                {answerText1_phy: 'угору', isCorrect: false},
                {answerText1_phy: 'униз', isCorrect: false}
            ]
        },
        {
            qustionText1_phy: 'Маятник настінного годинника здійснює коливання з частотою 2Гц. Скільки разів за хвилину потенціальна енергія маятника набуває максимального значення?',
            answerOptions1_phy: [
                {answerText1_phy: '30', isCorrect: false},
                {answerText1_phy: '60', isCorrect: false},
                {answerText1_phy: '120', isCorrect: false},
                {answerText1_phy: '240', isCorrect: true}
            ]
        },
        {
            qustionText1_phy: <img
                                    src={image_var13_phy}
                                    height="350"
                                    width="600"
                                    alt="Logo"
                                />,
            answerOptions1_phy: [
                {answerText1_phy: '1', isCorrect: false},
                {answerText1_phy: '2', isCorrect: true},
                {answerText1_phy: '3', isCorrect: false},
                {answerText1_phy: '4', isCorrect: false}
            ]
        },
        {
            qustionText1_phy: 'Забарвлення мильної бульбашки переважно залежить від',
            answerOptions1_phy: [
                {answerText1_phy: 'кольору мила, розчиненого у воді', isCorrect: false},
                {answerText1_phy: 'температури повітря, яким заповнена бульбашка', isCorrect: false},
                {answerText1_phy: 'товщини мильної плівки', isCorrect: true},
                {answerText1_phy: 'діаметра мильної бульбашки', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion1_phy, setCurrentQuestion1_phy] = useState(0)
    const [score1_phy, setScore1_phy] = useState(0)
    const [showScore1_phy, setShowScore1_phy] = useState(false)

    const handleAnswerOptionClick1_phy = (isCorrect) => {
        if (isCorrect) {
            setScore1_phy(score1_phy +1)
        }

        const nextQuestion1_phy = currentQuestion1_phy + 1
        if (nextQuestion1_phy < questions1_phy.length){
            setCurrentQuestion1_phy(nextQuestion1_phy)
        } else {
            setShowScore1_phy(true)
        }
    }
    return(
        <body className="p_bg1">
            <div className="variant1_phy">
                {
                    showScore1_phy
                        ? <div className="section_score1_phy">
                             <div>Правильних відповідей {score1_phy} з {questions1_phy.length}</div>
                          </div>
                        : <div className="quizz1_phy">
                            <div className="question_section1_phy">
                                <div className="question_count1_phy">
                                    <span>Питання {currentQuestion1_phy + 1} / {questions1_phy.length}</span> 
                                </div>
                                <div className="question_text1_phy">{questions1_phy[currentQuestion1_phy].qustionText1_phy}</div>
                            </div>
                            <div className="answer_section1_phy">
                                {questions1_phy[currentQuestion1_phy].answerOptions1_phy.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick1_phy(item.isCorrect)}
                                >{item.answerText1_phy}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant1_phy