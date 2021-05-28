import React, {useState} from 'react'

import './var4_geo.css'
import image_var4_geo from './image_var4_geo.png';

function Variant4_geo(){

    const questions4_geo = [
        {
            qustionText4_geo: <img
                                src={image_var4_geo}
                                height="350"
                                width="550"
                                alt="Logo"
                               />,
            answerOptions4_geo: [
                {answerText4_geo: 'США', isCorrect: false},
                {answerText4_geo: 'Китаю', isCorrect: false},
                {answerText4_geo: 'Бразилії', isCorrect: true},
                {answerText4_geo: 'Мексики', isCorrect: false}
            ]
        },
        {
            qustionText4_geo: 'Морський шлях з Європи до Індії прокладено експедицією, яку очолював',
            answerOptions4_geo: [
                {answerText4_geo: 'Амеріго Веспуччі', isCorrect: false},
                {answerText4_geo: 'Джеймс Кук', isCorrect: false},
                {answerText4_geo: 'Марко Поло', isCorrect: false},
                {answerText4_geo: 'Васко да Гама', isCorrect: true}
            ]
        },
        {
            qustionText4_geo: 'У вулканічних гірських породах багато порожнин, які виникли під час охолодження лави. Ці порожнини утворилися внаслідок',
            answerOptions4_geo: [
                {answerText4_geo: 'фізичного вивітрювання порід, що складаються з лави', isCorrect: false},
                {answerText4_geo: 'виділення бульбашок газів з розплавленої лави', isCorrect: true},
                {answerText4_geo: 'випадання інтенсивних дощів на поверхню потоків лави', isCorrect: false},
                {answerText4_geo: 'життєдіяльності організмів, які проникали в потоки лави', isCorrect: false}
            ]
        },
        {
            qustionText4_geo: 'Чому середньорічні температури повітря знижуються від екватора до полюсів?',
            answerOptions4_geo: [
                {answerText4_geo: 'зменшується географічна широта', isCorrect: false},
                {answerText4_geo: 'знижується абсолютна висота поверхні', isCorrect: false},
                {answerText4_geo: 'знижується атмосферний тиск над суходолом', isCorrect: false},
                {answerText4_geo: 'зменшується кут падіння сонячних променів', isCorrect: true}
            ]
        },
        {
            qustionText4_geo: 'Як уплине на підземні води певної місцевості тривала літня засуха?',
            answerOptions4_geo: [
                {answerText4_geo: 'зменшиться вміст солей у мінеральній воді джерела', isCorrect: false},
                {answerText4_geo: 'знизиться рівень води в колодязях (криницях)', isCorrect: true},
                {answerText4_geo: 'збільшиться напір води в артезіанських свердловинах', isCorrect: false},
                {answerText4_geo: 'зросте температура термальних вод родовища', isCorrect: false}
            ]
        },
        {
            qustionText4_geo: 'Який об`єкт розміщений в Атлантичному океані?',
            answerOptions4_geo: [
                {answerText4_geo: 'Аравійське море', isCorrect: false},
                {answerText4_geo: 'острів Мадагаскар', isCorrect: false},
                {answerText4_geo: 'Гібралтарська протока', isCorrect: true},
                {answerText4_geo: 'Великий Бар`єрний риф', isCorrect: false}
            ]
        },
        {
            qustionText4_geo: 'У якій півкулі відносно екватора розміщена Антарктида?',
            answerOptions4_geo: [
                {answerText4_geo: 'Північній', isCorrect: false},
                {answerText4_geo: 'Південній', isCorrect: true},
                {answerText4_geo: 'Західній', isCorrect: false},
                {answerText4_geo: 'Східній', isCorrect: false}
            ]
        },
        {
            qustionText4_geo: 'Яке твердження щодо географічного положення України є правильним?',
            answerOptions4_geo: [
                {answerText4_geo: 'територію майже посередині перетинає Гринвіцький меридіан', isCorrect: false},
                {answerText4_geo: 'суходіл країни омивають води двох морів одного океану', isCorrect: true},
                {answerText4_geo: 'крайня західна точка має західну довготу, а крайня східна - східну', isCorrect: false},
                {answerText4_geo: 'розміщена в помірному, субтропічному й тропічному поясах', isCorrect: false}
            ]
        },
        {
            qustionText4_geo: 'На півдні Південної Америки взимку бувають морози, а на півдні Африки й Австралії - ні. Яка особливість цієї частини материка зумовлює відмінність клімату?',
            answerOptions4_geo: [
                {answerText4_geo: 'розміщення в помірних широтах', isCorrect: true},
                {answerText4_geo: 'більша протяжність із заходу на схід', isCorrect: false},
                {answerText4_geo: 'менший вплив сусіднього материка', isCorrect: false},
                {answerText4_geo: 'домінування пустельних ландшафтів', isCorrect: false}
            ]
        },
        {
            qustionText4_geo: 'Інтенсивна лісозаготівля в Українських Карпатах спричиняє',
            answerOptions4_geo: [
                {answerText4_geo: 'збільшення потужності селів', isCorrect: true},
                {answerText4_geo: 'активізацію сейсмічних явищ', isCorrect: false},
                {answerText4_geo: 'зміну висоти снігової лінії', isCorrect: false},
                {answerText4_geo: 'підвищення температури повітря', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion4_geo, setCurrentQuestion4_geo] = useState(0)
    const [score4_geo, setScore4_geo] = useState(0)
    const [showScore4_geo, setShowScore4_geo] = useState(false)

    const handleAnswerOptionClick4_geo = (isCorrect) => {
        if (isCorrect) {
            setScore4_geo(score4_geo +1)
        }

        const nextQuestion4_geo = currentQuestion4_geo + 1
        if (nextQuestion4_geo < questions4_geo.length){
            setCurrentQuestion4_geo(nextQuestion4_geo)
        } else {
            setShowScore4_geo(true)
            
        }
    }
    return(
        <body className="g_bg4">
            <div className="variant4_geo">
                {
                    showScore4_geo
                        ? <div className="section_score4_geo">
                             <div >Правильних відповідей {score4_geo} з {questions4_geo.length}</div>
                          </div>
                        : <div className="quizz4_geo">
                            <div className="question_section4_geo">
                                <div className="question_count4_geo">
                                    <span>Питання {currentQuestion4_geo + 1} / {questions4_geo.length}</span> 
                                </div>
                                <div className="question_text4_geo">{questions4_geo[currentQuestion4_geo].qustionText4_geo}</div>
                            </div>
                            <div className="answer_section4_geo">
                                {questions4_geo[currentQuestion4_geo].answerOptions4_geo.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick4_geo(item.isCorrect)}
                                >{item.answerText4_geo}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant4_geo