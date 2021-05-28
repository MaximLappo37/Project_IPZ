import React, {useState} from 'react'

import './var2_his.css'
import image_var2_his from './image_var2_his.png';

function Variant2_his(){

    const questions2_his = [
        {
            qustionText2_his: 'Тип підприємства, у якому використовувалися ручні знаряддя праці та існував поділ праці між виробниками, називається',
            answerOptions2_his: [
                {answerText2_his: 'цех', isCorrect: false},
                {answerText2_his: 'фабрика', isCorrect: false},
                {answerText2_his: 'мануфактура', isCorrect: true},
                {answerText2_his: 'майстерня', isCorrect: false}
            ]
        },
        {
            qustionText2_his: 'Зловживання якою нормою церковного права католицьким духовенством стало поштовхом до розгортання Реформації в країнах Західної Європи?',
            answerOptions2_his: [
                {answerText2_his: 'стягнення десятини', isCorrect: false},
                {answerText2_his: 'відлучення від церкви', isCorrect: false},
                {answerText2_his: 'переслідування єретиків', isCorrect: false},
                {answerText2_his: 'надання індульгенцій', isCorrect: true}
            ]
        },
        {
            qustionText2_his: 'Відмова Папи Римського Климента VII визнати недійсним шлюб Генріха VIII із Катериною Арагонською стала приводом до початку',
            answerOptions2_his: [
                {answerText2_his: 'гугенотських війн у Франції', isCorrect: false},
                {answerText2_his: '«королівської реформації» в Англії', isCorrect: true},
                {answerText2_his: 'Тридцятилітньої війни в Європі', isCorrect: false},
                {answerText2_his: '«іконоборчого повстання» в Нідерландах', isCorrect: false}
            ]
        },
        {
            qustionText2_his: <img
                                    src={image_var2_his}
                                    height="403"
                                    width="532"
                                    alt="Logo"
                                />,
            answerOptions2_his: [
                {answerText2_his: 'Пітер Брейгель', isCorrect: true},
                {answerText2_his: 'Рембрандт Ван Рейн', isCorrect: false},
                {answerText2_his: 'Сандро Боттічеллі', isCorrect: false},
                {answerText2_his: 'Рафаель Санті', isCorrect: false}
            ]
        },
        {
            qustionText2_his: 'Державу Великих Моголів заснував',
            answerOptions2_his: [
                {answerText2_his: 'Чингісхан', isCorrect: false},
                {answerText2_his: 'Сулейман', isCorrect: false},
                {answerText2_his: 'Токугава', isCorrect: false},
                {answerText2_his: 'Бабур', isCorrect: true}
            ]
        },
        {
            qustionText2_his: '«Священний союз» монархів Росії, Пруссії та Австрії створено',
            answerOptions2_his: [
                {answerText2_his: '1804 р.', isCorrect: false},
                {answerText2_his: '1812 р.', isCorrect: false},
                {answerText2_his: '1815 р.', isCorrect: true},
                {answerText2_his: '1817 р.', isCorrect: false}
            ]
        },
        {
            qustionText2_his: 'За яких обставин у 1036 р. князь Ярослав Мудрий став одноосібним правителем Русі?',
            answerOptions2_his: [
                {answerText2_his: 'у результаті перемоги над печенігами', isCorrect: false},
                {answerText2_his: 'успадкував всі землі Русі після смерті брата Мстислава', isCorrect: true},
                {answerText2_his: 'розбудував Київ як політичний і релігійний центр Русі', isCorrect: false},
                {answerText2_his: 'у результаті перемоги над Святополком Окаянним', isCorrect: false}
            ]
        },
        {
            qustionText2_his: 'Який привілейований стан суспільства сформувався у ХV—ХVІ ст.?',
            answerOptions2_his: [
                {answerText2_his: 'духовенство', isCorrect: false},
                {answerText2_his: 'купецтво', isCorrect: false},
                {answerText2_his: 'шляхта', isCorrect: true},
                {answerText2_his: 'реєстрове козацтво', isCorrect: false}
            ]
        },
        {
            qustionText2_his: 'Друга світова війна розпочалася нападом',
            answerOptions2_his: [
                {answerText2_his: 'Франції на Німеччину', isCorrect: false},
                {answerText2_his: 'Радянського Союзу на Фінляндію', isCorrect: false},
                {answerText2_his: 'Німеччини на Радянський Союз', isCorrect: false},
                {answerText2_his: 'Німеччини на Польщу', isCorrect: true}
            ]
        },
        {
            qustionText2_his: 'Політика радянізації західних областей України в 1939 – 1941 рр. характеризувалася',
            answerOptions2_his: [
                {answerText2_his: 'залученням «буржуазних спеціалістів» до процесу форсованої індустріалізації', isCorrect: false},
                {answerText2_his: 'лояльним ставленням влади до священиків греко-католицької церкви', isCorrect: false},
                {answerText2_his: 'націоналізацією промисловості, торгівлі, земель великих власників', isCorrect: true},
                {answerText2_his: 'налагодженням співробітництва влади з політичними партіями', isCorrect: false}
            ]
        },
    ]

    const [currentQuestion2_his, setCurrentQuestion2_his] = useState(0)
    const [score2_his, setScore2_his] = useState(0)
    const [showScore2_his, setShowScore2_his] = useState(false)

    const handleAnswerOptionClick2_his = (isCorrect) => {
        if (isCorrect) {
            setScore2_his(score2_his +1)
        }

        const nextQuestion2_his = currentQuestion2_his + 1
        if (nextQuestion2_his < questions2_his.length){
            setCurrentQuestion2_his(nextQuestion2_his)
        } else {
            setShowScore2_his(true)
        }
    }
    return(
        <body className="h_bg2">
            <div className="variant2_his">
                {
                    showScore2_his
                        ? <div className="section_score2_his">
                             <div>Правильних відповідей {score2_his} з {questions2_his.length}</div>
                          </div>
                        : <div className="quizz2_his">
                            <div className="question_section2_his">
                                <div className="question_count2_his">
                                    <span>Питання {currentQuestion2_his + 1} / {questions2_his.length}</span> 
                                </div>
                                <div className="question_text2_his">{questions2_his[currentQuestion2_his].qustionText2_his}</div>
                            </div>
                            <div className="answer_section2_his">
                                {questions2_his[currentQuestion2_his].answerOptions2_his.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick2_his(item.isCorrect)}
                                >{item.answerText2_his}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant2_his