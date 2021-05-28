import React, {useState} from 'react'

import './var6_his.css'
import image_var6_his from './image_var6_his.png';


function Variant6_his(){

    const questions6_his = [
        {
            qustionText6_his: 'Поява «Бізонії», а згодом «Тризонії» пов’язано із процесом',
            answerOptions6_his: [
                {answerText6_his: 'утворення Федеративної Республіки Німеччини.', isCorrect: true},
                {answerText6_his: 'формування Європейського Економічного Співтовариства.', isCorrect: false},
                {answerText6_his: 'розпаду Британської колоніальної імперії.', isCorrect: false},
                {answerText6_his: 'становлення П’ятої республіки у Франції', isCorrect: false}
            ]
        },
        {
            qustionText6_his: <img
                                    src={image_var6_his}
                                    height="387"
                                    width="545"
                                    alt="Logo"
                                />,
            answerOptions6_his: [
                {answerText6_his: 'Й. Сталін.', isCorrect: false},
                {answerText6_his: 'М. Хрущов.', isCorrect: true},
                {answerText6_his: 'Л. Брежнєв.', isCorrect: false},
                {answerText6_his: 'М. Горбачов.', isCorrect: false}
            ]
        },
        {
            qustionText6_his: 'У результаті «оксамитової революції» 1989 р. Вацлав Гавел став президентом',
            answerOptions6_his: [
                {answerText6_his: 'Польщі', isCorrect: false},
                {answerText6_his: 'Чехословаччини', isCorrect: true},
                {answerText6_his: 'Угорщини', isCorrect: false},
                {answerText6_his: 'Румунії', isCorrect: false}
            ]
        },
        {
            qustionText6_his: 'Укажіть головне джерело рабства в Єгипті в період Нового Царства',
            answerOptions6_his: [
                {answerText6_his: 'громадяни, які скоїли тяжкі злочини', isCorrect: false},
                {answerText6_his: 'ремісники, які не повернули борг лихвареві', isCorrect: false},
                {answerText6_his: 'селяни, які втратили свої земельні наділи', isCorrect: false},
                {answerText6_his: 'полонені, захоплені під час воєн', isCorrect: true}
            ]
        },
        {
            qustionText6_his: 'Які зміни в соціально-економічному життя східних слов’ян сприяли створенню Давньоруської держави?',
            answerOptions6_his: [
                {answerText6_his: 'занепад ролі ради старійшин і зникнення віча – органу громадського управління', isCorrect: false},
                {answerText6_his: 'запровадження державної релігії та кодифікованого права', isCorrect: false},
                {answerText6_his: 'розпад родоплемінного ладу, початок класової диференціації', isCorrect: true},
                {answerText6_his: 'підвищення продуктивності праці в землеробстві, удосконалення ремісничого виробництва', isCorrect: false}
            ]
        },
        {
            qustionText6_his: 'Столицею Кримського ханства було місто:',
            answerOptions6_his: [
                {answerText6_his: 'Гезльов', isCorrect: false},
                {answerText6_his: 'Перекоп', isCorrect: false},
                {answerText6_his: 'Бахчисарай', isCorrect: true},
                {answerText6_his: 'Кафа', isCorrect: false}
            ]
        },
        {
            qustionText6_his: 'Проголошення Акта відновлення Української держави у Львові 30 червня 1941 р. стало можливим:',
            answerOptions6_his: [
                {answerText6_his: 'через бажання радянського керівництва зберегти контроль над Україною', isCorrect: false},
                {answerText6_his: 'у результаті цілеспрямованих дій німецької окупаційної адміністрації', isCorrect: false},
                {answerText6_his: 'у результаті цілеспрямованих дій ОУН(Б)', isCorrect: true},
                {answerText6_his: 'через підтримку Угорщиною та Румунією ідеї створення буферної Української держави', isCorrect: false}
            ]
        },
        {
            qustionText6_his: 'Воєнна операція з оборони Києва влітку—восени 1941 р. завершилась:',
            answerOptions6_his: [
                {answerText6_his: 'стабілізацією фронту і переходом до позиційної війни', isCorrect: false},
                {answerText6_his: 'катастрофою Південно-Західного фронту', isCorrect: true},
                {answerText6_his: 'перемогою Червоної армії у битві за Дніпро', isCorrect: false},
                {answerText6_his: 'переходом Червоної армії у контрнаступ', isCorrect: false}
            ]
        },
        {
            qustionText6_his: 'Улітку—восени 1941 р. Червона армія на території УРСР вела:',
            answerOptions6_his: [
                {answerText6_his: 'оборонні бої, відступаючи на Схід', isCorrect: true},
                {answerText6_his: 'широкомасштабні наступальні операції', isCorrect: false},
                {answerText6_his: '«позиційну війну», стримуючи наступ ворога', isCorrect: false},
                {answerText6_his: 'успішні наступальні дії на окремих ділянках фронту', isCorrect: false}
            ]
        },
        {
            qustionText6_his: 'Із поданого переліку оберіть пункт, який відповідає змістові нацистського плану «Ост».',
            answerOptions6_his: [
                {answerText6_his: 'розчленування території України і створення декількох маріонеткових українських держав', isCorrect: false},
                {answerText6_his: 'перетворення України на «життєвий простір арійської раси»', isCorrect: true},
                {answerText6_his: 'включення України до складу ІІІ рейху на правах автономії', isCorrect: false},
                {answerText6_his: 'перетворення України на промислову базу ІІІ рейху і джерело дешевої робочої сили', isCorrect: false}
            ]
        },
    ]

    const [currentQuestion6_his, setCurrentQuestion6_his] = useState(0)
    const [score6_his, setScore6_his] = useState(0)
    const [showScore6_his, setShowScore6_his] = useState(false)

    const handleAnswerOptionClick6_his = (isCorrect) => {
        if (isCorrect) {
            setScore6_his(score6_his +1)
        }

        const nextQuestion6_his = currentQuestion6_his + 1
        if (nextQuestion6_his < questions6_his.length){
            setCurrentQuestion6_his(nextQuestion6_his)
        } else {
            setShowScore6_his(true)
        }
    }
    return(
        <body className="h_bg6">
            <div className="variant6_his">
                {
                    showScore6_his
                        ? <div className="section_score6_his">
                             <div>Правильних відповідей {score6_his} з {questions6_his.length}</div>
                          </div>
                        : <div className="quizz6_his">
                            <div className="question_section6_his">
                                <div className="question_count6_his">
                                    <span>Питання {currentQuestion6_his + 1} / {questions6_his.length}</span> 
                                </div>
                                <div className="question_text6_his">{questions6_his[currentQuestion6_his].qustionText6_his}</div>
                            </div>
                            <div className="answer_section6_his">
                                {questions6_his[currentQuestion6_his].answerOptions6_his.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick6_his(item.isCorrect)}
                                >{item.answerText6_his}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant6_his