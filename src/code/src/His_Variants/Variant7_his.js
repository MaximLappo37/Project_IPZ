import React, {useState} from 'react'

import './var7_his.css'


function Variant7_his(){

    const questions7_his = [
        {
            qustionText7_his: 'Про кого з персонажів давньоєврейської історії йдеться в цитованому документі? «Вождь і законодавець народу єврейського, основоположник іудаїзму. Здійснив Вихід євреїв із Давнього Єгипту та, згуртувавши ізраїльські коліна в єдиний народ, привів його до Землі Обітованої. Перед смертю своїм наступником призначив Ісуса Навіна, керівника єврейського війська».',
            answerOptions7_his: [
                {answerText7_his: 'Соломона', isCorrect: false},
                {answerText7_his: 'Мойсея', isCorrect: true},
                {answerText7_his: 'Давида', isCorrect: false},
                {answerText7_his: 'Саула', isCorrect: false}
            ]
        },
        {
            qustionText7_his: 'Велика грецька колонізація узбережжя Середземного та Чорного морів тривала впродовж',
            answerOptions7_his: [
                {answerText7_his: 'ХІ–ІХ ст. до н. е.', isCorrect: false},
                {answerText7_his: 'VIII–VI ст. до н. е.', isCorrect: true},
                {answerText7_his: 'V–IV ст. до н. е.', isCorrect: false},
                {answerText7_his: 'ІІІ–І ст. до н. е.', isCorrect: false}
            ]
        },
        {
            qustionText7_his: 'Що стало наслідком Пунічних війн (ІІІ–ІІ ст. до н. е.)?',
            answerOptions7_his: [
                {answerText7_his: 'установлення панування Риму в Західному Середземномор’ї', isCorrect: true},
                {answerText7_his: 'утворення Римсько-італійського союзу під зверхністю Риму', isCorrect: false},
                {answerText7_his: 'запровадження Римом провінційного управління в Сирії', isCorrect: false},
                {answerText7_his: 'ліквідація Римом Ахейського та інших грецьких союзів', isCorrect: false}
            ]
        },
        {
            qustionText7_his: 'Який матеріал використовувався для написання книг у Київській Русі?',
            answerOptions7_his: [
                {answerText7_his: 'береста', isCorrect: false},
                {answerText7_his: 'папірус', isCorrect: false},
                {answerText7_his: 'пергамент', isCorrect: true},
                {answerText7_his: 'воскові таблички', isCorrect: false}
            ]
        },
        {
            qustionText7_his: 'Відносини з якою країною були пріоритетними для князів Аскольда, Олега, Ігоря?',
            answerOptions7_his: [
                {answerText7_his: 'Хозарським каганатом', isCorrect: false},
                {answerText7_his: 'Священною Римською імперією', isCorrect: false},
                {answerText7_his: 'Арабським халіфатом', isCorrect: false},
                {answerText7_his: 'Візантійською імперією', isCorrect: true}
            ]
        },
        {
            qustionText7_his: 'Унаслідок укладення Кревської унії:',
            answerOptions7_his: [
                {answerText7_his: 'українським землям вдалося позбутися монгольського панування', isCorrect: false},
                {answerText7_his: 'відбулось об’єднання Литви і Польщі в єдину державу Річ Посполиту', isCorrect: false},
                {answerText7_his: 'загострилась внутрішньополітична боротьба у Великому князівстві Литовському', isCorrect: true},
                {answerText7_his: 'відбувся розкол у православній церкві й утворення греко-католицької церкви', isCorrect: false}
            ]
        },
        {
            qustionText7_his: 'Згідно з планом «Барбаросса» головний удар німецьких військ завдавала група армій:',
            answerOptions7_his: [
                {answerText7_his: '«Південна Україна» в Молдавії в напрямку на Одесу', isCorrect: false},
                {answerText7_his: '«Центр» у Білорусії в напрямку на Москву', isCorrect: true},
                {answerText7_his: '«Південь» в Україні в напрямку на Київ', isCorrect: false},
                {answerText7_his: '«Північ» у Прибалтиці в напрямку на Ленінград', isCorrect: false}
            ]
        },
        {
            qustionText7_his: 'Із якого плацдарму почався наступ радянських військ, що завершився визволенням столиці УРСР Києва від нацистських загарбників?',
            answerOptions7_his: [
                {answerText7_his: 'Лютізького', isCorrect: true},
                {answerText7_his: 'Букринського', isCorrect: false},
                {answerText7_his: 'Миколаївського', isCorrect: false},
                {answerText7_his: 'Кременчуцького', isCorrect: false}
            ]
        },
        {
            qustionText7_his: 'Що в роки Великої Вітчизняної війни називалося «Східним валом»?',
            answerOptions7_his: [
                {answerText7_his: 'німецькі укріплення вздовж правого берега Дніпра', isCorrect: true},
                {answerText7_his: 'радянські укріплення вздовж нового кордону', isCorrect: false},
                {answerText7_his: 'східний кордон ІІІ рейху', isCorrect: false},
                {answerText7_his: 'лінія радянсько-польського кордону, що існував у 1921—1939 рр.', isCorrect: false}
            ]
        },
        {
            qustionText7_his: 'Яку назву мав координаційний орган партизанського руху в Україні, який було створено в 1942 р. під керівництвом генерала Т. Строкача?',
            answerOptions7_his: [
                {answerText7_his: 'Український відділ партизанського руху', isCorrect: false},
                {answerText7_his: 'Український партизанський центр', isCorrect: false},
                {answerText7_his: 'Партизанський штаб України', isCorrect: false},
                {answerText7_his: 'Український штаб партизанського руху', isCorrect: true}
            ]
        },
    ]

    const [currentQuestion7_his, setCurrentQuestion7_his] = useState(0)
    const [score7_his, setScore7_his] = useState(0)
    const [showScore7_his, setShowScore7_his] = useState(false)

    const handleAnswerOptionClick7_his = (isCorrect) => {
        if (isCorrect) {
            setScore7_his(score7_his +1)
        }

        const nextQuestion7_his = currentQuestion7_his + 1
        if (nextQuestion7_his < questions7_his.length){
            setCurrentQuestion7_his(nextQuestion7_his)
        } else {
            setShowScore7_his(true)
        }
    }
    return(
        <body className="h_bg7">
            <div className="variant7_his">
                {
                    showScore7_his
                        ? <div className="section_score7_his">
                             <div>Правильних відповідей {score7_his} з {questions7_his.length}</div>
                          </div>
                        : <div className="quizz7_his">
                            <div className="question_section7_his">
                                <div className="question_count7_his">
                                    <span>Питання {currentQuestion7_his + 1} / {questions7_his.length}</span> 
                                </div>
                                <div className="question_text7_his">{questions7_his[currentQuestion7_his].qustionText7_his}</div>
                            </div>
                            <div className="answer_section7_his">
                                {questions7_his[currentQuestion7_his].answerOptions7_his.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick7_his(item.isCorrect)}
                                >{item.answerText7_his}</button>
                                )
                          )}
                        </div>
                    </div>
                }
            </div>
        </body>

    )

}
export default Variant7_his