import '../Main/Main.scss'


export default function Main() {
    return (
        <div className="container__main">
            <h1>Привет, ученик!</h1>
            <p>Чтобы узнать новые слова нажми кнопку</p>

            <div className="container__main__btn">
                <button className='main__btn'>Начать</button>
            </div>


        </div>
    )
}