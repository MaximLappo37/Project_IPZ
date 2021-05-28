import React, {useState} from 'react'

import './var7_geo.css'
import image_var7_geo from './image_var7_geo.png';

function Variant7_geo(){

    const questions7_geo = [
        {
            qustionText7_geo: 'Україна розташована',
            answerOptions7_geo: [
                {answerText7_geo: 'на захід від Гринвіцького меридіана', isCorrect: false},
                {answerText7_geo: 'на стику двох великих тектонічних структур', isCorrect: true},
                {answerText7_geo: 'у межах першого годинного поясу', isCorrect: false},
                {answerText7_geo: 'у трьох природних зонах', isCorrect: false}
            ]
        },
        {
            qustionText7_geo: 'Які наукові наслідки Першої навколосвітньої подорожі?',
            answerOptions7_geo: [
                {answerText7_geo: 'досягнуто точки Північного полюса й узбережжя Антарктиди', isCorrect: false},
                {answerText7_geo: 'доведено, що Земля має форму кулі, а всі океани сполучені між собою', isCorrect: true},
                {answerText7_geo: 'виявлено, що на Землі площа суходолу більша, ніж поверхні океанів', isCorrect: false},
                {answerText7_geo: 'підтверджено існування шести материків і чотирьох океанів', isCorrect: false}
            ]
        },
        {
            qustionText7_geo: 'За розвіданими запасами яких руд Україна посідає перше місце серед країн Європи?',
            answerOptions7_geo: [
                {answerText7_geo: 'ртутних, мідних', isCorrect: false},
                {answerText7_geo: 'марганцевих, титанових', isCorrect: true},
                {answerText7_geo: 'поліметалевих, алюмінієвих', isCorrect: false},
                {answerText7_geo: 'нікелевих, цинкових', isCorrect: false}
            ]
        },
        {
            qustionText7_geo: <img
                                src={image_var7_geo}
                                height="350"
                                width="550"
                                alt="Logo"
                                />,
            answerOptions7_geo: [
                {answerText7_geo: '«Басейни річок»', isCorrect: true},
                {answerText7_geo: '«Долини річок»', isCorrect: false},
                {answerText7_geo: '«Типи живлення річок»', isCorrect: false},
                {answerText7_geo: '«Густота річкової мережі»', isCorrect: false}
            ]
        },
        {
            qustionText7_geo: 'Панамериканське шосе — це найдовша у світі мережа автодоріг, що сполучає',
            answerOptions7_geo: [
                {answerText7_geo: 'східне і західне узбережжя Південної Америки', isCorrect: false},
                {answerText7_geo: 'Приатлантичний мегаполіс з Каліфорнійським', isCorrect: false},
                {answerText7_geo: 'Аляску з південними районами Аргентини', isCorrect: true},
                {answerText7_geo: 'внутрішні райони сельви з узбережжям материка', isCorrect: false}
            ]
        },
        {
            qustionText7_geo: 'Укажіть особливість політичної карти Латинської Америки',
            answerOptions7_geo: [
                {answerText7_geo: 'за формою правління більшість країн є республіками', isCorrect: true},
                {answerText7_geo: 'за адміністративно-територіальним устроєм усі країни унітарні', isCorrect: false},
                {answerText7_geo: 'майже всі країни належать до групи найменш розвинених', isCorrect: false},
                {answerText7_geo: 'немає залежних територій, підпорядкованих іншим державам', isCorrect: false}
            ]
        },
        {
            qustionText7_geo: 'Укажіть ознаку, за якою можна зробити припущення про опускання узбережжя Чорного моря',
            answerOptions7_geo: [
                {answerText7_geo: 'зміна напрямку морських течій', isCorrect: false},
                {answerText7_geo: 'утворення заток-лиманів', isCorrect: true},
                {answerText7_geo: 'утворення піщаних морських пляжів', isCorrect: false},
                {answerText7_geo: 'зменшення об’єму річкового стоку', isCorrect: false}
            ]
        },
        {
            qustionText7_geo: 'Де в Україні видобувають найбільший обсяг природного газу?',
            answerOptions7_geo: [
                {answerText7_geo: 'у Дніпровсько-Донецькій нафтогазоносній області', isCorrect: true},
                {answerText7_geo: 'у Карпатській нафтогазоносній області', isCorrect: false},
                {answerText7_geo: 'у Причорноморсько-Кримській нафтогазоносній області', isCorrect: false},
                {answerText7_geo: 'на шельфі Чорного й Азовського морів', isCorrect: false}
            ]
        },
        {
            qustionText7_geo: 'Яка форма рельєфу утворюється в результаті дії зовнішніх сил, описаних в уривку з художнього твору: «Навесні в борозну ринув каламутний потік талої води. Він мчав схилом униз, поглиблюючи вибоїну, розмиваючи її, підточуючи її стінки, забираючи з собою часом цілі брили землі»?',
            answerOptions7_geo: [
                {answerText7_geo: 'печера', isCorrect: false},
                {answerText7_geo: 'річкова долина', isCorrect: false},
                {answerText7_geo: 'яр', isCorrect: true},
                {answerText7_geo: 'улоговина видування', isCorrect: false}
            ]
        },
        {
            qustionText7_geo: 'Якщо на рівнинних просторах серед моря злакових трав з’являється гуанако, проноситься кілька білохвостих оленів, сторожко пригинає голову нанду, і лише вітер здаля доносить голоси гаучо, то це — заповідна територія, де охороняється вцілілий острівець',
            answerOptions7_geo: [
                {answerText7_geo: 'саван на Заході Африки', isCorrect: false},
                {answerText7_geo: 'степів у Середній Азії', isCorrect: false},
                {answerText7_geo: 'прерій у Північній Америці', isCorrect: false},
                {answerText7_geo: 'пампи в Південній Америці', isCorrect: true}
            ]
        }
    ]

    const [currentQuestion7_geo, setCurrentQuestion7_geo] = useState(0)
    const [score7_geo, setScore7_geo] = useState(0)
    const [showScore7_geo, setShowScore7_geo] = useState(false)

    const handleAnswerOptionClick7_geo = (isCorrect) => {
        if (isCorrect) {
            setScore7_geo(score7_geo +1)
        }

        const nextQuestion7_geo = currentQuestion7_geo + 1
        if (nextQuestion7_geo < questions7_geo.length){
            setCurrentQuestion7_geo(nextQuestion7_geo)
        } else {
            setShowScore7_geo(true)
        }
    }
    return(
        <body className="g_bg7">
            <div className="variant7_geo">
                {
                    showScore7_geo
                        ? <div className="section_score7_geo">
                             <div>Правильних відповідей {score7_geo} з {questions7_geo.length}</div>
                          </div>
                        : <div className="quizz7_geo">
                            <div className="question_section7_geo">
                                <div className="question_count7_geo">
                                    <span>Питання {currentQuestion7_geo + 1} / {questions7_geo.length}</span> 
                                </div>
                                <div className="question_text7_geo">{questions7_geo[currentQuestion7_geo].qustionText7_geo}</div>
                            </div>
                            <div className="answer_section7_geo">
                                {questions7_geo[currentQuestion7_geo].answerOptions7_geo.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick7_geo(item.isCorrect)}
                                >{item.answerText7_geo}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant7_geo