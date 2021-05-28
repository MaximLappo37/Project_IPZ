import React, {useState} from 'react'

import './var8_phy.css'
function Variant8_phy(){

    const questions8_phy = [
        {
            qustionText8_phy: 'Турист пройшов уздовж шосе 8 км за 2 години, а потім ще 1 км протягом години по багнистій місцевості. Обчисліть середню швидкість туриста на всьому шляху',
            answerOptions8_phy: [
                {answerText8_phy: '2,5 км/год', isCorrect: false},
                {answerText8_phy: '5 км/год', isCorrect: false},
                {answerText8_phy: '3 км/год', isCorrect: true},
                {answerText8_phy: '4,5 км/год', isCorrect: false}
            ]
        },
        {
            qustionText8_phy: 'Які значення та напрям має прискорення вільно падаючого тіла в системі відліку, пов’язаній з ліфтом, якщо ліфт рухається з прискоренням 15 м/с2, спрямованим униз?',
            answerOptions8_phy: [
                {answerText8_phy: 'Угору, 5 м/с', isCorrect: true},
                {answerText8_phy: 'Угору, 25 м/с', isCorrect: false},
                {answerText8_phy: 'Униз, 5 м/с', isCorrect: false},
                {answerText8_phy: 'Униз, 25 м/с', isCorrect: false}
            ]
        },
        {
            qustionText8_phy: 'Автомобіль масою 2,5 т рухається з постійною швидкістю 54 км/год. Коефіцієнт тертя дорівнює 0,2. Чому дорівнює потужність двигуна?',
            answerOptions8_phy: [
                {answerText8_phy: '100 кВт', isCorrect: false},
                {answerText8_phy: '75 кВт', isCorrect: true},
                {answerText8_phy: '50 кВт', isCorrect: false},
                {answerText8_phy: '25 кВт', isCorrect: false}
            ]
        },
        {
            qustionText8_phy: 'Стіл спричиняє на підлогу тиск 60 кПа чотирма ніжками. Яким стане тиск, якщо на стіл покласти книги, маса яких дорівнює масі столу, а потім відкрутити одну ніжку?',
            answerOptions8_phy: [
                {answerText8_phy: '160 кПа', isCorrect: true},
                {answerText8_phy: '105 кПа', isCorrect: false},
                {answerText8_phy: '135 кПа', isCorrect: false},
                {answerText8_phy: '80 кПа', isCorrect: false}
            ]
        },
        {
            qustionText8_phy: 'Одноатомний ідеальний газ у кількості 4 молей поглинає 2 кДж теплоти. При цьому температура газу підвищується на 20 К. Робота, виконана газом у цьому процесі, дорівнює',
            answerOptions8_phy: [
                {answerText8_phy: '0,5 кДж', isCorrect: false},
                {answerText8_phy: '1,5 кДж', isCorrect: false},
                {answerText8_phy: '1,0 кДж', isCorrect: true},
                {answerText8_phy: '2,0 кДж', isCorrect: false}
            ]
        },
        {
            qustionText8_phy: 'У посудині з рухомим поршнем знаходиться вода і її насичена пара. Об’єм пари ізотермічно зменшили в 2 рази. Концентрація молекул пари при цьому',
            answerOptions8_phy: [
                {answerText8_phy: 'збільшилася в 2 рази', isCorrect: false},
                {answerText8_phy: 'не змінилася', isCorrect: true},
                {answerText8_phy: 'збільшилася в 4 рази', isCorrect: false},
                {answerText8_phy: 'зменшилася в 2 рази', isCorrect: false}
            ]
        },
        {
            qustionText8_phy: 'Плоский повітряний конденсатор зарядили і відключили від джерела струму. Як зміниться енергія електричного поля всередині конденсатора, якщо відстань між пластинами конденсатора збільшити у 2 рази?',
            answerOptions8_phy: [
                {answerText8_phy: 'збільшиться у 2 рази', isCorrect: true},
                {answerText8_phy: 'збільшиться в 4 рази', isCorrect: false},
                {answerText8_phy: 'зменшиться у 2 рази', isCorrect: false},
                {answerText8_phy: 'зменшиться в 4 рази', isCorrect: false}
            ]
        },
        {
            qustionText8_phy: 'Потенціал іонізації атома ртуті дорівнює 10,4 В. Яку найменшу швидкість повинен мати електрон для іонізації атома ртуті при ударі?',
            answerOptions8_phy: [
                {answerText8_phy: '3,69 Мм/с', isCorrect: false},
                {answerText8_phy: '1,92 Мм/с', isCorrect: true},
                {answerText8_phy: '1,35 Мм/с', isCorrect: false},
                {answerText8_phy: '10,12 Мм/с', isCorrect: false}
            ]
        },
        {
            qustionText8_phy: 'На пружині жорсткістю 500 Н/м здійснює коливання вантаж масою 200 г. Чому дорівнює амплітуда коливань вантажу, якщо він проходить положення рівноваги зі швидкістю 3 м/с?',
            answerOptions8_phy: [
                {answerText8_phy: '6 см', isCorrect: true},
                {answerText8_phy: '4 см', isCorrect: false},
                {answerText8_phy: '2 см', isCorrect: false},
                {answerText8_phy: '8 см', isCorrect: false}
            ]
        },
        {
            qustionText8_phy: 'Кут між плоским дзеркалом і падаючим променем збільшився на 6°. Як змінився кут між падаючим і відбитим від дзеркала променями?',
            answerOptions8_phy: [
                {answerText8_phy: 'збільшився на 6°', isCorrect: false},
                {answerText8_phy: 'зменшився на 6°', isCorrect: false},
                {answerText8_phy: 'збільшився на 12°', isCorrect: false},
                {answerText8_phy: 'зменшився на 12°', isCorrect: true}
            ]
        }
    ]

    const [currentQuestion8_phy, setCurrentQuestion8_phy] = useState(0)
    const [score8_phy, setScore8_phy] = useState(0)
    const [showScore8_phy, setShowScore8_phy] = useState(false)

    const handleAnswerOptionClick8_phy = (isCorrect) => {
        if (isCorrect) {
            setScore8_phy(score8_phy +1)
        }

        const nextQuestion8_phy = currentQuestion8_phy + 1
        if (nextQuestion8_phy < questions8_phy.length){
            setCurrentQuestion8_phy(nextQuestion8_phy)
        } else {
            setShowScore8_phy(true)
        }
    }
    return(
        <body className="p_bg8">
            <div className="variant8_phy">
                {
                    showScore8_phy
                        ? <div className="section_score8_phy">
                             <div>Правильних відповідей {score8_phy} з {questions8_phy.length}</div>
                          </div>
                        : <div className="quizz8_phy">
                            <div className="question_section8_phy">
                                <div className="question_count8_phy">
                                    <span>Питання {currentQuestion8_phy + 1} / {questions8_phy.length}</span> 
                                </div>
                                <div className="question_text8_phy">{questions8_phy[currentQuestion8_phy].qustionText8_phy}</div>
                            </div>
                            <div className="answer_section8_phy">
                                {questions8_phy[currentQuestion8_phy].answerOptions8_phy.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick8_phy(item.isCorrect)}
                                >{item.answerText8_phy}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant8_phy