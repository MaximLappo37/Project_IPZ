import React, {useState} from 'react'

import './var10_his.css'
import image_var10_his from './image_var10_his.png';


function Variant10_his(){

    const questions10_his = [
        {
            qustionText10_his: 'У якому році створено Річ Посполиту?',
            answerOptions10_his: [
                {answerText10_his: '1385 р.', isCorrect: false},
                {answerText10_his: '1410 р.', isCorrect: false},
                {answerText10_his: '1569 р.', isCorrect: true},
                {answerText10_his: '1652 р.', isCorrect: false}
            ]
        },
        {
            qustionText10_his: 'Що стало одним із наслідків битви під Віднем (1683 р.)?',
            answerOptions10_his: [
                {answerText10_his: 'створення європейської антитурецької коаліції «Священна ліга»', isCorrect: true},
                {answerText10_his: 'звільнення Угорщини і Трансільванії від османського панування', isCorrect: false},
                {answerText10_his: 'придушення антитурецького гайдуцького руху в Болгарії та Сербії', isCorrect: false},
                {answerText10_his: 'втрата Османською імперією всіх своїх володінь на Балканах', isCorrect: false}
            ]
        },
        {
            qustionText10_his: 'Упродовж якого періоду Французької революції тривала якобінська диктатура?',
            answerOptions10_his: [
                {answerText10_his: '1789–1792 рр.', isCorrect: false},
                {answerText10_his: '1792–1793 рр.', isCorrect: false},
                {answerText10_his: '1793–1794 рр.', isCorrect: true},
                {answerText10_his: '1794–1799 рр.', isCorrect: false}
            ]
        },
        {
            qustionText10_his: 'Надання країнам-учасницям антифранцузьких коаліцій компенсацій за участь у боротьбі з Наполеоном, відновлення кордонів держав і їхнього політичного устрою станом на 1792 р. — це загальні принципи перебудови Європи, ухвалені',
            answerOptions10_his: [
                {answerText10_his: 'Віденським конгресом (1815 р.)', isCorrect: true},
                {answerText10_his: 'Аахенським конгресом (1818 р.)', isCorrect: false},
                {answerText10_his: 'Паризьким конгресом (1856 р.)', isCorrect: false},
                {answerText10_his: 'Берлінським конгресом (1878 р.)', isCorrect: false}
            ]
        },
        {
            qustionText10_his: <img
                                    src={image_var10_his}
                                    height="322"
                                    width="608"
                                    alt="Logo"
                                />,
            answerOptions10_his: [
                {answerText10_his: 'створення «Священного союзу», коаліції європейських монархів', isCorrect: false},
                {answerText10_his: 'перетворення Австрійської імперії на дуалістичну монархію', isCorrect: false},
                {answerText10_his: 'реставрація влади династії Бурбонів у Франції', isCorrect: false},
                {answerText10_his: 'проголошення створення Німецької імперії', isCorrect: true}
            ]
        },
        {
            qustionText10_his: 'Неповноправних людей на Русі, які з тих чи інших причин вибули зі свого соціального  середовища (роду, общини), називали',
            answerOptions10_his: [
                {answerText10_his: 'ізгої', isCorrect: true},
                {answerText10_his: 'челядь', isCorrect: false},
                {answerText10_his: 'смерди', isCorrect: false},
                {answerText10_his: 'холопи', isCorrect: false}
            ]
        },
        {
            qustionText10_his: 'Депортація у травні 1944 р. кримських татар та інших народів Криму була складовою:',
            answerOptions10_his: [
                {answerText10_his: 'нацистського «нового порядку»', isCorrect: false},
                {answerText10_his: 'сталінської репресивної політики', isCorrect: true},
                {answerText10_his: 'політики освоєння цілини', isCorrect: false},
                {answerText10_his: 'боротьби з ОУН та УПА', isCorrect: false}
            ]
        },
        {
            qustionText10_his: 'Утворення наркомату закордонних справ УРСР (1944 р.), вступ республіки до Організації Об’єднаних Націй (1945 р.) — це факти, що свідчать про:',
            answerOptions10_his: [
                {answerText10_his: 'приєднання України до Антигітлерівської коаліції', isCorrect: false},
                {answerText10_his: 'вихід України з Другої світової війни', isCorrect: false},
                {answerText10_his: 'створення посольств', isCorrect: false},
                {answerText10_his: 'відновлення зовнішньополітичної діяльності України', isCorrect: true}
            ]
        },
        {
            qustionText10_his: 'Що було одним із наслідків депортації в 1944 р. кримських татар із території Криму?',
            answerOptions10_his: [
                {answerText10_his: 'кардинальна зміна національного складу населення регіону', isCorrect: true},
                {answerText10_his: 'надання Кримській області автономії в складі УРСР', isCorrect: false},
                {answerText10_his: 'розформування кримсько-татарських частин Червоною армією', isCorrect: false},
                {answerText10_his: 'утворення Татарського автономного округу в Узбекській РСР', isCorrect: false}
            ]
        },
        {
            qustionText10_his: '9 травня 1945 р. — це:',
            answerOptions10_his: [
                {answerText10_his: 'день визволення території УРСР від нацистських загарбників', isCorrect: false},
                {answerText10_his: 'День Перемоги народів СРСР у Великій Вітчизняній війні', isCorrect: true},
                {answerText10_his: 'день входження Західної України до складу УРСР', isCorrect: false},
                {answerText10_his: 'день вступу УРСР в ООН', isCorrect: false}
            ]
        },
    ]

    const [currentQuestion10_his, setCurrentQuestion10_his] = useState(0)
    const [score10_his, setScore10_his] = useState(0)
    const [showScore10_his, setShowScore10_his] = useState(false)

    const handleAnswerOptionClick10_his = (isCorrect) => {
        if (isCorrect) {
            setScore10_his(score10_his +1)
        }

        const nextQuestion10_his = currentQuestion10_his + 1
        if (nextQuestion10_his < questions10_his.length){
            setCurrentQuestion10_his(nextQuestion10_his)
        } else {
            setShowScore10_his(true)
        }
    }
    return(
        <body className="h_bg10">
            <div className="variant10_his">
                {
                    showScore10_his
                        ? <div className="section_score10_his">
                             <div>Правильних відповідей {score10_his} з {questions10_his.length}</div>
                          </div>
                        : <div className="quizz10_his">
                            <div className="question_section10_his">
                                <div className="question_count10_his">
                                    <span>Питання {currentQuestion10_his + 1} / {questions10_his.length}</span> 
                                </div>
                                <div className="question_text10_his">{questions10_his[currentQuestion10_his].qustionText10_his}</div>
                            </div>
                            <div className="answer_section10_his">
                                {questions10_his[currentQuestion10_his].answerOptions10_his.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick10_his(item.isCorrect)}
                                >{item.answerText10_his}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant10_his