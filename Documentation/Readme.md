# Початок роботи або "Що таке React" <br/>
React (старі назви: React.js, ReactJS) — відкрита `JavaScript` бібліотека для створення інтерфейсів користувача, яка покликана вирішувати проблеми часткового оновлення вмісту веб-сторінки, з якими стикаються в розробці односторінкових застосунків. Розробляється `Facebook`, `Instagram` і спільнотою індивідуальних розробників.<br/>
```jsx
function Hello({ name }) {
  return <div>Hello {name}</div>;
}

ReactDOM.render(
  <Hello name="Дмитро"/>,
  document.getElementById('container')
);
```
Для того,щоб почати роботу нам потрібно встановити `Node.js` (все це можна скачати с офіційного сайту). <br/>
Створюємо наш проект: <br/>
 1. В консоль введемо команду `yarn create-react-app (назва нашого проекту)` <br/>
 2. Перейдемо в директорію нашого проекту за допомогою команди `cd`<br/>
 3. Запустемо сервер, для цього в консоль впишемо `yarn start`<br/>


Після вище перечисленного, отримаємо пусту html-сторінку з адресою http://localhost:3000/ <br/>

# Web training <br/>
Інтернет-тренінг - це навчання, яке проводиться через веб-або онлайн-середовище. Веб-навчання часто називають віртуальним навчанням або дистанційним навчанням і використовує хмарні обчислювальні засоби для доступу, адміністрування та аналітики.Технологічне навчання використовує комп’ютерні засоби для вдосконалення навчального процесу, як правило, залучаючи слухачів активно, а не пасивно.Навчання на основі технологій, навпаки, сприяє самостійному навчанню з використанням багатьох медіа-джерел та великою кількістю можливостей оцінки.
Головна перевага навчання на основі технологій для опитувальних досліджень включають: підвищення доступності навчання.<br/>

# Структура <br/>
Ознаймимось із структурою проекта:

![яяя](https://user-images.githubusercontent.com/47575620/119910221-5859a380-bf5f-11eb-9dbf-751259be5f57.png)

# Public <br/>
Містить файл index.html , який відображає на сайті `jsx` скріпт написаний в `App.js`.

# Src <br/>
`App.css` - містить стилізацію.<br/>
`App.js` - основний файл проекту.<br/>
`App.test.js` - це набір допоміжних функцій.<br/>
`index.js` - обробляє компонети отрмані від `App.js`.<br/>
## Components<br/>
Містить файл `Header.js`, в якому знаходиться функціонал нашого сайту.

## Pages<br/>
Папка, в якій містяться файли з наповненням сторінок сайту.(`Home.js`,`About.js`,`Contacts.js`,`georgaphy.js`,`math.js`,`biology.js`,`ukranian.js`,`phisics.js`,`history.js`)

## Variants<br/>
Папки, в яких знаходяться тести по предметам.(географія,математика,біологія,українська мова,історія,фізика)


# Створюємо сайт
Перейдемо в головний файл `App.js`. Сайт буде складатися с навігаційного меню, кнопок для входу на свій обліковий запис, кнопок для переходу до тестування з кожного предмета: георафія, історія, українська мова, фізика, біологія, математика.<br/>
``` jsx
const App = () => {
    return (
        <Header/>
    );
};

export default App;
```
Створимо функцію:<br/>
``` jsx
const Header = () => {
	return (
	)
}
export default Header;

```
Далі створюємо в файлі `Header.js` панель-меню за допомогою Bootstrap. Bootstrap - це фронтенд розробка сайтів та інтерфейсів адмінок. Фреймворк Bootstrap є Найпопулярнішим. Він дозволяє верстати сайти в кілька разів швидше, ніж на «чистому» CSS і JavaScript. Також надає можливість створювати досить якісні макети.<br/>
``` jsx
import { Container, Nav, Navbar} from 'react-bootstrap';
```
Маємо:<br/>
``` jsx
<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
               <Container>
                   <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="60"
                            width="60"
                            className="d-inline-block align-top"
                            alt="Logo"
                            style={{'borderRadius':'100%'}}
                        /> 
                   </Navbar.Brand>
                   <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                   <Navbar.Collapse id="responsive-navbar-nav">
                       <Nav className="mr-auto">
                           <Nav.Link href="/"> Головна сторінка </Nav.Link>
                           <Nav.Link href="/about"> Про нас </Nav.Link>
                           <Nav.Link href="/contacts"> Контакти </Nav.Link>
                           <Nav.Link href="/results">Результати тестування</Nav.Link>
                           
                       </Nav>

```
Також по правій стороні створимо кнопку Увійти (Вийти), для подальшої ідентифікації користувача, з допомогою платформи Auth0.  Auth0 - це інструмент аутентифікації як сервісу, який спрощує реалізацію функцій, пов'язаних з перевіркою достовірності для вашого застосування або сайту.
Тому, створимо константи ` loginWithRedirect,logout, isAuthenticated `<br/>
``` jsx
const { loginWithRedirect,logout, isAuthenticated } = useAuth0();
``` 
Де:<br/>
*	loginWithRedirect – функція для входу в обліковий запис
* logout - функція для виходу з облікового запису
* isAuthenticated  - функція для перевірки, якщо користувач зайшов в свій акаунт, то на головній сторінці відображається фото(фото з електронної почти) і невелика інформація про нього. Якщо користувач не ввійшов, то в рамці відображається текст: «Спочатку зайдіть в акаунт!»


``` jsx
{ isAuthenticated  ?
                     <div>
                        <body className='bg2_info1'>
                            <img className='pict_avatar' src={user.picture} alt={user.name} />
                            <h3 className='info'>Ім`я: {user.given_name}</h3>
                            <h3 className='info'>Прізвище: {user.family_name}</h3>
                            <h3 className='info'>Пошта: {user.email}</h3>
                            <h3 className='info'>Нікнейм: {user.nickname}</h3>
                        </body>
                    </div>
                    :
                    <div>
                        <body className='bg2_info2'>
                            <h1 className='info1_1'>Спочатку зайдіть</h1>
                            <h1 className='info1_2'>в акаунт!</h1>
                        </body>
                    </div>
                }

```
Маємо загальний вигляд нашої головної сторінки:<br/>
![я1](https://user-images.githubusercontent.com/47575620/119914270-7a0b5880-bf68-11eb-8ea1-7c32b2844c8b.png)

Перейдемо до створення тестів. Сторінка кожного предмета буде виглядати однаково, тому код продемонструємо тільки один раз. Почнемо для створення панелі для вибору тесту. Всього тестів буде 10, по 10 питань.<br/>
```jsx
<Tab.Container >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first_geo">Тест 1 </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second_geo">Тест 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third_geo">Тест 3</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four_geo">Тест 4</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five_geo" >Тест 5</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="six_geo">Тест 6</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seven_geo">Тест 7</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="eight_geo">Тест 8</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="nine_geo">Тест 9</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="ten_geo">Тест 10</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        
                    </Row>
                </Tab.Container>

```
Кожен тест складається з лічильника питань, самих питань і 4 кнопок з варіантами відповідей<br/>
Створимо функцію для першого тесту: <br/>
```jsx
function Variant1_his(){
	return(
	)
}
export default Variant1_his
```
Далі додамо в якості констант:<br/>
* 10 питань з варіантами відповідей<br/>

```jsx
const questions1_his = [
        {
            qustionText1_his: 'Період Нового царства в історії Давнього Єгипту завершився',
            answerOptions1_his: [
                {answerText1_his: 'ХVІІ ст. до н. е.', isCorrect: false},
                {answerText1_his: 'ХV ст. до н. е.', isCorrect: false},
                {answerText1_his: 'ХIІІ ст. до н. е.', isCorrect: false},
                {answerText1_his: 'ХІ ст. до н. е.', isCorrect: true}
            ]
        },
```
* Лічильник кількості питань<br/>


```jsx
const [currentQuestion1_his, setCurrentQuestion1_his] = useState(0)

```
* Кількість балів


```jsx
const [score1_his, setScore1_his] = useState(0)
```
* Показ отриманих балів


```jsx
const [showScore1_his, setShowScore1_his] = useState(false)
```

Після проходження всіх 10 питань, в тій же області має висвітитися результат тесту<br/>
```jsx
 {
                    showScore1_his
                        ? <div className="section_score1_his">
                             <div>Правильних відповідей {score1_his} з {questions1_his.length}</div>
                          </div>
                        : <div className="quizz1_his">
                            <div className="question_section1_his">
                                <div className="question_count1_his">
                                    <span>Питання {currentQuestion1_his + 1} / {questions1_his.length}</span> 
                                </div>
                                <div className="question_text1_his">{questions1_his[currentQuestion1_his].qustionText1_his}</div>
                            </div>
                            <div className="answer_section1_his">
                                {questions1_his[currentQuestion1_his].answerOptions1_his.map(item => (
                                <button
                                    onClick={() => handleAnswerOptionClick1_his(item.isCorrect)}
                                >{item.answerText1_his}</button>
                                )
                          )}

```
Для відображення всіх результатів пройдених тестів, створимо таблицю для кожного предмета <br/>
Тому, перейдемо у вкладку «Результати тестування». Спочатку створимо у файлі  `results.js` функцію `results` <br/>
```jsx
export default class results extends Component {
    render() {
        return (
        )
    }
}
``` 
Далі створимо файли: `res_bio.js`; ` res_math.js `; ` res_phy.js `; ` res_ukr.js `; ` res_his.js `; ` res_geo.js ` <br/>
Як приклад виберемо файл ` res_geo.js `. Створимо функцію <br/>
```jsx
const His = () => {
    return (
 	)
}
export default His;
```
Створимо в цій функції таблицю <br/>
```jsx
<Table striped bordered hover variant="dark" size="sm" className='tbl_geo'>
            <thead>
                <tr>
                <th>Номер тесту</th>
                <th>Максимальний бал</th>
                <th>Балів отримано</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>10</td>
                <td></td>
                </tr>
                <tr>
                <td>2</td>
                <td>10</td>
                <td></td>
                </tr>
                <tr>
                <td>3</td>
                <td >10</td>
                <td></td>
                </tr>
                <tr>
                <td>4</td>
                <td >10</td>
                <td></td>
                </tr>
                <tr>
                <td>5</td>
                <td >10</td>
                <td></td>
                </tr>
                <tr>
                <td>6</td>
                <td >10</td>
                <td></td>
                </tr>
                <tr>
                <td>7</td>
                <td >10</td>
                <td></td>
                </tr>
                <tr>
                <td>8</td>
                <td >10</td>
                <td></td>
                </tr>
                <tr>
                <td>9</td>
                <td >10</td>
                <td></td>
                </tr>
                <tr>
                <td>10</td>
                <td >10</td>
                <td></td>
                </tr>
            </tbody>
        </Table>

```
![я55](https://user-images.githubusercontent.com/47575620/119918508-4a148300-bf71-11eb-9840-c990d62c8248.png)
![я551](https://user-images.githubusercontent.com/47575620/119918524-4ed93700-bf71-11eb-8506-3d31b6968961.png)
![я'1](https://user-images.githubusercontent.com/47575620/119918532-513b9100-bf71-11eb-9883-4ca92f03b2c9.png)
![я2](https://user-images.githubusercontent.com/47575620/119918913-fbb3b400-bf71-11eb-8ee3-f65cec9699da.png)
![Uploading я2.png…]()

![я3](https://user-images.githubusercontent.com/47575620/119918558-5993cc00-bf71-11eb-8fd6-e01b77413347.png)
![я4](https://user-images.githubusercontent.com/47575620/119918656-8c3dc480-bf71-11eb-879d-b9bb88af655b.png)




