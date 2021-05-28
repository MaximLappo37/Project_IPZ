import React, {useState} from 'react'

import './var8_his.css'
import image_var8_his from './image_var8_his.png';


function Variant8_his(){

    const questions8_his = [
        {
            qustionText8_his: 'Епоха Середньовіччя в історії Європи тривала впродовж',
            answerOptions8_his: [
                {answerText8_his: '395–1380 рр.', isCorrect: false},
                {answerText8_his: '476–1492 рр.', isCorrect: true},
                {answerText8_his: '632–1453 рр.', isCorrect: false},
                {answerText8_his: '843–1517 рр.', isCorrect: false}
            ]
        },
        {
            qustionText8_his: 'Форма правління в країнах Європи епохи Середньовіччя, за якої одноосібна влада монарха обмежувалася владою органу, до складу якого входили представники духовенства, світських феодалів та городян, називається',
            answerOptions8_his: [
                {answerText8_his: 'дуалістична монархія', isCorrect: false},
                {answerText8_his: 'абсолютна монархія', isCorrect: false},
                {answerText8_his: 'станово-представницька монархія', isCorrect: true},
                {answerText8_his: 'деспотична монархія', isCorrect: false}
            ]
        },
        {
            qustionText8_his: 'Що стало одним із наслідків Першого Хрестового походу (1096–1099 рр.)?',
            answerOptions8_his: [
                {answerText8_his: 'падіння Візантійської імперії', isCorrect: false},
                {answerText8_his: 'створення рицарсько-чернечих орденів', isCorrect: true},
                {answerText8_his: 'утворення Іспанського королівства', isCorrect: false},
                {answerText8_his: 'заснування Латинської імперії', isCorrect: false}
            ]
        },
        {
            qustionText8_his: <img
                                    src={image_var8_his}
                                    height="286"
                                    width="556"
                                    alt="Logo"
                                />,
            answerOptions8_his: [
                {answerText8_his: 'романському', isCorrect: false},
                {answerText8_his: 'мавританському', isCorrect: false},
                {answerText8_his: 'візантійському', isCorrect: false},
                {answerText8_his: 'готичному', isCorrect: true}
            ]
        },
        {
            qustionText8_his: 'Слов’яни проживали на території',
            answerOptions8_his: [
                {answerText8_his: 'між Дніпром та Віслою', isCorrect: false},
                {answerText8_his: 'між Доном та Волгою', isCorrect: false},
                {answerText8_his: 'між Віслою та Доном', isCorrect: false},
                {answerText8_his: 'між Дніпром та Одером', isCorrect: true}
            ]
        },
        {
            qustionText8_his: 'Міський уряд, що складався з двох колегіальних виборних органів — ради і лави — у містах, які користувалися магдебурзьким правом, називався:',
            answerOptions8_his: [
                {answerText8_his: 'дума', isCorrect: false},
                {answerText8_his: 'магістрат', isCorrect: true},
                {answerText8_his: 'ратуша', isCorrect: false},
                {answerText8_his: 'сейм', isCorrect: false}
            ]
        },
        {
            qustionText8_his: 'Національно-визвольна боротьба українського народу в роки Другої світової війни відбувалася у формі:',
            answerOptions8_his: [
                {answerText8_his: 'загальнонаціонального антифашистського та антирадянського повстання', isCorrect: false},
                {answerText8_his: 'дій регулярних українських армій у складі військ Антигітлерівської коаліції', isCorrect: false},
                {answerText8_his: 'серії терористичних актів проти вищих посадовців, поєднаних з акціями громадянської непокори', isCorrect: false},
                {answerText8_his: 'підпільної та партизанської боротьби проти загарбників', isCorrect: true}
            ]
        },
        {
            qustionText8_his: 'Діяльність на території УРСР польових військкоматів у 1943—1944 р. привела:',
            answerOptions8_his: [
                {answerText8_his: 'до невиправдано великих жертв під час визволення території республіки', isCorrect: true},
                {answerText8_his: 'до швидкого відновлення економічного потенціалу республіки', isCorrect: false},
                {answerText8_his: 'до широкомасштабного розгортання в тилу ворога партизанського руху', isCorrect: false},
                {answerText8_his: 'до кількісного перевищення Червоної армії над вермахтом', isCorrect: false}
            ]
        },
        {
            qustionText8_his: 'Частина військ Південного фронту Червоної армії в 1941 р. була оточена і розгромлена в районі:',
            answerOptions8_his: [
                {answerText8_his: 'Умані', isCorrect: true},
                {answerText8_his: 'на схід від Києва', isCorrect: false},
                {answerText8_his: 'Луцьк—Рівне—Дубно—Броди', isCorrect: false},
                {answerText8_his: 'Харкова', isCorrect: false}
            ]
        },
        {
            qustionText8_his: 'Протягом 250 днів радянські армійські частини і загони моряків у 1941—1942 рр. відстоювали головну базу Чорноморського флоту місто:',
            answerOptions8_his: [
                {answerText8_his: 'Одесу', isCorrect: false},
                {answerText8_his: 'Херсон', isCorrect: false},
                {answerText8_his: 'Севастополь', isCorrect: true},
                {answerText8_his: 'Новоросійськ', isCorrect: false}
            ]
        },
    ]

    const [currentQuestion8_his, setCurrentQuestion8_his] = useState(0)
    const [score8_his, setScore8_his] = useState(0)
    const [showScore8_his, setShowScore8_his] = useState(false)

    const handleAnswerOptionClick8_his = (isCorrect) => {
        if (isCorrect) {
            setScore8_his(score8_his +1)
        }

        const nextQuestion8_his = currentQuestion8_his + 1
        if (nextQuestion8_his < questions8_his.length){
            setCurrentQuestion8_his(nextQuestion8_his)
        } else {
            setShowScore8_his(true)
        }
    }
    return(
        <body className="h_bg8">
            <div className="variant8_his">
                {
                    showScore8_his
                        ? <div className="section_score8_his">
                             <div>Правильних відповідей {score8_his} з {questions8_his.length}</div>
                          </div>
                        : <div className="quizz8_his">
                            <div className="question_section8_his">
                                <div className="question_count8_his">
                                    <span>Питання {currentQuestion8_his + 1} / {questions8_his.length}</span> 
                                </div>
                                <div className="question_text8_his">{questions8_his[currentQuestion8_his].qustionText8_his}</div>
                            </div>
                            <div className="answer_section8_his">
                                {questions8_his[currentQuestion8_his].answerOptions8_his.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick8_his(item.isCorrect)}
                                >{item.answerText8_his}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant8_his