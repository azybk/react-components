import style from './style.module.css'

function Header() {
    return (
        <div className={style['header']}>
            <h1>Header</h1>
            <h3 className={style['logo']}>Logo</h3>
        </div>
    )
}

export default Header