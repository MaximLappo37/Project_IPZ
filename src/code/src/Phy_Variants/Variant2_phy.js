import React, {useState} from 'react'

import './var2_phy.css'
import image_var2_phy from './image_var2_phy.png';
import image_var2_2_phy from './image_var2-2_phy.png';
function Variant2_phy(){

    const questions2_phy = [
        {
            qustionText2_phy: 'Непоступально рухаються',
            answerOptions2_phy: [
                {answerText2_phy: 'сходи ескалатора метро', isCorrect: false},
                {answerText2_phy: 'курсор на моніторі комп’ютера', isCorrect: false},
                {answerText2_phy: 'потяг на прямолінійній ділянці дороги', isCorrect: false},
                {answerText2_phy: 'дитяча іграшка дзиґа', isCorrect: true}
            ]
        },
        {
            qustionText2_phy: <img
                                    src={image_var2_phy}
                                    height="350"
                                    width="550"
                                    alt="Logo"
                                />,
            answerOptions2_phy: [
                {answerText2_phy: '0,1 с на поділку', isCorrect: false},
                {answerText2_phy: '0,2 с на поділку', isCorrect: true},
                {answerText2_phy: '0,5 с на поділку', isCorrect: false},
                {answerText2_phy: '1 с на поділку', isCorrect: false}
            ]
        },
        {
            qustionText2_phy: 'Побутовий газовий балон заправляють скрапленим пропан-бутаном під тиском, вищим за атмосферний. Під час цього молекули газової суміші',
            answerOptions2_phy: [
                {answerText2_phy: 'зменшуються', isCorrect: false},
                {answerText2_phy: 'не змінюються', isCorrect: true},
                {answerText2_phy: 'об’єднуються', isCorrect: false},
                {answerText2_phy: 'збільшуються', isCorrect: false}
            ]
        },
        {
            qustionText2_phy: 'Електричний опір неізольованого металевого дроту не зміниться, якщо',
            answerOptions2_phy: [
                {answerText2_phy: 'розрізати його навпіл і з’єднати обидві частини паралельно', isCorrect: false},
                {answerText2_phy: 'протягти його через волочильний верстат (видовжити)', isCorrect: false},
                {answerText2_phy: 'нарізати на ньому різьбу', isCorrect: false},
                {answerText2_phy: 'вкрити його ізолювальним матеріалом', isCorrect: true}
            ]
        },
        {
            qustionText2_phy: 'Що НЕ Є джерелом світла?',
            answerOptions2_phy: [
                {answerText2_phy: 'Сонце', isCorrect: false},
                {answerText2_phy: 'полум’я', isCorrect: false},
                {answerText2_phy: 'Місяць', isCorrect: true},
                {answerText2_phy: 'світляк', isCorrect: false}
            ]
        },
        {
            qustionText2_phy: 'Максимально можливий виграш у силі у 8 разів дає система блоків із',
            answerOptions2_phy: [
                {answerText2_phy: '4 рухомих і 3 нерухомих', isCorrect: false},
                {answerText2_phy: '3 рухомих і 3 нерухомих', isCorrect: true},
                {answerText2_phy: '2 рухомих і 4 нерухомих', isCorrect: false},
                {answerText2_phy: '1 рухомого й 3 нерухомих', isCorrect: false}
            ]
        },
        {
            qustionText2_phy: 'Укажіть тіло, кінетична енергія якого змінюватиметься',
            answerOptions2_phy: [
                {answerText2_phy: 'пліт, на якому сплавляються ділянкою річки сталої ширини й глибини', isCorrect: false},
                {answerText2_phy: 'м’яч, що закидають у баскетбольну корзину', isCorrect: true},
                {answerText2_phy: 'листочок, що рівномірно поступально падає з гілки дерева', isCorrect: false},
                {answerText2_phy: 'равлик, який рухається зі швидкістю 9 см/хв', isCorrect: false}
            ]
        },
        {
            qustionText2_phy: 'За звичайних умов вода замерзає за температури 0 °С. А краплинки води, із яких складаються хмари, починають замерзати лише за температури, нижчої від ‑17 °С. Укажіть твердження, яке пояснює ці факти.',
            answerOptions2_phy: [
                {answerText2_phy: 'у води низька теплопровідність', isCorrect: false},
                {answerText2_phy: 'заважає сонячне випромінювання', isCorrect: false},
                {answerText2_phy: 'заважають сили поверхневого натягу', isCorrect: false},
                {answerText2_phy: 'у маленьких краплинках немає центрів кристалізації', isCorrect: true}
            ]
        },
        {
            qustionText2_phy: <img
                                    src={image_var2_2_phy}
                                    height="350"
                                    width="550"
                                    alt="Logo"
                                />,
            answerOptions2_phy: [
                {answerText2_phy: 'срібло', isCorrect: false},
                {answerText2_phy: 'свинець', isCorrect: true},
                {answerText2_phy: 'залізо', isCorrect: false},
                {answerText2_phy: 'мідь', isCorrect: false}
            ]
        },
        {
            qustionText2_phy: 'Які частинки є основними вільними носіями електричного заряду в плазмі?',
            answerOptions2_phy: [
                {answerText2_phy: 'вільні електрони й дірки', isCorrect: false},
                {answerText2_phy: 'вільні електрони й негативні йони', isCorrect: false},
                {answerText2_phy: 'позитивні й негативні йони', isCorrect: false},
                {answerText2_phy: 'вільні електрони й позитивні йони', isCorrect: true}
            ]
        }
    ]

    const [currentQuestion2_phy, setCurrentQuestion2_phy] = useState(0)
    const [score2_phy, setScore2_phy] = useState(0)
    const [showScore2_phy, setShowScore2_phy] = useState(false)

    const handleAnswerOptionClick2_phy = (isCorrect) => {
        if (isCorrect) {
            setScore2_phy(score2_phy +1)
        }

        const nextQuestion2_phy = currentQuestion2_phy + 1
        if (nextQuestion2_phy < questions2_phy.length){
            setCurrentQuestion2_phy(nextQuestion2_phy)
        } else {
            setShowScore2_phy(true)
        }
    }
    return(
        <body className="p_bg2">
            <div className="variant2_phy">
                {
                    showScore2_phy
                        ? <div className="section_score2_phy">
                             <div>Правильних відповідей {score2_phy} з {questions2_phy.length}</div>
                          </div>
                        : <div className="quizz2_phy">
                            <div className="question_section2_phy">
                                <div className="question_count2_phy">
                                    <span>Питання {currentQuestion2_phy + 1} / {questions2_phy.length}</span> 
                                </div>
                                <div className="question_text2_phy">{questions2_phy[currentQuestion2_phy].qustionText2_phy}</div>
                            </div>
                            <div className="answer_section2_phy">
                                {questions2_phy[currentQuestion2_phy].answerOptions2_phy.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick2_phy(item.isCorrect)}
                                >{item.answerText2_phy}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant2_phy