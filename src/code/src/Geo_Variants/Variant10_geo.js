import React, {useState} from 'react'

import './var10_geo.css'
import image_var10_geo from './image_var10_geo.png';

function Variant10_geo(){

    const questions10_geo = [
        {
            qustionText10_geo: 'Планета Земля',
            answerOptions10_geo: [
                {answerText10_geo: 'має форму геоїда із середнім радіусом приблизно 6,37 тис. км', isCorrect: true},
                {answerText10_geo: 'здійснює повний оберт навколо Сонця приблизно за 24 години', isCorrect: false},
                {answerText10_geo: 'рухається навколо своє`ї осі зі швидкістю 90° за годину', isCorrect: false},
                {answerText10_geo: 'має віддалений на 100 тис. км природний супутник - Сонце', isCorrect: false}
            ]
        },
        {
            qustionText10_geo: <img
                                src={image_var10_geo}
                                height="300"
                                width="533"
                                alt="Logo"
                                />,
            answerOptions10_geo: [
                {answerText10_geo: 'Христофор Колумб', isCorrect: false},
                {answerText10_geo: 'Фернандо Маґеллан', isCorrect: true},
                {answerText10_geo: 'Вітус Беринг', isCorrect: false},
                {answerText10_geo: 'Васко да Гама', isCorrect: false}
            ]
        },
        {
            qustionText10_geo: 'Який півострів омивається водами Атлантичного океану?',
            answerOptions10_geo: [
                {answerText10_geo: 'Піренейський', isCorrect: true},
                {answerText10_geo: 'Чукотський', isCorrect: false},
                {answerText10_geo: 'Каліфорнія', isCorrect: false},
                {answerText10_geo: 'Аляска', isCorrect: false}
            ]
        },
        {
            qustionText10_geo: 'Чим подібні на політичній карті світу всі сім країн, з якими Україна має спільний кордон?',
            answerOptions10_geo: [
                {answerText10_geo: 'формою державного правління - це республіки', isCorrect: true},
                {answerText10_geo: 'політико-територіальним устроєм - це федерації', isCorrect: false},
                {answerText10_geo: 'економічною системою - це країни планової економіки', isCorrect: false},
                {answerText10_geo: 'географічним положенням - це приморські країни', isCorrect: false}
            ]
        },
        {
            qustionText10_geo: 'Чому в Бразилії, Аргентині, Австралії м`ясне скотарство є галуззю спеціалізації?',
            answerOptions10_geo: [
                {answerText10_geo: 'країни компактно розташовані в Південній півкулі', isCorrect: false},
                {answerText10_geo: 'завершується процес індустріалізації економіки', isCorrect: false},
                {answerText10_geo: 'зберігається другий тип відтворення населення', isCorrect: false},
                {answerText10_geo: 'є великі площі продуктивних природних пасовищ', isCorrect: true}
            ]
        },
        {
            qustionText10_geo: 'На грошових банкнотах яких країн зображено вулкани як унікальні елементи їхнього ландшафту?',
            answerOptions10_geo: [
                {answerText10_geo: 'Польщі, Білорусі', isCorrect: false},
                {answerText10_geo: 'Єгипту, Лівії', isCorrect: false},
                {answerText10_geo: 'Бразилії, Аргентини', isCorrect: false},
                {answerText10_geo: 'Японії, Філіппін', isCorrect: true}
            ]
        },
        {
            qustionText10_geo: 'Як називаеться короткочасне раптове підняття води в річці?',
            answerOptions10_geo: [
                {answerText10_geo: 'заплава', isCorrect: false},
                {answerText10_geo: 'межень', isCorrect: false},
                {answerText10_geo: 'паводок', isCorrect: true},
                {answerText10_geo: 'приплив', isCorrect: false}
            ]
        },
        {
            qustionText10_geo: 'Чому в тропічних широтах солоність поверхневих вод Світового океану вища, ніж в екваторіальних?',
            answerOptions10_geo: [
                {answerText10_geo: 'у тропічних широтах випадає менше опадів, ніж в екваторіальних', isCorrect: true},
                {answerText10_geo: 'тропічні водні маси мають нижчу температуру, ніж екваторіальні', isCorrect: false},
                {answerText10_geo: 'біля тропіків знаходяться гирла найповноводніших річок світу', isCorrect: false},
                {answerText10_geo: 'у тропічних водах бідніший органічний світ, ніж в екваторіальних', isCorrect: false}
            ]
        },
        {
            qustionText10_geo: 'Що спільного в рельєфі Африки, Австралії та Південної Америки?',
            answerOptions10_geo: [
                {answerText10_geo: 'на півночі цих материків - плоскогір`я, а на півдні - низовини', isCorrect: false},
                {answerText10_geo: 'у центральній частині кожного материка - гори й нагір`я', isCorrect: false},
                {answerText10_geo: 'на цих материках переважають рівнини різної висоти', isCorrect: true},
                {answerText10_geo: 'домінують низовини з ерозійними формами поверхні', isCorrect: false}
            ]
        },
        {
            qustionText10_geo: 'У США автомобільний транспорт перевозить 25 % вантажів у межах країни, а у Великій Британії - 80 %. Чому значення автомобільного транспорту у внутрішніх перевезеннях вантажів у Великій Британії істотно більше, ніж у США?',
            answerOptions10_geo: [
                {answerText10_geo: 'нижчий рівень економічного розвитку країни', isCorrect: false},
                {answerText10_geo: 'більша кількість міст і міського населення', isCorrect: false},
                {answerText10_geo: 'більший тоннаж морського й річкового флоту', isCorrect: false},
                {answerText10_geo: 'менша площа країни й середня відстань перевезень', isCorrect: true}
            ]
        }
    ]

    const [currentQuestion10_geo, setCurrentQuestion10_geo] = useState(0)
    const [score10_geo, setScore10_geo] = useState(0)
    const [showScore10_geo, setShowScore10_geo] = useState(false)

    const handleAnswerOptionClick10_geo = (isCorrect) => {
        if (isCorrect) {
            setScore10_geo(score10_geo +1)
        }

        const nextQuestion10_geo = currentQuestion10_geo + 1
        if (nextQuestion10_geo < questions10_geo.length){
            setCurrentQuestion10_geo(nextQuestion10_geo)
        } else {
            setShowScore10_geo(true)
        }
    }
    return(
        <body className="g_bg10">
            <div className="variant10_geo">
                {
                    showScore10_geo
                        ? <div className="section_score10_geo">
                             <div>Правильних відповідей {score10_geo} з {questions10_geo.length}</div>
                          </div>
                        : <div className="quizz10_geo">
                            <div className="question_section10_geo">
                                <div className="question_count10_geo">
                                    <span>Питання {currentQuestion10_geo + 1} / {questions10_geo.length}</span> 
                                </div>
                                <div className="question_text10_geo">{questions10_geo[currentQuestion10_geo].qustionText10_geo}</div>
                            </div>
                            <div className="answer_section10_geo">
                                {questions10_geo[currentQuestion10_geo].answerOptions10_geo.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick10_geo(item.isCorrect)}
                                >{item.answerText10_geo}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant10_geo