import Item from "./item";
import style from "./item.module.css";

export default function Card() {
  return (
    <div className={style.container}>
      <div className={style.item}>
        
        <Item
          title="Lebron james"
          image="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
          price="$15,000"
        />
      </div>

      <div className={style.item}>
        <Item
          title="John Cena (Forma Bing chilling)"
          image="https://pbs.twimg.com/ext_tw_video_thumb/1458075877884022787/pu/img/EdV3z0oi3k3bzVrd.jpg:large"
          price="$150,000"
        />
      </div>

      <div className={style.item}>
        <Item
          title="The Rock (Forma La Eyebrow)"
          image="https://external-preview.redd.it/iSpSIg6Vu4paQxA77pKwfwMcOx9iRkVr8tIUVvsjsBs.png?format=pjpg&auto=webp&s=7e23a2aacc1f3e583c42080b0daa03438290eeae"
          price="$2,000,000"
        />
      </div>

      <div className={style.item}>
        <Item
          title="Dababy (Forma la coche)"
          image="https://i.kym-cdn.com/entries/icons/facebook/000/036/822/cover4.jpg"
          price="$1,000"
        />
      </div>
      <div className={style.item}>
        <Item
          title="Lebron james"
          image="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
          price="$15,000"
        />
      </div>

      <div className={style.item}>
        <Item
          title="Lebron james"
          image="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
          price="$15,000"
        />
      </div>
    </div>
  );
}
