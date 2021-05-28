import React, {useState} from 'react'

import './var2_math.css'
//import image_var4_geo from './image_var4_geo.png';

function Variant2_m(){

    const questions2_m = [
        {
            qustionText2_m: 'Знайдіть проміжки спадання функції f (x) = x3 − 3x2.',
            answerOptions2_m: [
                {answerText2_m: '(2; +∞)', isCorrect: false},
                {answerText2_m: '(– ∞; 0)', isCorrect: false},
                {answerText2_m: '(0; 2)', isCorrect: true},
                {answerText2_m: ' (1; +∞)', isCorrect: false}
            ]
        },
        {
            qustionText2_m: 'Знайдіть проміжки зростання функції у = х2 – 6х + 9.',
            answerOptions2_m: [
                {answerText2_m: '(– 3; 3)', isCorrect: false},
                {answerText2_m: '(– ∞; – 3)', isCorrect: false},
                {answerText2_m: '(– ∞; 3)', isCorrect: false},
                {answerText2_m: '(3; +∞)', isCorrect: true}
            ]
        },
        {
            qustionText2_m: 'Із натуральних чисел від 1 до 30 учень навмання називає одне. Яка ймовірність того, що це число кратне числу 5?',
            answerOptions2_m: [
                {answerText2_m: '1', isCorrect: false},
                {answerText2_m: '0.2', isCorrect: true},
                {answerText2_m: '0.25', isCorrect: false},
                {answerText2_m: '0.4', isCorrect: false}
            ]
        },
        {
            qustionText2_m: 'Із повного набору доміно (28 штук) виймають навмання одне. Яка ймовірність того, що це доміно буде дублем?',
            answerOptions2_m: [
                {answerText2_m: '0.3333', isCorrect: false},
                {answerText2_m: '0.1', isCorrect: false},
                {answerText2_m: '0.5', isCorrect: false},
                {answerText2_m: '0.25', isCorrect: true}
            ]
        },
        {
            qustionText2_m: 'Із літер, написаних на окремих картках, склали слово «математика». Потім ці картки поміняли місцями, перетасували та взяли навмання одну з них. Яка ймовірність того, що це буде картка з літерою А?',
            answerOptions2_m: [
                {answerText2_m: '0,5', isCorrect: false},
                {answerText2_m: '0,3', isCorrect: true},
                {answerText2_m: '0,4', isCorrect: false},
                {answerText2_m: '0,1', isCorrect: false}
            ]
        },
        {
            qustionText2_m: 'В автоматі містяться 100 пронумерованих жетонів (від 1 до 100). Знайдіть імовірність того, що номер навмання витягнутого жетона не має цифру 3.',
            answerOptions2_m: [
                {answerText2_m: '0,38', isCorrect: false},
                {answerText2_m: '0,19', isCorrect: false},
                {answerText2_m: '0,81', isCorrect: true},
                {answerText2_m: '0,9', isCorrect: false}
            ]
        },
        {
            qustionText2_m: 'Із натуральних чисел від 1 до 20 учень навмання називає одне. Яка ймовірність того, що це число є дільником числа 20?',
            answerOptions2_m: [
                {answerText2_m: '1/10', isCorrect: false},
                {answerText2_m: '3/10', isCorrect: true},
                {answerText2_m: '1/6', isCorrect: false},
                {answerText2_m: '1/4', isCorrect: false}
            ]
        },
        {
            qustionText2_m: 'Із натуральних чисел від 1 до 30 учень навмання називає одне. Яка ймовірність того, що це число ділиться на 7 з остачею 1?',
            answerOptions2_m: [
                {answerText2_m: '1/4', isCorrect: false},
                {answerText2_m: '2/15', isCorrect: true},
                {answerText2_m: '1/3', isCorrect: false},
                {answerText2_m: '1', isCorrect: false}
            ]
        },
        {
            qustionText2_m: 'У місті запроваджено семицифрову нумерацію телефонів. Пан Тарас має намір зателефонувати до пані Лариси, що проживає в іншому районі міста. Він пам’ятає, що усі цифри її телефонного номера різні, але забув три останні з них. Яка ймовірність того, що перша спроба пана Тараса набрати правильний номер буде вдалою?',
            answerOptions2_m: [
                {answerText2_m: '1/120', isCorrect: true},
                {answerText2_m: '1/240', isCorrect: false},
                {answerText2_m: '1/720', isCorrect: false},
                {answerText2_m: '1/1000', isCorrect: false}
            ]
        },
        {
            qustionText2_m: 'Задано цифри 1, 2, 3, 4, 5, 6. Із них утворюють усі можливі шестицифрові числа, використовуючи кожну цифру тільки один раз. Знайдіть імовірність того, що взяте навмання одне з чисел ділитиметься на 5.',
            answerOptions2_m: [
                {answerText2_m: '1/6', isCorrect: true},
                {answerText2_m: '1/720', isCorrect: false},
                {answerText2_m: '1/2', isCorrect: false},
                {answerText2_m: '1/5', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion2_m, setCurrentQuestion2_m] = useState(0)
    const [score2_m, setScore2_m] = useState(0)
    const [showScore2_m, setShowScore2_m] = useState(false)

    const handleAnswerOptionClick2_m = (isCorrect) => {
        if (isCorrect) {
            setScore2_m(score2_m +1)
        }

        const nextQuestion2_m = currentQuestion2_m + 1
        if (nextQuestion2_m < questions2_m.length){
            setCurrentQuestion2_m(nextQuestion2_m)
        } else {
            setShowScore2_m(true)
        }
    }
    return(
        <body className="m_bg2">
            <div className="variant2_m">
                {
                    showScore2_m
                        ? <div className="section_score2_m">
                             <div>Правильних відповідей {score2_m} з {questions2_m.length}</div>
                          </div>
                        : <div className="quizz2_m">
                            <div className="question_section2_m">
                                <div className="question_count2_m">
                                    <span>Питання {currentQuestion2_m + 1} / {questions2_m.length}</span> 
                                </div>
                                <div className="question_text2_m">{questions2_m[currentQuestion2_m].qustionText2_m}</div>
                            </div>
                            <div className="answer_section2_m">
                                {questions2_m[currentQuestion2_m].answerOptions2_m.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick2_m(item.isCorrect)}
                                >{item.answerText2_m}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant2_m