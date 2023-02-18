import style from './style.module.css'

function Card({course, price, isAvailable}) {
    return (
        <div className={style['card']} style={{backgroundColor: isAvailable? 'green': 'grey'}}>
            <h3>{course}</h3>
            <h3>{price}</h3>
        </div>
    )
}

export default Card