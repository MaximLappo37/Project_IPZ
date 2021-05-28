import React, {useState} from 'react'

import './var1_geo.css'


function Variant1_geo(){

    const questions1_geo = [
        {
            qustionText1_geo: 'Від якого півострова вирушили у плавання кораблі експедицій під командуванням Х. Колумба і Ф. Магеллана?',
            answerOptions1_geo: [
                {answerText1_geo: 'Скандинавського', isCorrect: false},
                {answerText1_geo: 'Піренейського', isCorrect: true},
                {answerText1_geo: 'Апеннінського', isCorrect: false},
                {answerText1_geo: 'Балканського', isCorrect: false}
            ]
        },
        {
            qustionText1_geo: 'Перші відомості про природу навколополярних областей Північного Льодовитого океану було здобуто завдяки дрейфу судна під командуванням',
            answerOptions1_geo: [
                {answerText1_geo: 'Ф. Нансена', isCorrect: true},
                {answerText1_geo: 'Ф. Маґеллана', isCorrect: false},
                {answerText1_geo: 'Д. Лівінгстона', isCorrect: false},
                {answerText1_geo: 'М. Міклухо-Маклая', isCorrect: false}
            ]
        },
        {
            qustionText1_geo: 'Хто з географів досліджував розвиток і розміщення продуктивних сил в Україні, розробив схему її економічного районування?',
            answerOptions1_geo: [
                {answerText1_geo: 'В. Вернадський', isCorrect: false},
                {answerText1_geo: 'С. Рудницький', isCorrect: false},
                {answerText1_geo: 'К. Воблий', isCorrect: true},
                {answerText1_geo: 'В. Докучаєв', isCorrect: false}
            ]
        },
        {
            qustionText1_geo: 'Протоку, що відокремлює Азію від Північної Америки, відкрив',
            answerOptions1_geo: [
                {answerText1_geo: 'Афанасій Нікітін', isCorrect: false},
                {answerText1_geo: 'Семен Дежньов', isCorrect: true},
                {answerText1_geo: 'Олександр Гумбольдт', isCorrect: false},
                {answerText1_geo: 'Микола Пржевальський', isCorrect: false}
            ]
        },
        {
            qustionText1_geo: 'Північний Льодовитий океан досліджували',
            answerOptions1_geo: [
                {answerText1_geo: 'Д. Кук, А. Тасман', isCorrect: false},
                {answerText1_geo: 'Х. Колумб, Ф. Магелан', isCorrect: false},
                {answerText1_geo: 'Ф. Нансен, Р. Амундсен', isCorrect: true},
                {answerText1_geo: 'М. Пржевальський, А. Нікітін', isCorrect: false}
            ]
        },
        {
            qustionText1_geo: 'Експедиція під керівництвом якого мореплавця здійснила першу навколосвітню подорож і довела, що Земля має кулясту форму?',
            answerOptions1_geo: [
                {answerText1_geo: 'Абеля Тасмана', isCorrect: false},
                {answerText1_geo: 'Джеймса Кука', isCorrect: false},
                {answerText1_geo: 'Фернана Маґеллана', isCorrect: true},
                {answerText1_geo: 'Христофора Колумба', isCorrect: false}
            ]
        },
        {
            qustionText1_geo: 'Які дослідження на території України здійснювала експедиція Руського географічного товариства, очолювана П. Чубинським?',
            answerOptions1_geo: [
                {answerText1_geo: 'геологічні', isCorrect: false},
                {answerText1_geo: 'метеорологічні', isCorrect: false},
                {answerText1_geo: 'гідрологічні', isCorrect: false},
                {answerText1_geo: 'етнографічні', isCorrect: true}
            ]
        },
        {
            qustionText1_geo: 'Який учений вперше застосував назву «географія» до науки про Землю?',
            answerOptions1_geo: [
                {answerText1_geo: 'Арістотель', isCorrect: false},
                {answerText1_geo: 'Ератосфен', isCorrect: true},
                {answerText1_geo: 'Меркатор', isCorrect: false},
                {answerText1_geo: 'Бехайм', isCorrect: false}
            ]
        },
        {
            qustionText1_geo: 'Який географічний об`єкт став відомим європейцям в епоху Великих географічних відкриттів?',
            answerOptions1_geo: [
                {answerText1_geo: 'Антарктида', isCorrect: false},
                {answerText1_geo: 'Тихий океан', isCorrect: true},
                {answerText1_geo: 'Маріанський жолоб', isCorrect: false},
                {answerText1_geo: 'Північний полюс', isCorrect: false}
            ]
        },
        {
            qustionText1_geo: 'Яку частину світу було відкрито європейцями під час пошуку морського шляху в Індію?',
            answerOptions1_geo: [
                {answerText1_geo: 'Азію', isCorrect: false},
                {answerText1_geo: 'Австралію', isCorrect: false},
                {answerText1_geo: 'Америку', isCorrect: true},
                {answerText1_geo: 'Антарктиду', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion1_geo, setCurrentQuestion1_geo] = useState(0)
    const [score1_geo, setScore1_geo] = useState(0)
    const [showScore1_geo, setShowScore1_geo] = useState(false)

    const handleAnswerOptionClick1_geo = (isCorrect) => {
        if (isCorrect) {
            setScore1_geo(score1_geo +1)
        }

        const nextQuestion1_geo = currentQuestion1_geo + 1
        if (nextQuestion1_geo < questions1_geo.length){
            setCurrentQuestion1_geo(nextQuestion1_geo)
        } else {
            setShowScore1_geo(true)
        }
    }
    return(
        <body className="g_bg1">
            <div className="variant1_geo">
                {
                    showScore1_geo
                        ? <div className="section_score1_geo">
                             <div>Правильних відповідей {score1_geo} з {questions1_geo.length}</div>
                          </div>
                        : <div className="quizz1_geo">
                            <div className="question_section1_geo">
                                <div className="question_count1_geo">
                                    <span>Питання {currentQuestion1_geo + 1} / {questions1_geo.length}</span> 
                                </div>
                                <div className="question_text1_geo">{questions1_geo[currentQuestion1_geo].qustionText1_geo}</div>
                            </div>
                            <div className="answer_section1_geo">
                                {questions1_geo[currentQuestion1_geo].answerOptions1_geo.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick1_geo(item.isCorrect)}
                                >{item.answerText1_geo}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant1_geo