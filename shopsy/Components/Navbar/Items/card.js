import Item from "./item";
import style from "./item.module.css";

export default function Card() {
  return (
    <div className={style.container}>

     
      <div className={style.item}>
        <button className={style.button}>
        <Item
          title="Lebron james"
          image="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
          price="15,000"
        />
        </button>
      </div>
 

      <div className={style.item}>
      <button className={style.button}>
        <Item
          title="John Cena (Forma Bing Chilling)"
          image="https://e.snmc.io/i/300/s/ae17e2c156474befef2a237ac4f45940/9543622"
          price="15,000"
        />
        </button>
      </div>

      <div className={style.item}>
        <button className={style.button}>
        <Item
          title="Lebron james"
          image="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
          price="15,000"
        />
        </button>
      </div>
 

      <div className={style.item}>
        <button className={style.button}>
        <Item
          title="Lebron james"
          image="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
          price="15,000"
        />
        </button>
      </div>
 
      <div className={style.item}>
        <button className={style.button}>
        <Item
          title="Lebron james"
          image="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
          price="15,000"
        />
        </button>
      </div>
 

      <div className={style.item}>
        <button className={style.button}>
        <Item
          title="Lebron james"
          image="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
          price="15,000"
        />
        </button>
      </div>
 
    </div>
  );
}
