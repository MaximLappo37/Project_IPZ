
import React, {useState} from 'react'

import './var1_math.css'
//import image_var4_geo from './image_var4_geo.png';

function Variant1_m(){

    const questions1_m = [
        {
            qustionText1_m: 'Група з 15 школярів у супроводі трьох дорослих планує автобусну екскурсію в заповідник. Оренда автобуса для екскурсії коштує 800 грн. Вартість вхідного квитка в заповідник становить 20 грн для школяра й 50 грн – для дорослого. Якої мінімальної суми грошей достатньо для проведення цієї екскурсії?',
            answerOptions1_m: [
                {answerText1_m: '1050 грн', isCorrect: false},
                {answerText1_m: '1150 грн', isCorrect: false},
                {answerText1_m: '1250 грн', isCorrect: true},
                {answerText1_m: '870 грн', isCorrect: false}
            ]
        },
        {
            qustionText1_m: 'Сума довжин усіх ребер прямокутного паралелепіпеда, що виходять з однієї вершини, дорівнює 60 см. Визначте суму довжин усіх ребер цього паралелепіпеда.',
            answerOptions1_m: [
                {answerText1_m: '120 см', isCorrect: false},
                {answerText1_m: '180 см', isCorrect: false},
                {answerText1_m: '360 см', isCorrect: false},
                {answerText1_m: '240 см', isCorrect: true}
            ]
        },
        {
            qustionText1_m: 'Цукерку циліндричної форми висотою 10 см і радіусом основи 1 см запаковано в коробку, що має форму правильної трикутної призми (див. рисунок). Основи циліндра вписано у відповідні основи призми. Основи коробки (призми) виготовлено з поліетилену, а всі її бічні грані – з паперу. Визначте площу паперу, витраченого на виготовлення такої коробки. Укажіть /відповідь, найближчу до точної. Витратами паперу на з’єднання граней коробки знехтуйте.',
            answerOptions1_m: [
                {answerText1_m: '55', isCorrect: false},
                {answerText1_m: '105', isCorrect: true},
                {answerText1_m: '115', isCorrect: false},
                {answerText1_m: '135', isCorrect: false}
            ]
        },
        {
            qustionText1_m: 'Автомобіль двічі заправляли пальним і щоразу по 40 л. Ціна пального, використаного під час першого заправлення, становила 20 грн за 1 л. Порівняно з нею ціна пального, використаного для другого заправлення, була більшою на 2,5 %. Скільки гривень коштував 1 л пального, використаного для другого заправлення?',
            answerOptions1_m: [
                {answerText1_m: '25', isCorrect: false},
                {answerText1_m: '18', isCorrect: false},
                {answerText1_m: '19,5', isCorrect: false},
                {answerText1_m: '20.5', isCorrect: true}
            ]
        },
        {
            qustionText1_m: 'Тривалість зеленого сигналу світлофора на 15 с довша за тривалість червоного сигналу й у дванадцять разів довша за тривалість жовтого сигналу. Яка тривалість (у с) червоного сигналу, якщо тривалість зеленого сигналу відноситься до сумарної тривалості червоного й жовтого сигналів як 3 до 2?',
            answerOptions1_m: [
                {answerText1_m: '22', isCorrect: false},
                {answerText1_m: '21', isCorrect: true},
                {answerText1_m: '23', isCorrect: false},
                {answerText1_m: '24', isCorrect: false}
            ]
        },
        {
            qustionText1_m: 'На курсах з вивчення іноземних мов як бонус запропоновано два безкоштовні заняття, одне з яких проводитимуть дистанційно, а друге – в аудиторії. Тему кожного з цих двох занять слухач може вибрати самостійно з 10 запропонованих. Скільки всього існує способів вибору форм проведення цих двох занять та різних тем до них?',
            answerOptions1_m: [
                {answerText1_m: '60', isCorrect: false},
                {answerText1_m: '30', isCorrect: false},
                {answerText1_m: '90', isCorrect: true},
                {answerText1_m: '120', isCorrect: false}
            ]
        },
        {
            qustionText1_m: 'Виразіть у відсотках число 0,125.',
            answerOptions1_m: [
                {answerText1_m: '0,0125 %', isCorrect: false},
                {answerText1_m: '12,5%', isCorrect: true},
                {answerText1_m: '125 %', isCorrect: false},
                {answerText1_m: '1,25 %', isCorrect: false}
            ]
        },
        {
            qustionText1_m: 'Вкладник поклав до банку деяку суму грошей під 3 % річних. Через рік його вклад становив 576,8 грн. Скільки гривень становив початковий внесок вкладника?',
            answerOptions1_m: [
                {answerText1_m: '540 грн', isCorrect: false},
                {answerText1_m: '560 грн', isCorrect: true},
                {answerText1_m: '550 грн', isCorrect: false},
                {answerText1_m: '520 грн', isCorrect: false}
            ]
        },
        {
            qustionText1_m: 'Визначте відсоток солі у розчині, якщо відомо, що в 300 г розчину міститься 15 г солі.',
            answerOptions1_m: [
                {answerText1_m: '5 %', isCorrect: true},
                {answerText1_m: '20 %', isCorrect: false},
                {answerText1_m: '15 %', isCorrect: false},
                {answerText1_m: '10 %', isCorrect: false}
            ]
        },
        {
            qustionText1_m: 'Цукровий буряк містить 10 % цукру. Скільки кілограмів цукрових буряків треба переробити, щоб одержати 4 кг цукру?',
            answerOptions1_m: [
                {answerText1_m: '40 кг', isCorrect: true},
                {answerText1_m: '10 кг', isCorrect: false},
                {answerText1_m: '50 кг', isCorrect: false},
                {answerText1_m: '0,4 кг', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion1_m, setCurrentQuestion1_m] = useState(0)
    const [score1_m, setScore1_m] = useState(0)
    const [showScore1_m, setShowScore1_m] = useState(false)

    const handleAnswerOptionClick1_m = (isCorrect) => {
        if (isCorrect) {
            setScore1_m(score1_m +1)
        }

        const nextQuestion1_m = currentQuestion1_m + 1
        if (nextQuestion1_m < questions1_m.length){
            setCurrentQuestion1_m(nextQuestion1_m)
        } else {
            setShowScore1_m(true)
        }
    }
    return(
        <body className="m_bg1">
            <div className="variant1_m">
                {
                    showScore1_m
                        ? <div className="section_score1_m">
                             <div>Правильних відповідей {score1_m} з {questions1_m.length}</div>
                          </div>
                        : <div className="quizz1_m">
                            <div className="question_section1_m">
                                <div className="question_count1_m">
                                    <span>Питання {currentQuestion1_m + 1} / {questions1_m.length}</span> 
                                </div>
                                <div className="question_text1_m">{questions1_m[currentQuestion1_m].qustionText1_m}</div>
                            </div>
                            <div className="answer_section1_m">
                                {questions1_m[currentQuestion1_m].answerOptions1_m.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick1_m(item.isCorrect)}
                                >{item.answerText1_m}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant1_m