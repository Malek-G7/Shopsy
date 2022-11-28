import Item from "./item"
import style from "./item.module.css"

export default function Card(){
    return(
        <div className={style.container}>
        <Item
        title = "Lebron james"
        image = 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'
        price = "15,000"
        />

        <Item
        title = "The rock"
        image = 'https://cdn.imgbin.com/12/3/23/imgbin-dwayne-johnson-dwayne-johnson-TA9JnLzB34a2qQN2VyW9xkEVy.jpg'
        price = "15,000"
        />
        </div>



    )
}