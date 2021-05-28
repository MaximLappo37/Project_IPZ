import React, {useState} from 'react'

import './var6_phy.css'
function Variant6_phy(){

    const questions6_phy = [
        {
            qustionText6_phy: 'Першу половину часу тіло рухалося зі швидкістю V1 = 10 м/с, другу половину часу — зі швидкістю V2 = 30 м / с. Чому дорівнює середня швидкість тіла на всьому шляху?',
            answerOptions6_phy: [
                {answerText6_phy: '50 м/с', isCorrect: false},
                {answerText6_phy: '40 м/с', isCorrect: false},
                {answerText6_phy: '20 м/с', isCorrect: true},
                {answerText6_phy: '10 м/с', isCorrect: false}
            ]
        },
        {
            qustionText6_phy: 'Спортивний автомобіль вирушає зі старту з постійним прискоренням 4 м/с2. Який шлях він пройде, доки не розвине швидкості 144 км/год?',
            answerOptions6_phy: [
                {answerText6_phy: '576 м', isCorrect: false},
                {answerText6_phy: '160 м', isCorrect: false},
                {answerText6_phy: '200 м', isCorrect: true},
                {answerText6_phy: '400 м', isCorrect: false}
            ]
        },
        {
            qustionText6_phy: 'Вантаж масою 1 кг під дією сили 50 Н, спрямованої вертикально вгору, піднімається на висоту 3 метри. Зміна кінетичної енергії вантажу при цьому становить',
            answerOptions6_phy: [
                {answerText6_phy: '30 Дж', isCorrect: false},
                {answerText6_phy: '120 Дж', isCorrect: true},
                {answerText6_phy: '180 Дж', isCorrect: false},
                {answerText6_phy: '150 Дж', isCorrect: false}
            ]
        },
        {
            qustionText6_phy: 'У механіці закон збереження імпульсу є наслідком дії',
            answerOptions6_phy: [
                {answerText6_phy: 'І закону Ньютона', isCorrect: false},
                {answerText6_phy: 'ІІІ закону Ньютона', isCorrect: true},
                {answerText6_phy: 'ІІ закону Ньютона', isCorrect: false},
                {answerText6_phy: 'закону всесвітнього тяжіння', isCorrect: false}
            ]
        },
        {
            qustionText6_phy: 'Після того як балон, у якому знаходилося повітря під тиском 1МПа, з’єднали з порожнім балоном об’ємом 4 л, у цих балонах установився тиск 800 кПа. Знайдіть об’єм першого балона.',
            answerOptions6_phy: [
                {answerText6_phy: '3,2 л', isCorrect: false},
                {answerText6_phy: '80 л', isCorrect: false},
                {answerText6_phy: '5 л', isCorrect: false},
                {answerText6_phy: '16 л', isCorrect: true}
            ]
        },
        {
            qustionText6_phy: 'Парціальний тиск водяної пари в повітрі при 20 °С дорівнює 0,466 кПа, тиск насичених водяних парів при цій температурі 2,33 кПа. Відносна вологість повітря дорівнює',
            answerOptions6_phy: [
                {answerText6_phy: '30%', isCorrect: false},
                {answerText6_phy: '40%', isCorrect: false},
                {answerText6_phy: '20%', isCorrect: true},
                {answerText6_phy: '10%', isCorrect: false}
            ]
        },
        {
            qustionText6_phy: 'Жорсткість гумового джгута k. Чому дорівнює жорсткість цього джгута, складеного вдвічі?',
            answerOptions6_phy: [
                {answerText6_phy: '4k', isCorrect: true},
                {answerText6_phy: '1,5 k', isCorrect: false},
                {answerText6_phy: 'k', isCorrect: false},
                {answerText6_phy: '2k', isCorrect: false}
            ]
        },
        {
            qustionText6_phy: 'Сила струму в провіднику опором 2 Ом, підключеному до джерела струму з ЕРС 1,1 В, дорівнює 0,5 А. Визначте силу струму короткого замикання джерела.',
            answerOptions6_phy: [
                {answerText6_phy: '1,1 А', isCorrect: false},
                {answerText6_phy: '0,55 А', isCorrect: false},
                {answerText6_phy: '11 А', isCorrect: false},
                {answerText6_phy: '5,5 А', isCorrect: true}
            ]
        },
        {
            qustionText6_phy: 'При рівномірній зміні сили струму від 10 до 5 А в котушці з індуктивністю 400 мГн виникає ЕРС самоіндукції 20 В. Знайти час, протягом якого відбувалася зміна сили струму.',
            answerOptions6_phy: [
                {answerText6_phy: '0,01 с', isCorrect: false},
                {answerText6_phy: '0,1 с', isCorrect: true},
                {answerText6_phy: '10 с', isCorrect: false},
                {answerText6_phy: '1 с', isCorrect: false}
            ]
        },
        {
            qustionText6_phy: 'Укажіть фізичну величину, яка визначає висоту звуку',
            answerOptions6_phy: [
                {answerText6_phy: 'частота коливань', isCorrect: true},
                {answerText6_phy: 'фаза коливань', isCorrect: false},
                {answerText6_phy: 'амплітуда коливань', isCorrect: false},
                {answerText6_phy: 'початкова фаза коливань', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion6_phy, setCurrentQuestion6_phy] = useState(0)
    const [score6_phy, setScore6_phy] = useState(0)
    const [showScore6_phy, setShowScore6_phy] = useState(false)

    const handleAnswerOptionClick6_phy = (isCorrect) => {
        if (isCorrect) {
            setScore6_phy(score6_phy +1)
        }

        const nextQuestion6_phy = currentQuestion6_phy + 1
        if (nextQuestion6_phy < questions6_phy.length){
            setCurrentQuestion6_phy(nextQuestion6_phy)
        } else {
            setShowScore6_phy(true)
        }
    }
    return(
        <body className="p_bg6">
            <div className="variant6_phy">
                {
                    showScore6_phy
                        ? <div className="section_score6_phy">
                             <div>Правильних відповідей {score6_phy} з {questions6_phy.length}</div>
                          </div>
                        : <div className="quizz6_phy">
                            <div className="question_section6_phy">
                                <div className="question_count6_phy">
                                    <span>Питання {currentQuestion6_phy + 1} / {questions6_phy.length}</span> 
                                </div>
                                <div className="question_text6_phy">{questions6_phy[currentQuestion6_phy].qustionText6_phy}</div>
                            </div>
                            <div className="answer_section6_phy">
                                {questions6_phy[currentQuestion6_phy].answerOptions6_phy.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick6_phy(item.isCorrect)}
                                >{item.answerText6_phy}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant6_phy