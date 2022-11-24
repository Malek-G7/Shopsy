import style from "./nav.module.css"
import Icon from "./BasketIcon/icon"
export default function Nav(){
    return(
        <div>
            <nav className={style.nav}>
                <Icon/>
                <h1 className={style.navtitle}>SHOPSY</h1>
            </nav>
        </div>
    )
}