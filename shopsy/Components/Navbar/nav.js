import style from "./nav.module.css"
import Icon from "./BasketIcon/icon"
import Search from "./SearchBar/search"
export default function Nav(){
    return(
        <div>
            <nav className={style.nav}>
                <Icon/>
                <h1 className={style.navtitle}>SHOPSY</h1>
                <Search/>
            </nav>
        </div>
    )
}