import React, {useState} from 'react'

import './var9_his.css'


function Variant9_his(){

    const questions9_his = [
        {
            qustionText9_his: 'Виникнення та розквіт держави Маур’їв, Делійського султанату, імперії Великих Моголів — це важливі віхи в історії',
            answerOptions9_his: [
                {answerText9_his: 'Піренейського півострова', isCorrect: false},
                {answerText9_his: 'півострова Мала Азія', isCorrect: false},
                {answerText9_his: 'Аравійського півострова', isCorrect: false},
                {answerText9_his: 'півострова Індостан', isCorrect: true}
            ]
        },
        {
            qustionText9_his: 'Яке географічне відкриття пов’язане з іменем Васко да Гами?',
            answerOptions9_his: [
                {answerText9_his: 'відкрив Нову Зеландію та довів, що Австралія — материк', isCorrect: false},
                {answerText9_his: 'відкрив морський шлях із Європи до країн Сходу навколо Африки', isCorrect: true},
                {answerText9_his: 'здійснив навколосвітню подорож й уперше довів, що Земля є кулею', isCorrect: false},
                {answerText9_his: 'відкрив Америку, шукаючи шлях до Індії через Атлантичний океан', isCorrect: false}
            ]
        },
        {
            qustionText9_his: 'Визнання лютеранства, поряд із католицизмом, офіційним віросповіданням, закріплення за німецькими князями права визначати релігію своїх підданих згідно з принципом «чия влада, того і віра» — це історичне значення',
            answerOptions9_his: [
                {answerText9_his: 'Тордесільяського миру (1494 р.)', isCorrect: false},
                {answerText9_his: 'Аугсбурзького миру (1555 р.)', isCorrect: true},
                {answerText9_his: 'Вічного миру (1686 р.)', isCorrect: false},
                {answerText9_his: 'Ніштадського миру (1721 р.)', isCorrect: false}
            ]
        },
        {
            qustionText9_his: 'Розгортання якого процесу в Англії наприкінці XV–XVІ ст. спричинило появу «Кривавого законодавства»?',
            answerOptions9_his: [
                {answerText9_his: 'акріпачення', isCorrect: false},
                {answerText9_his: 'королівської Реформації', isCorrect: false},
                {answerText9_his: 'промислового перевороту', isCorrect: false},
                {answerText9_his: 'обгороджування', isCorrect: true}
            ]
        },
        {
            qustionText9_his: 'Сходження князя Володимира Мономаха на великокнязівський стіл:',
            answerOptions9_his: [
                {answerText9_his: 'відбулося на запрошення міського віча під час повстання киян', isCorrect: true},
                {answerText9_his: 'стало реалізацією вотчинного права Всеволодовичів на Київ', isCorrect: false},
                {answerText9_his: 'спричинило нову міжусобну війну зі Святославичами', isCorrect: false},
                {answerText9_his: 'було умовою здійснення військового походу проти половців', isCorrect: false}
            ]
        },
        {
            qustionText9_his: 'Позначте іншу назву варягів',
            answerOptions9_his: [
                {answerText9_his: 'Нормани', isCorrect: true},
                {answerText9_his: 'Гуни', isCorrect: false},
                {answerText9_his: 'Угри', isCorrect: false},
                {answerText9_his: 'Венеди', isCorrect: false}
            ]
        },
        {
            qustionText9_his: 'Битва на Синіх Водах була вирішальною у:',
            answerOptions9_his: [
                {answerText9_his: 'процесі ліквідації удільного устрою українських земель', isCorrect: false},
                {answerText9_his: 'встановленні золотоординського панування на Русі', isCorrect: false},
                {answerText9_his: 'переході українських земель під владу Великого князівства Литовського', isCorrect: true},
                {answerText9_his: 'боротьбі Литви і Польщі за галицько-волинську спадщину', isCorrect: false}
            ]
        },
        {
            qustionText9_his: 'Остаточна ліквідація Волинського та Київського удільних князівств у ХV ст. у складі Великого князівства Литовського була зумовлена:',
            answerOptions9_his: [
                {answerText9_his: 'централізацією та уніфікацією влади в Литві й Польщі', isCorrect: true},
                {answerText9_his: 'прагненням не допустити приєднання цих земель до Москви', isCorrect: false},
                {answerText9_his: 'повстанням руської знаті проти литовського панування', isCorrect: false},
                {answerText9_his: 'організацією протидії татарським набігам', isCorrect: false}
            ]
        },
        {
            qustionText9_his: 'Яким терміном можна охарактеризувати участь українців у створеній нацистами дивізії СС «Галичина»?',
            answerOptions9_his: [
                {answerText9_his: 'колабораціонізм', isCorrect: true},
                {answerText9_his: 'остарбайтер', isCorrect: false},
                {answerText9_his: 'космополітизм', isCorrect: false},
                {answerText9_his: 'Голокост', isCorrect: false}
            ]
        },
        {
            qustionText9_his: 'Яке твердження відповідає змісту нацистського плану «Ост»?',
            answerOptions9_his: [
                {answerText9_his: 'перетворення України на промислову базу ІІІ рейху і джерело дешевої робочої сили', isCorrect: false},
                {answerText9_his: 'розчленування території України і створення декількох маріонеткових українських держав', isCorrect: false},
                {answerText9_his: 'перетворення України на «життєвий простір арійської раси»', isCorrect: true},
                {answerText9_his: 'включення України до складу ІІІ рейху на правах автономії', isCorrect: false}
            ]
        },
    ]

    const [currentQuestion9_his, setCurrentQuestion9_his] = useState(0)
    const [score9_his, setScore9_his] = useState(0)
    const [showScore9_his, setShowScore9_his] = useState(false)

    const handleAnswerOptionClick9_his = (isCorrect) => {
        if (isCorrect) {
            setScore9_his(score9_his +1)
        }

        const nextQuestion9_his = currentQuestion9_his + 1
        if (nextQuestion9_his < questions9_his.length){
            setCurrentQuestion9_his(nextQuestion9_his)
        } else {
            setShowScore9_his(true)
        }
    }
    return(
        <body className="h_bg9">
            <div className="variant9_his">
                {
                    showScore9_his
                        ? <div className="section_score9_his">
                             <div>Правильних відповідей {score9_his} з {questions9_his.length}</div>
                          </div>
                        : <div className="quizz9_his">
                            <div className="question_section9_his">
                                <div className="question_count9_his">
                                    <span>Питання {currentQuestion9_his + 1} / {questions9_his.length}</span> 
                                </div>
                                <div className="question_text9_his">{questions9_his[currentQuestion9_his].qustionText9_his}</div>
                            </div>
                            <div className="answer_section9_his">
                                {questions9_his[currentQuestion9_his].answerOptions9_his.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick9_his(item.isCorrect)}
                                >{item.answerText9_his}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant9_his