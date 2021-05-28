import React, {useState} from 'react'

import './var10_phy.css'
function Variant10_phy(){

    const questions10_phy = [
        {
            qustionText10_phy: 'Гусеничний трактор їде ґрунтовою дорогою зі швидкістю 18 км/год. Який напрям і яке значення має швидкість точок верхньої горизонтальної частини гусениці трактора для спостерігача, який стоїть на узбіччі дороги?',
            answerOptions10_phy: [
                {answerText10_phy: 'Уперед, 36 км/год', isCorrect: true},
                {answerText10_phy: 'Уперед, 18 км/год', isCorrect: false},
                {answerText10_phy: 'Назад, 36 км/год', isCorrect: false},
                {answerText10_phy: 'Назад, 18 км/год', isCorrect: false}
            ]
        },
        {
            qustionText10_phy: 'Сила тяжіння, прикладена до тіла на висоті 4R від поверхні Землі, менше, ніж біля поверхні в:',
            answerOptions10_phy: [
                {answerText10_phy: '25 разів', isCorrect: true},
                {answerText10_phy: '15 разів', isCorrect: false},
                {answerText10_phy: '10 разів', isCorrect: false},
                {answerText10_phy: '5 разів', isCorrect: false}
            ]
        },
        {
            qustionText10_phy: 'Тіло, маса якого 1 кг, кинули вертикально вгору зі швидкістю 10 м/с. Чому дорівнює робота сили опору повітря, якщо тіло впало на Землю зі швидкістю 8 м/с?',
            answerOptions10_phy: [
                {answerText10_phy: '–10 Дж', isCorrect: false},
                {answerText10_phy: '–18 Дж', isCorrect: true},
                {answerText10_phy: '-36 Дж', isCorrect: false},
                {answerText10_phy: '–82 Дж', isCorrect: false}
            ]
        },
        {
            qustionText10_phy: 'Дерев’яна дошка завтовшки 20 см плаває у воді. Чому дорівнює висота надводної частини дошки? Густина дерева дорівнює 800 кг/м.',
            answerOptions10_phy: [
                {answerText10_phy: '16 см', isCorrect: false},
                {answerText10_phy: '2 см', isCorrect: false},
                {answerText10_phy: '4 см', isCorrect: true},
                {answerText10_phy: '8 см', isCorrect: false}
            ]
        },
        {
            qustionText10_phy: 'У закритому поршнем циліндрі знаходиться ідеальний газ. Укажіть, як зміниться внутрішня енергія газу, якщо стискати газ?',
            answerOptions10_phy: [
                {answerText10_phy: 'зменшується', isCorrect: false},
                {answerText10_phy: 'не змінюється', isCorrect: false},
                {answerText10_phy: 'збільшується', isCorrect: true},
                {answerText10_phy: 'спочатку збільшується, а потім зменшується', isCorrect: false}
            ]
        },
        {
            qustionText10_phy: 'Зі скількох сталевих дротів діаметром 2 мм повинен складатися трос, розрахований на підйом вантажу масою 16 т?',
            answerOptions10_phy: [
                {answerText10_phy: '75', isCorrect: false},
                {answerText10_phy: '80', isCorrect: false},
                {answerText10_phy: '110', isCorrect: false},
                {answerText10_phy: '100', isCorrect: true}
            ]
        },
        {
            qustionText10_phy: 'Через електричну лампу, включену в мережу з напругою 12 В, за 30 с проходить 7,5 · 10^19 електронів. Визначте потужність струму в лампі.',
            answerOptions10_phy: [
                {answerText10_phy: '40 Вт', isCorrect: false},
                {answerText10_phy: '20 Вт', isCorrect: false},
                {answerText10_phy: '4,8 Вт', isCorrect: true},
                {answerText10_phy: '15 Вт', isCorrect: false}
            ]
        },
        {
            qustionText10_phy: 'У одному випадку в зразок германію додали пятивалентной фосфор, а в іншому — тривалентний галій. Який тип провідності переважає в кожному випадку?',
            answerOptions10_phy: [
                {answerText10_phy: 'у першому дірковий, у другому електронний', isCorrect: false},
                {answerText10_phy: 'у першому електронний, у другому дірковий', isCorrect: true},
                {answerText10_phy: 'в обох випадках електронний', isCorrect: false},
                {answerText10_phy: 'в обох випадках дірковий', isCorrect: false}
            ]
        },
        {
            qustionText10_phy: 'Швидкість звуку у воді дорівнює 1500 м/с, а в твердому тілі — 3000 м/с. Відношення частоти звукової хвилі в твердому тілі до частоти звукової хвилі у воді дорівнює',
            answerOptions10_phy: [
                {answerText10_phy: '4', isCorrect: false},
                {answerText10_phy: '2', isCorrect: false},
                {answerText10_phy: '0,5', isCorrect: false},
                {answerText10_phy: '1', isCorrect: true}
            ]
        },
        {
            qustionText10_phy: 'Круглий басейн радіусом 5 м залитий по вінця водою. Над центром басейну на висоті 3 м від поверхні води висить лампа. На яку відстань від краю басейну може відійти людина, зріст якої 1,8 м, щоб усе ще бачити відображення лампи у воді?',
            answerOptions10_phy: [
                {answerText10_phy: '3 м', isCorrect: true},
                {answerText10_phy: '6 м', isCorrect: false},
                {answerText10_phy: '9 м', isCorrect: false},
                {answerText10_phy: '33 см', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion10_phy, setCurrentQuestion10_phy] = useState(0)
    const [score10_phy, setScore10_phy] = useState(0)
    const [showScore10_phy, setShowScore10_phy] = useState(false)

    const handleAnswerOptionClick10_phy = (isCorrect) => {
        if (isCorrect) {
            setScore10_phy(score10_phy +1)
        }

        const nextQuestion10_phy = currentQuestion10_phy + 1
        if (nextQuestion10_phy < questions10_phy.length){
            setCurrentQuestion10_phy(nextQuestion10_phy)
        } else {
            setShowScore10_phy(true)
        }
    }
    return(
        <body className="p_bg10">
            <div className="variant10_phy">
                {
                    showScore10_phy
                        ? <div className="section_score10_phy">
                             <div>Правильних відповідей {score10_phy} з {questions10_phy.length}</div>
                          </div>
                        : <div className="quizz10_phy">
                            <div className="question_section10_phy">
                                <div className="question_count10_phy">
                                    <span>Питання {currentQuestion10_phy + 1} / {questions10_phy.length}</span> 
                                </div>
                                <div className="question_text10_phy">{questions10_phy[currentQuestion10_phy].qustionText10_phy}</div>
                            </div>
                            <div className="answer_section10_phy">
                                {questions10_phy[currentQuestion10_phy].answerOptions10_phy.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick10_phy(item.isCorrect)}
                                >{item.answerText10_phy}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant10_phy