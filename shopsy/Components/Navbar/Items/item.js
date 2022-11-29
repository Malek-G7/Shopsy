import style from "./item.module.css"
export default function Item(props){
    return(
        <div className={style.detail}>
        <img src = {props.image}/>
        <h1> {props.title}</h1>
        <h3> {props.price}</h3>

        </div>
    )
}