import React, {useState} from 'react'

import './var9_phy.css'
function Variant9_phy(){

    const questions9_phy = [
        {
            qustionText9_phy: 'На останньому кілометрі гальмівного шляху швидкість поїзда зменшилася на 10 м/с. Визначте швидкість на початку гальмування, якщо загальний гальмівний шлях поїзда становив 4 км. Рух вважати рівносповільненим',
            answerOptions9_phy: [
                {answerText9_phy: '25 м/с', isCorrect: false},
                {answerText9_phy: '40 м/с', isCorrect: false},
                {answerText9_phy: '20 м/с', isCorrect: true},
                {answerText9_phy: '42 м/с', isCorrect: false}
            ]
        },
        {
            qustionText9_phy: 'На ліве плече важеля діє сила 30 Н, а на праве — 90 Н. Важіль перебуває в рівновазі. Визначте його ліве плече, якщо праве дорівнює 60 см. Вагою важеля знехтуйте.',
            answerOptions9_phy: [
                {answerText9_phy: '1 м 80 см', isCorrect: true},
                {answerText9_phy: '20 см', isCorrect: false},
                {answerText9_phy: '60 см', isCorrect: false},
                {answerText9_phy: '30 см', isCorrect: false}
            ]
        },
        {
            qustionText9_phy: 'Дві людини несуть металеву трубу, поклавши її собі на плечі. Перша підтримує трубу на відстані 1 м від її кінця, друга тримає протилежний кінець труби. У скільки разів навантаження, що припадає на першу людину, більше, ніж на другу, якщо довжина труби 2,5 м?',
            answerOptions9_phy: [
                {answerText9_phy: '2', isCorrect: false},
                {answerText9_phy: '5', isCorrect: true},
                {answerText9_phy: '3', isCorrect: false},
                {answerText9_phy: '4', isCorrect: false}
            ]
        },
        {
            qustionText9_phy: 'Чотири однакових листа фанери завтовшки 6 см кожен, зв’язані в стопку, плавають у воді так, що рівень води відповідає межі між двома середніми листами. Якщо в стопку додати ще один такий же лист, то глибина занурення стопки листів фанери збільшиться на',
            answerOptions9_phy: [
                {answerText9_phy: '1,5 см', isCorrect: false},
                {answerText9_phy: '3 см', isCorrect: true},
                {answerText9_phy: '6 см', isCorrect: false},
                {answerText9_phy: '2 см', isCorrect: false}
            ]
        },
        {
            qustionText9_phy: 'Для ізобарного нагрівання 400 моль газу на 292 ºС йому було передано 4,7 МДж теплоти. Визначте зміну його внутрішньої енергії.',
            answerOptions9_phy: [
                {answerText9_phy: '3,04 Мдж', isCorrect: false},
                {answerText9_phy: '3,15 МДж', isCorrect: false},
                {answerText9_phy: '2,93 МДж', isCorrect: false},
                {answerText9_phy: '3,7 МДж', isCorrect: true}
            ]
        },
        {
            qustionText9_phy: 'Крапля води витікає з вертикальної трубки діаметром 1 мм. Визначте масу краплі в момент відриву.',
            answerOptions9_phy: [
                {answerText9_phy: '23,4 г', isCorrect: false},
                {answerText9_phy: '2,3 г', isCorrect: false},
                {answerText9_phy: '234 мг', isCorrect: false},
                {answerText9_phy: '23,4 мг', isCorrect: true}
            ]
        },
        {
            qustionText9_phy: 'До одного кінця незарядженого стрижня з діелектрика піднесений без дотику позитивний заряд. Якщо від стрижня в цей час відокремиться другий його кінець, то який електричний заряд на ньому буде виявлено?',
            answerOptions9_phy: [
                {answerText9_phy: 'залежно від розмірів відокремленої частини знак заряду може бути позитивним або негативним', isCorrect: false},
                {answerText9_phy: 'будь-яка частина стержня не має електричного заряду', isCorrect: true},
                {answerText9_phy: 'негативний', isCorrect: false},
                {answerText9_phy: 'позитивний', isCorrect: false}
            ]
        },
        {
            qustionText9_phy: 'Яким чином звільняються з катода електрони, які створюють зображення в електронно-променевій трубці телевізора?',
            answerOptions9_phy: [
                {answerText9_phy: 'у результаті дії електричного поля між катодом і анодом', isCorrect: false},
                {answerText9_phy: 'у результаті бомбардування катода позитивними іонами', isCorrect: false},
                {answerText9_phy: 'у результаті іонізації атомів електронним ударом', isCorrect: false},
                {answerText9_phy: 'у результаті термоелектронної емісії', isCorrect: true}
            ]
        },
        {
            qustionText9_phy: 'Вантаж масою 640 г, закріплений на пружині жорсткістю 400 Н/м, відвели від положення рівноваги на 4 см і відпустили. З якою швидкістю вантаж буде проходити положення равноваги?',
            answerOptions9_phy: [
                {answerText9_phy: '0,25 м/с', isCorrect: false},
                {answerText9_phy: '0,5 м/с', isCorrect: false},
                {answerText9_phy: '1 м/с', isCorrect: true},
                {answerText9_phy: '2 м/с', isCorrect: false}
            ]
        },
        {
            qustionText9_phy: 'Промінь світла падає на плоске дзеркало. Кут між падаючим і відбитим променями дорівнює 30°. Кут між відбитим променем і дзеркалом дорівнює',
            answerOptions9_phy: [
                {answerText9_phy: '75°', isCorrect: true},
                {answerText9_phy: '115°', isCorrect: false},
                {answerText9_phy: '30°', isCorrect: false},
                {answerText9_phy: '15°', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion9_phy, setCurrentQuestion9_phy] = useState(0)
    const [score9_phy, setScore9_phy] = useState(0)
    const [showScore9_phy, setShowScore9_phy] = useState(false)

    const handleAnswerOptionClick9_phy = (isCorrect) => {
        if (isCorrect) {
            setScore9_phy(score9_phy +1)
        }

        const nextQuestion9_phy = currentQuestion9_phy + 1
        if (nextQuestion9_phy < questions9_phy.length){
            setCurrentQuestion9_phy(nextQuestion9_phy)
        } else {
            setShowScore9_phy(true)
        }
    }
    return(
        <body className="p_bg9">
            <div className="variant9_phy">
                {
                    showScore9_phy
                        ? <div className="section_score9_phy">
                             <div>Правильних відповідей {score9_phy} з {questions9_phy.length}</div>
                          </div>
                        : <div className="quizz9_phy">
                            <div className="question_section9_phy">
                                <div className="question_count9_phy">
                                    <span>Питання {currentQuestion9_phy + 1} / {questions9_phy.length}</span> 
                                </div>
                                <div className="question_text9_phy">{questions9_phy[currentQuestion9_phy].qustionText9_phy}</div>
                            </div>
                            <div className="answer_section9_phy">
                                {questions9_phy[currentQuestion9_phy].answerOptions9_phy.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick9_phy(item.isCorrect)}
                                >{item.answerText9_phy}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant9_phy