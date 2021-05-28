import React, {useState} from 'react'

import './var6_geo.css'


function Variant6_geo(){

    const questions6_geo = [
        {
            qustionText6_geo: 'Яка астрономічна пора року на Антарктичному півострові 31 серпня?',
            answerOptions6_geo: [
                {answerText6_geo: 'зима', isCorrect: true},
                {answerText6_geo: 'весна', isCorrect: false},
                {answerText6_geo: 'літо', isCorrect: false},
                {answerText6_geo: 'осінь', isCorrect: false}
            ]
        },
        {
            qustionText6_geo: 'Що є причиною того, що на узбережжі Антарктиди тепліше, ніж у центрі материка?',
            answerOptions6_geo: [
                {answerText6_geo: 'переважання протягом року помірних повітряних мас', isCorrect: false},
                {answerText6_geo: 'прибережні теплі течії', isCorrect: false},
                {answerText6_geo: 'циклональна діяльність над прибережними водами', isCorrect: true},
                {answerText6_geo: 'незначна віддаленість узбережжя від Південного тропіка', isCorrect: false}
            ]
        },
        {
            qustionText6_geo: 'Яка область України є прикордонною з Білоруссю?',
            answerOptions6_geo: [
                {answerText6_geo: 'Чернівецька', isCorrect: false},
                {answerText6_geo: 'Львівська', isCorrect: false},
                {answerText6_geo: 'Миколаївська', isCorrect: false},
                {answerText6_geo: 'Рівненська', isCorrect: true}
            ]
        },
        {
            qustionText6_geo: 'Укажіть назву найвищої вершини Південної Америки.',
            answerOptions6_geo: [
                {answerText6_geo: 'Чимборасо', isCorrect: false},
                {answerText6_geo: 'Мак-Кінлі', isCorrect: false},
                {answerText6_geo: 'Котопахі', isCorrect: false},
                {answerText6_geo: 'Аконкагуа', isCorrect: true}
            ]
        },
        {
            qustionText6_geo: 'У якій частині Світового океану вирішальний вплив на формування течій відіграють мусони?',
            answerOptions6_geo: [
                {answerText6_geo: 'південній Північного Льодовитого океану', isCorrect: false},
                {answerText6_geo: 'південній Тихого океану', isCorrect: false},
                {answerText6_geo: 'північній Індійського океану', isCorrect: true},
                {answerText6_geo: 'північній Атлантичного океану', isCorrect: false}
            ]
        },
        {
            qustionText6_geo: 'У якому масиві Українських Карпат знаходиться найвища вершина України?',
            answerOptions6_geo: [
                {answerText6_geo: 'Чорногора', isCorrect: true},
                {answerText6_geo: 'Свидовець', isCorrect: false},
                {answerText6_geo: 'Горгани', isCorrect: false},
                {answerText6_geo: 'Бескиди', isCorrect: false}
            ]
        },
        {
            qustionText6_geo: 'У межах якої тектонічної структури найдавніші на території України гірські породи виходять на денну поверхню?',
            answerOptions6_geo: [
                {answerText6_geo: 'Волино-Подільської плити', isCorrect: false},
                {answerText6_geo: 'Кримської складчастої системи', isCorrect: false},
                {answerText6_geo: 'Донецької складчастої споруди', isCorrect: false},
                {answerText6_geo: 'Українського кристалічного щита', isCorrect: true}
            ]
        },
        {
            qustionText6_geo: 'З’ясуйте, який географічний пояс Євразії не має зони пустель.',
            answerOptions6_geo: [
                {answerText6_geo: 'субекваторіальний', isCorrect: true},
                {answerText6_geo: 'помірний', isCorrect: false},
                {answerText6_geo: 'арктичний', isCorrect: false},
                {answerText6_geo: 'тропічний', isCorrect: false}
            ]
        },
        {
            qustionText6_geo: 'Для якої природної зони Африки типовими деревами є баобаб, зонтична акація?',
            answerOptions6_geo: [
                {answerText6_geo: 'пустель та напівпустель', isCorrect: false},
                {answerText6_geo: 'вологих екваторіальних лісів', isCorrect: false},
                {answerText6_geo: 'твердолистих вічнозелених лісів і чагарників', isCorrect: false},
                {answerText6_geo: 'саван і рідколісся', isCorrect: true}
            ]
        },
        {
            qustionText6_geo: '',
            answerOptions6_geo: [
                {answerText6_geo: 'зміна пір року', isCorrect: false},
                {answerText6_geo: 'зміна дня і ночі', isCorrect: true},
                {answerText6_geo: 'широтна зональність у природі', isCorrect: false},
                {answerText6_geo: 'нахил земної осі до площини орбіти', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion6_geo, setCurrentQuestion6_geo] = useState(0)
    const [score6_geo, setScore6_geo] = useState(0)
    const [showScore6_geo, setShowScore6_geo] = useState(false)

    const handleAnswerOptionClick6_geo = (isCorrect) => {
        if (isCorrect) {
            setScore6_geo(score6_geo +1)
        }

        const nextQuestion6_geo = currentQuestion6_geo + 1
        if (nextQuestion6_geo < questions6_geo.length){
            setCurrentQuestion6_geo(nextQuestion6_geo)
        } else {
            setShowScore6_geo(true)
        }
    }
    return(
        <body className="g_bg6">
            <div className="variant6_geo">
                {
                    showScore6_geo
                        ? <div className="section_score6_geo">
                             <div>Правильних відповідей {score6_geo} з {questions6_geo.length}</div>
                          </div>
                        : <div className="quizz6_geo">
                            <div className="question_section6_geo">
                                <div className="question_count6_geo">
                                    <span>Питання {currentQuestion6_geo + 1} / {questions6_geo.length}</span> 
                                </div>
                                <div className="question_text6_geo">{questions6_geo[currentQuestion6_geo].qustionText6_geo}</div>
                            </div>
                            <div className="answer_section6_geo">
                                {questions6_geo[currentQuestion6_geo].answerOptions6_geo.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick6_geo(item.isCorrect)}
                                >{item.answerText6_geo}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant6_geo